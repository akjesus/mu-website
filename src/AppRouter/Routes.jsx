import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Programmes from "../pages/Programmes/Programmes";
import Prospectus from "../pages/prospectus/Prospectus";
import Admission from "../pages/Admission/Admission";
import About from "../pages/About/About";
import Campus from "../pages/Campus/Campus";
import News from "../pages/News/News";
import NewsItem from "../pages/News/NewsItem";
import Login from "../pages/CMS/Login";
import ManageBlog from "../pages/CMS/ManageBlog";
import NotFound from "../pages/404";

const AppRoutes = () => {
  const location = useLocation();
  const isCMS = location.pathname.startsWith("/cms");

  return (
    <>
      {!isCMS && <Navbar />}
      <main className={isCMS ? "min-h-screen" : "pt-16"}>
        {/* padding so content is not hidden behind fixed navbar */}
        <Routes>
          <Route path="/cms/login" element={<Login />} />
          <Route path="/cms/manage" element={<ManageBlog />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/campus-life" element={<Campus />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsItem />} />
          <Route path="/prospectus" element={<Prospectus />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isCMS && <Footer />}
    </>
  );
};
export default AppRoutes;
