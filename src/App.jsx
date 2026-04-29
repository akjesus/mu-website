import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Programmes from "./pages/Programmes";
import Prospectus from "./pages/prospectus/Prospectus";
import Admission from "./pages/Admission";
import About from "./pages/About";
import Campus from "./pages/Campus";
import NotFound from "./pages/404";

function App() {
  return (
    <Router>
      <Navbar />

      <main className="pt-16">
        {" "}
        {/* padding so content is not hidden behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/campus-life" element={<Campus />} />
          <Route path="/prospectus" element={<Prospectus />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
