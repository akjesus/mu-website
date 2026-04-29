export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white">Maduka University</h3>
          <p className="mt-3 text-gray-400">
            Building the future of education with technology and innovation.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a
                href="https://portal.madukauniversity.edu.ng"
                className="hover:text-white"
              >
                Portal
              </a>
            </li>
            <li>
              <a
                href="https://admissions.madukauniversity.edu.ng"
                className="hover:text-white"
              >
                Admission
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <p className="mt-3">
            Along Nsukka - Enugu New Road, Ekwegbe, Enugu State, Nigeria
          </p>
          <p>info@madukauniversity.edu.ng</p>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-8">
        © {new Date().getFullYear()} Maduka University. All rights reserved. Powered by ICT Diectorate
      </p>
    </footer>
  );
}
