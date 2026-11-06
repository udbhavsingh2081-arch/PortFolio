/* ========================================================
   AboutAndSkills — Compact About & Skills Row
   Matching the Reference Layout: Side-by-Side Cyber Dossier
   ======================================================== */

import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Wrench,
  Sparkles,
  MapPin,
  GraduationCap,
  Award,
  Terminal,
} from "lucide-react";
import { personalData } from "../data/portfolioData";
import profilePhoto from "../assets/images/profile.jpeg";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "Java", "C++", "C"],
    color: "#38BDF8",
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["HTML", "CSS", "Bootstrap", "React.js (Learning)"],
    color: "#22D3EE",
    learningSkill: "React.js (Learning)",
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    color: "#818CF8",
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "VS Code"],
    color: "#38BDF8",
  },
];

const AboutAndSkills = () => {
  return (
    <section
      id="about-skills"
      className="py-20 lg:py-28 px-6 sm:px-10 lg:px-14 max-w-6xl mx-auto relative z-10 text-left"
    >
      {/* Section Header */}
      <div className="mb-12 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
            01 // PROFILE & TECH ARSENAL
          </span>
          <span className="h-[1px] w-12 bg-[#38BDF8]/40" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F1F5F9] tracking-tight">
          About & Technical Stack
        </h2>
        <p className="text-sm text-[#94A3B8] max-w-xl">
          Core engineering background, algorithms, and full-stack development tools.
        </p>
      </div>

      {/* Main 2-Column Compact Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column (5 cols): About Me & Statistics */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-[#101B2C]/90 border border-[#38BDF8]/30 shadow-[0_0_20px_rgba(56,189,248,0.1)] flex flex-col justify-between"
        >
          <div className="space-y-5">
            {/* Developer Avatar + Header */}
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-[#38BDF8]/60 shadow-[0_0_12px_rgba(56,189,248,0.3)]">
                  <img
                    src={profilePhoto}
                    alt={personalData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-[#101B2C]" />
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-[#F1F5F9]">
                  {personalData.name}
                </h3>
                <p className="text-xs font-mono text-[#38BDF8]">
                  Full-Stack Web Developer
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#64748B] pt-0.5">
                  <MapPin size={11} className="text-[#38BDF8]" />
                  <span>Indore, India</span>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="space-y-3 pt-2 border-t border-[#243247]">
              <h4 className="font-heading font-semibold text-sm text-[#F1F5F9] flex items-center gap-2">
                <Terminal size={14} className="text-[#22D3EE]" />
                <span>About Me</span>
              </h4>
              <p className="text-sm text-[#F1F5F9]/90 leading-relaxed">
                Computer Science student interested in full-stack development and building practical web applications.
              </p>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {personalData.aboutText}
              </p>
            </div>
          </div>

          {/* Statistics Grid (Matching Reference) */}
          <div className="grid grid-cols-3 gap-2.5 pt-6 mt-6 border-t border-[#243247]">
            <div className="p-3 rounded-xl bg-[#0A1220] border border-[#243247] hover:border-[#38BDF8]/40 transition-colors text-center">
              <span className="font-heading text-xl sm:text-2xl font-bold text-[#38BDF8] block">
                9.2
              </span>
              <span className="text-[10px] font-mono uppercase text-[#64748B]">
                CGPA
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#0A1220] border border-[#243247] hover:border-[#22D3EE]/40 transition-colors text-center">
              <span className="font-heading text-xl sm:text-2xl font-bold text-[#22D3EE] block">
                150+
              </span>
              <span className="text-[10px] font-mono uppercase text-[#64748B]">
                LeetCode
              </span>
            </div>

            <div className="p-3 rounded-xl bg-[#0A1220] border border-[#243247] hover:border-[#818CF8]/40 transition-colors text-center">
              <span className="font-heading text-xl sm:text-2xl font-bold text-[#818CF8] block">
                2
              </span>
              <span className="text-[10px] font-mono uppercase text-[#64748B]">
                Projects
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column (7 cols): Categorized Technical Skills */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-5 rounded-2xl bg-[#101B2C]/90 border border-[#243247] hover:border-[#38BDF8]/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-[#243247]">
                    <div className="w-7 h-7 rounded-lg bg-[#0A1220] border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] group-hover:scale-110 transition-transform">
                      <Icon size={14} />
                    </div>
                    <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-[#F1F5F9]">
                      {cat.title}
                    </h4>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => {
                      const isLearning = skill.includes("Learning");
                      return (
                        <span
                          key={skill}
                          className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all ${
                            isLearning
                              ? "bg-[#818CF8]/15 text-[#818CF8] border border-[#818CF8]/50 shadow-[0_0_8px_rgba(129,140,248,0.2)]"
                              : "bg-[#0A1220] text-[#94A3B8] border border-[#243247] hover:border-[#38BDF8]/40 hover:text-[#F1F5F9]"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAndSkills;
