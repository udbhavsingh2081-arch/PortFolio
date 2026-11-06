/* ========================================================
   App.jsx — DEVVERSE SCIENTIFIC SPACE & AEROSPACE PORTFOLIO
   Udbhav Singh Chouhan — Full-Stack Web Developer
   ======================================================== */

import GalaxyBackground from "./components/GalaxyBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#050914] text-[#F1F5F9] selection:bg-[#38BDF8]/25 selection:text-white overflow-x-hidden">
      {/* Scientific Astronomical Background Field */}
      <GalaxyBackground />

      {/* Accessible Skip Link */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 rounded bg-[#38BDF8] text-[#050914] font-bold text-xs uppercase font-mono"
      >
        Skip to main content
      </a>

      {/* Slim Professional Scientific Navbar */}
      <Navbar />

      {/* Main Spacious Sections */}
      <main className="relative z-10">
        <Hero />
        <div className="scientific-divider" />
        <About />
        <div className="scientific-divider" />
        <Skills />
        <div className="scientific-divider" />
        <Projects />
        <div className="scientific-divider" />
        <Education />
        <div className="scientific-divider" />
        <Certificates />
        <div className="scientific-divider" />
        <Achievements />
        <div className="scientific-divider" />
        <Contact />
      </main>

      {/* Minimal Aerospace Footer */}
      <Footer />
    </div>
  );
}

export default App;
