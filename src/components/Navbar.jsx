import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import TextCarousel from "./TextCarousel";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const isActive = (href) => location.pathname === href;

  const navigationItems = [
    { label: "E-Portal", href: "/portal" },
    { label: "E-Learning", href: "https://elearn.madukauniversity.edu.ng/" },
    {
      label: "Apply Online",
      href: "https://admissions.madukauniversity.edu.ng/",
    },
    { label: "OER", href: "https://oer.madukauniversity.edu.ng/" },
    { label: "MU-Library", href: "https://library.madukauniversity.edu.ng/" },
    { label: "COLLEGE", href: "https://mucollege.com.ng/" },
    { label: "STAFF", href: "/portal/staff" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Academic Programmes", href: "/programmes" },
    { name: "Campus Life", href: "/campus-life" },
    { name: "Prospectus", href: "/prospectus" },
    {
      name: "Admission List",
      href: "https://madukauniversity.edu.ng/admission-list",
    },
    { name: "Business School", href: "https://school.madukauniversity.edu.ng" },
    { name: "E-Portal", href: "/portal" },
    { name: "E-Learning", href: "https://elearn.madukauniversity.edu.ng/" },
    {
      name: "Apply Online",
      href: "https://admissions.madukauniversity.edu.ng/",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
    {
      name: "Library",
      href: "https://library.madukauniversity.edu.ng/",
    },
    {
      name: "Students Results",
      href: "https://result.madukauniversity.edu.ng/",
    },
    { name: "CMS", href: "/cms/login" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Title */}
        <a href="/">
          <div className="flex items-center gap-2">
            <img
              src="/mulogo.webp"
              alt="University Logo"
              className="w-10 h-10 object-cover rounded-full"
            />
            <h1
              className="text-2xl font-bold text-blue-800"
              style={{ color: "#00356B" }}
            >
              Maduka University
            </h1>
          </div>
        </a>

        {/* Medium Menu */}
        <div className="hidden md:flex lg:hidden flex-wrap justify-center gap-2 p-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-gray-700 font-medium hover:text-blue-600 transition text-sm ${
                isActive(link.href)
                  ? "text-white bg-[#00356B] px-2 py-1 rounded"
                  : ""
              }`}
            >
              {link.name.toLocaleUpperCase()}
            </a>
          ))}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-col space-y-2">
          <div className="flex space-x-8">
            {navLinks.slice(0, 7).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-gray-700 font-medium hover:text-blue-600 transition ${
                  isActive(link.href)
                    ? "text-white bg-[#00356B] px-2 py-1 rounded"
                    : ""
                }`}
              >
                {link.name.toLocaleUpperCase()}
              </a>
            ))}
          </div>
          <div className="flex space-x-8">
            {navLinks.slice(8).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-gray-700 font-medium hover:text-blue-600 transition ${
                  isActive(link.href)
                    ? "text-blue-800 bg-blue-100 px-2 py-1 rounded"
                    : ""
                }`}
              >
                {link.name.toLocaleUpperCase()}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="grid grid-cols-2 gap-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-gray-700 font-medium hover:text-blue-600 text-center py-2 px-3 rounded hover:bg-gray-100 transition ${
                  isActive(link.href) ? "text-white bg-[#00356B]" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
      <TextCarousel />
    </header>
  );
}
