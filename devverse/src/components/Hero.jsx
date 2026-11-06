/* ========================================================
   Hero — SCIENTIFIC DEVELOPER UNIVERSE
   Aerospace Engineering Interface with Orbital Visualizer
   ======================================================== */

import { Suspense } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Layers,
  User,
  FileText,
  ExternalLink,
  Code,
  GraduationCap,
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
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 lg:pt-36 lg:pb-28 px-6 sm:px-10 lg:px-16 overflow-hidden z-10"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column (7 cols): Scientific Editorial Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7 text-left space-y-7"
        >
          {/* Scientific Overline / Telemetry Coordinates */}
          <div className="flex items-center gap-3">
            <span className="tech-badge">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              DEVVERSE / PERSONAL PORTFOLIO
            </span>
            <span className="text-[11px] font-mono text-[#64748B] hidden sm:inline">
              SYS STATUS // ONLINE · INDORE, IN
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F1F5F9] leading-[1.12]">
              Hi, I'm Udbhav Singh Chouhan.
            </h1>
            <p className="font-heading text-xl sm:text-2xl font-medium text-[#38BDF8] pt-1">
              Full-Stack Web Developer
            </p>
          </div>

          {/* Core Description */}
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed">
            Building practical digital products through backend engineering, modern web technologies and continuous problem solving.
          </p>

          {/* Supporting Technical Details Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl pt-2">
            <div className="p-3 rounded bg-[#101B2C] border border-[#243247]">
              <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-0.5">Program</span>
              <span className="text-xs font-mono font-medium text-[#F1F5F9] truncate block">B.Tech CSE</span>
            </div>
            <div className="p-3 rounded bg-[#101B2C] border border-[#243247]">
              <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-0.5">Academic</span>
              <span className="text-xs font-mono font-medium text-[#38BDF8] block">CGPA 9.2</span>
            </div>
            <div className="p-3 rounded bg-[#101B2C] border border-[#243247]">
              <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-0.5">Algorithms</span>
              <span className="text-xs font-mono font-medium text-[#60A5FA] block">150+ LeetCode</span>
            </div>
            <div className="p-3 rounded bg-[#101B2C] border border-[#243247]">
              <span className="text-[10px] font-mono uppercase text-[#64748B] block mb-0.5">Focus</span>
              <span className="text-xs font-mono font-medium text-[#818CF8] block">Learning React</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <button
              onClick={() => scrollTo("projects")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded btn-scientific-primary text-xs sm:text-sm font-semibold cursor-pointer"
            >
              <Layers size={15} />
              <span>Explore Projects</span>
            </button>

            <button
              onClick={() => scrollTo("about")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded btn-scientific-secondary text-xs sm:text-sm cursor-pointer"
            >
              <User size={15} />
              <span>About Me</span>
            </button>

            <a
              href={personalData.resumePath}
              download="Udbhav_Singh_Chouhan_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[#243247] hover:border-[#38BDF8] text-xs sm:text-sm font-mono text-[#94A3B8] hover:text-[#F1F5F9] transition-colors cursor-pointer"
            >
              <FileText size={14} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Technical Social Array */}
          <div className="flex items-center gap-4 pt-5 border-t border-[#243247] max-w-xl">
            <span className="text-[11px] font-mono uppercase text-[#64748B]">
              Scientific Profiles:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={15} />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={personalData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                aria-label="LeetCode Profile"
              >
                <Code size={15} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column (5 cols): Scientific Celestial Orbital Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 h-[360px] sm:h-[420px] lg:h-[480px] w-full relative flex items-center justify-center"
        >
          {/* Subtle Technical Framing */}
          <div className="absolute inset-0 rounded-xl border border-[#243247]/60 pointer-events-none" />
          
          {/* Corner Coordinate Accents */}
          <div className="absolute top-2.5 left-2.5 text-[10px] font-mono text-[#64748B] pointer-events-none">
            LOC [38.2° N, 142.8° E]
          </div>
          <div className="absolute bottom-2.5 right-2.5 text-[10px] font-mono text-[#38BDF8] pointer-events-none flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping" />
            ORBIT SIMULATION // ACTIVE
          </div>

          <ErrorBoundary
            fallback={
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-28 h-28 rounded-full border border-[#38BDF8]/40 flex items-center justify-center mb-3">
                  <div className="w-20 h-20 rounded-full bg-[#101B2C] border border-[#243247]" />
                </div>
                <span className="text-xs font-mono text-[#94A3B8]">CELESTIAL ORBIT MODEL READY</span>
              </div>
            }
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center text-xs font-mono text-[#38BDF8]">
                  Loading Celestial Coordinate System...
                </div>
              }
            >
              <PlanetScene />
            </Suspense>
          </ErrorBoundary>
        </motion.div>
      </div>

      {/* Subtle Technical Scroll Indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#64748B] hover:text-[#38BDF8] transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">
          DESCENT
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
