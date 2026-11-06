/* ========================================================
   Hero — CYBER-TECH DEVELOPER PORTFOLIO HERO
   Interactive 3D Earth, Orbital Rings & Information HUD
   ======================================================== */

import { Suspense } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  User,
  Download,
  MapPin,
  GraduationCap,
  Sparkles,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { Github, Linkedin } from "./ui/Icons";
import { personalData } from "../data/portfolioData";
import PlanetScene from "./PlanetScene";
import ErrorBoundary from "./ui/ErrorBoundary";

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-10 lg:px-14 overflow-hidden z-10"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column (7 cols): Cyber Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 text-left space-y-6"
        >
          {/* Cyber Overline Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#101B2C]/90 border border-[#38BDF8]/40 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse shadow-[0_0_8px_#22D3EE]" />
            <span className="text-xs font-mono font-bold tracking-wider text-[#22D3EE] uppercase">
              DEVVERSE // CYBER INTERFACE
            </span>
            <Sparkles size={12} className="text-[#818CF8]" />
          </div>

          {/* Main Heading & Role */}
          <div className="space-y-1.5">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F1F5F9] leading-[1.1]">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#22D3EE] to-[#818CF8] bg-clip-text text-transparent">
                Udbhav Singh Chouhan
              </span>
            </h1>
            <p className="font-heading text-xl sm:text-2xl font-bold text-[#38BDF8] tracking-wide pt-1">
              Full-Stack Web Developer
            </p>
          </div>

          {/* Short Introduction */}
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed">
            Building practical digital products through modern web technologies and problem solving.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#22D3EE] text-[#050914] text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Layers size={16} />
              <span>Explore Projects</span>
            </button>

            <button
              onClick={() => scrollTo("about-skills")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#101B2C] hover:bg-[#142238] border border-[#38BDF8]/40 hover:border-[#38BDF8] text-xs sm:text-sm font-semibold text-[#F1F5F9] hover:text-[#38BDF8] transition-all cursor-pointer shadow-sm"
            >
              <User size={15} />
              <span>About Me</span>
            </button>

            <a
              href={personalData.resumePath}
              download="Udbhav_Singh_Chouhan_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0A1220] hover:bg-[#101B2C] border border-[#243247] hover:border-[#818CF8] text-xs sm:text-sm font-mono text-[#94A3B8] hover:text-[#F1F5F9] transition-all cursor-pointer"
            >
              <Download size={15} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-[#243247] max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[#64748B]">
              Coordinates:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8] hover:shadow-[0_0_10px_rgba(56,189,248,0.3)] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-all"
                aria-label="GitHub Profile"
              >
                <Github size={15} />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8] hover:shadow-[0_0_10px_rgba(56,189,248,0.3)] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={personalData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#101B2C] border border-[#243247] hover:border-[#22D3EE] hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] transition-all"
                aria-label="LeetCode Profile"
              >
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column (5 cols): Large Interactive 3D Earth with Information Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:col-span-5 h-[380px] sm:h-[440px] lg:h-[500px] w-full relative flex items-center justify-center"
        >
          {/* Cyber Framing & Background Nebula Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#38BDF8]/10 via-transparent to-[#818CF8]/15 blur-2xl pointer-events-none" />

          <ErrorBoundary
            fallback={
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center border border-[#38BDF8]/30 rounded-2xl bg-[#101B2C]">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#818CF8] shadow-[0_0_25px_rgba(56,189,248,0.4)] mb-3" />
                <p className="text-xs font-mono text-[#38BDF8]">PLANET DEVVERSE // ONLINE</p>
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex flex-col items-center justify-center text-xs font-mono text-[#38BDF8] gap-2">
                  <div className="w-8 h-8 border-2 border-[#38BDF8] border-t-transparent rounded-full animate-spin" />
                  <span>INITIALIZING 3D CYBER EARTH...</span>
                </div>
              }
            >
              <PlanetScene />
            </Suspense>
          </ErrorBoundary>

          {/* Small Information Panel (Matching Reference Image) */}
          <div className="absolute -bottom-2 right-2 sm:right-4 p-3.5 rounded-xl bg-[#0A1220]/90 backdrop-blur-md border border-[#38BDF8]/40 shadow-[0_0_20px_rgba(0,0,0,0.8),0_0_15px_rgba(56,189,248,0.2)] text-left z-20 space-y-2 pointer-events-auto">
            <div className="flex items-center gap-2 pb-1.5 border-b border-[#243247]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#38BDF8]">
                DEVELOPER TELEMETRY
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-[#94A3B8]">
                <MapPin size={12} className="text-[#38BDF8] shrink-0" />
                <span>Indore, India</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#94A3B8]">
                <GraduationCap size={12} className="text-[#818CF8] shrink-0" />
                <span>B.Tech CSE</span>
              </div>
              <div className="text-[#22D3EE] font-bold">
                CGPA: <span className="text-[#F1F5F9]">9.2</span>
              </div>
              <div className="text-[#818CF8] font-bold">
                LeetCode: <span className="text-[#F1F5F9]">150+</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down */}
      <button
        onClick={() => scrollTo("about-skills")}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#64748B] hover:text-[#38BDF8] transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[9px] font-mono uppercase tracking-widest">
          SCROLL
        </span>
        <ChevronDown size={14} className="text-[#38BDF8] animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
