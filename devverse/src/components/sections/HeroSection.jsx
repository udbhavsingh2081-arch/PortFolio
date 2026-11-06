/* ============================================
   HeroSection — Attractive, Open, Seamless Anime Hero
   No clunky card boxes — fluid & responsive
   ============================================ */

import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Rocket, Mail, Download, Sparkles } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";
import ErrorBoundary from "../ui/ErrorBoundary";
import profilePhoto from "../../assets/images/profile.jpeg";

const DeveloperDesk = lazy(() => import("../three/DeveloperDesk"));

const quickNavItems = [
  { emoji: "💻", label: "Projects", section: "projects" },
  { emoji: "📚", label: "Education", section: "education" },
  { emoji: "🏆", label: "Achievements", section: "achievements" },
  { emoji: "⌨️", label: "Profiles", section: "coding-profiles" },
  { emoji: "⚡", label: "Skills", section: "skills" },
  { emoji: "📬", label: "Contact", section: "contact" },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 px-4 sm:px-6 max-w-4xl mx-auto text-center"
    >
      {/* 1. Profile Avatar with Soft Anime Aura */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-6"
      >
        <div className="relative mb-5 group">
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden ring-4 ring-white/90 shadow-2xl bg-white/50 backdrop-blur-xs transition-transform duration-300 group-hover:scale-105">
            <img
              src={profilePhoto}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center ring-3 ring-white shadow-md">
            <Sparkles size={16} />
          </div>
        </div>

        {/* Status Pill */}
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-emerald-700 border border-emerald-200/80 shadow-xs backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {personalInfo.internshipStatus}
        </span>
      </motion.div>

      {/* 2. Bold Typographic Headline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 tracking-tight mb-2">
          {personalInfo.name}
        </h1>
        <p className="text-blue-700 font-semibold text-lg sm:text-xl font-heading mb-3">
          {personalInfo.title} <span className="text-slate-400 font-normal">·</span> B.Tech CSE (9.2 CGPA)
        </p>
        <p className="text-slate-700 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {personalInfo.introShort}
        </p>
      </motion.div>

      {/* 3. Sleek Action Pills */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-3 mb-12"
      >
        <button
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-600/20 transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <Rocket size={16} />
          <span>View Projects</span>
        </button>

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-sm font-semibold border border-white/80 shadow-md transition-all cursor-pointer hover:scale-105 active:scale-95 backdrop-blur-md"
        >
          <Mail size={16} />
          <span>Contact Me</span>
        </button>

        <a
          href={personalInfo.resumePath}
          download="Udbhav_Singh_Chouhan_Resume.pdf"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900/10 hover:bg-slate-900/15 text-slate-800 text-sm font-semibold border border-slate-900/20 backdrop-blur-md transition-all cursor-pointer"
        >
          <Download size={16} />
          <span>Resume PDF</span>
        </a>
      </motion.div>

      {/* 4. Creative Feature: Floating Seamless 3D Desk (Borderless, Responsive) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative w-full max-w-3xl mx-auto"
      >
        {/* Floating Canvas Container */}
        <div className="h-[320px] sm:h-[380px] w-full rounded-3xl bg-white/50 backdrop-blur-md border border-white/70 shadow-2xl overflow-hidden relative">
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-slate-500">
                  <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs font-mono">Loading 3D workspace...</p>
                </div>
              }
            >
              <DeveloperDesk />
            </Suspense>
          </ErrorBoundary>

          {/* Floating Interaction Pill */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-slate-700 text-xs font-medium shadow-md border border-slate-200 backdrop-blur-xs">
              <span>✨ Click objects on the desk or quick links below</span>
            </span>
          </div>
        </div>

        {/* Responsive Quick Navigation Pills */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-4">
          {quickNavItems.map(({ emoji, label, section }) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white/85 hover:bg-white text-slate-800 border border-white/80 rounded-2xl py-2 px-2 text-center transition-all cursor-pointer shadow-xs hover:shadow-md hover:scale-105 active:scale-95 backdrop-blur-md"
            >
              <span className="text-base block mb-0.5">{emoji}</span>
              <span className="text-xs font-semibold block truncate">
                {label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
