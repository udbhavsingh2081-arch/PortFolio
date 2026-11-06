/* ========================================================
   About — ENGINEERING PROFILE
   Professional Editorial Layout & Foundational Metrics
   ======================================================== */

import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Layers,
  Server,
  Code2,
  Cpu,
} from "lucide-react";
import { personalData } from "../data/portfolioData";
import profilePhoto from "../assets/images/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto relative z-10 text-left">
      {/* Section Header */}
      <div className="mb-16 lg:mb-20 space-y-3">
        <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block">
          01 // Dossier
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight">
          About Me
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
          Engineering profile, academic trajectory, and software development foundations.
        </p>
      </div>

      {/* Main Grid: Clean Editorial 2-Column System */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
        {/* Left Column (4 cols): Profile & Metadata */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <div className="relative w-fit">
            <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-lg overflow-hidden border border-[#243247] bg-[#101B2C]">
              <img
                src={profilePhoto}
                alt={personalData.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Technical Framing Accents */}
            <div className="absolute -top-1 -left-1 w-3.5 h-3.5 border-t-2 border-l-2 border-[#38BDF8]" />
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 border-b-2 border-r-2 border-[#38BDF8]" />
          </div>

          {/* Academic & Geographic Telemetry */}
          <div className="space-y-2.5 text-xs font-mono text-[#94A3B8] max-w-[300px]">
            <div className="flex items-center gap-2.5 p-2.5 rounded bg-[#101B2C] border border-[#243247]">
              <GraduationCap size={15} className="text-[#38BDF8] shrink-0" />
              <span className="truncate">{personalData.college}</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded bg-[#101B2C] border border-[#243247]">
              <Calendar size={15} className="text-[#60A5FA] shrink-0" />
              <span>{personalData.duration} · {personalData.semester}</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded bg-[#101B2C] border border-[#243247]">
              <MapPin size={15} className="text-[#818CF8] shrink-0" />
              <span>{personalData.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column (8 cols): Narrative & Engineering Philosophy */}
        <div className="lg:col-span-8 space-y-7">
          <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#F1F5F9] leading-snug">
            Computer Science student focusing on backend architecture, resilient data layers, and clean full-stack systems.
          </h3>

          <p className="text-base text-[#F1F5F9]/90 leading-relaxed">
            {personalData.introduction}
          </p>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            {personalData.aboutText}
          </p>

          {/* Compact Statistics Row */}
          <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[#243247]">
            <div className="p-4 rounded bg-[#101B2C] border border-[#243247] text-left">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-[#38BDF8] block mb-0.5">
                {personalData.cgpa}
              </span>
              <span className="text-[11px] font-mono uppercase text-[#64748B]">
                B.Tech CGPA
              </span>
            </div>

            <div className="p-4 rounded bg-[#101B2C] border border-[#243247] text-left">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-[#60A5FA] block mb-0.5">
                {personalData.leetcodeProblems}
              </span>
              <span className="text-[11px] font-mono uppercase text-[#64748B]">
                LeetCode Solved
              </span>
            </div>

            <div className="p-4 rounded bg-[#101B2C] border border-[#243247] text-left">
              <span className="text-2xl sm:text-3xl font-heading font-bold text-[#818CF8] block mb-0.5">
                2
              </span>
              <span className="text-[11px] font-mono uppercase text-[#64748B]">
                Featured Projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Engineering Focus Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 sm:p-7 rounded-lg bg-[#101B2C] border border-[#243247] space-y-2.5">
          <div className="flex items-center gap-2 text-[#38BDF8]">
            <Server size={18} />
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-[#F1F5F9]">
              Backend Engineering
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Architecting RESTful endpoints, role-based authorization, session security, and database modeling with Node.js and MongoDB.
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-lg bg-[#101B2C] border border-[#243247] space-y-2.5">
          <div className="flex items-center gap-2 text-[#60A5FA]">
            <Code2 size={18} />
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-[#F1F5F9]">
              Algorithmic Problem Solving
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            150+ LeetCode problems solved with strict focus on optimal time-space complexity, tree/graph traversals, and dynamic programming.
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-lg bg-[#101B2C] border border-[#243247] space-y-2.5">
          <div className="flex items-center gap-2 text-[#818CF8]">
            <Cpu size={18} />
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-[#F1F5F9]">
              Modern Full-Stack Systems
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Connecting robust server APIs with responsive frontends, currently deepening modular component architecture with React.js.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
