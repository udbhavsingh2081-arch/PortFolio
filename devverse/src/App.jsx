/* ========================================================
   App.jsx — DEVVERSE CYBER-TECH DEVELOPER PORTFOLIO
   Udbhav Singh Chouhan — Full-Stack Web Developer
   ======================================================== */

import GalaxyBackground from "./components/GalaxyBackground";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutAndSkills from "./components/AboutAndSkills";
import Projects from "./components/Projects";
import EducationCertificates from "./components/EducationCertificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#050914] text-[#F1F5F9] selection:bg-[#38BDF8]/25 selection:text-white overflow-x-hidden">
      {/* 3D Deep Space Starfield & Subtle Grid */}
      <GalaxyBackground />

      {/* Narrow Vertical Icon Sidebar on the Left (Desktop) */}
      <Sidebar />

      {/* Top Navigation Bar (Offset for sidebar) */}
      <Navbar />

      {/* Accessible Skip Link */}
      <a
        href="#about-skills"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-20 z-[100] px-4 py-2 rounded bg-[#38BDF8] text-[#050914] font-bold text-xs uppercase font-mono"
      >
        Skip to main content
      </a>

      {/* Main Content (Offset on desktop for the left sidebar) */}
      <div className="md:pl-16 relative z-10">
        <main>
          {/* Hero: Large 2-Column with 3D Earth & Info Panel */}
          <Hero />

          <div className="scientific-divider" />

          {/* Compact About & Skills Row */}
          <AboutAndSkills />

          <div className="scientific-divider" />

          {/* Featured Projects: TalentTrack & StayVerse */}
          <Projects />

          <div className="scientific-divider" />

          {/* Compact Education & Certificates */}
          <EducationCertificates />

          <div className="scientific-divider" />

          {/* Contact Panel */}
          <Contact />
        </main>

        {/* Cyber Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
