import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import UiUxDesign from "./pages/services/UiUxDesign";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#050b18]">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        <Routes>
          {/* ✅ DEFAULT HOME */}
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
