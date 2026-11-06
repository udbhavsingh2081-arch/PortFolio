/* ========================================================
   Skills — TECHNICAL EXPERTISE
   Scientific Classification System & Engineering Stack
   ======================================================== */

import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Server,
  Database,
  Binary,
  Wrench,
  Cloud,
  Compass,
} from "lucide-react";

const skillGroups = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "Java", "C++", "C"],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful APIs", "Server-Side Logic"],
  },
  {
    id: "database",
    title: "Database Systems",
    icon: Database,
    skills: ["MongoDB", "Mongoose ODM"],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Layout,
    skills: ["HTML5", "CSS3", "EJS", "Bootstrap", "Responsive Design"],
  },
  {
    id: "cs",
    title: "Computer Science Core",
    icon: Binary,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "MVC Architecture",
      "Authentication & RBAC",
      "CRUD Operations",
    ],
  },
  {
    id: "tools",
    title: "Developer Tooling",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "Visual Studio Code"],
  },
  {
    id: "deployment",
    title: "Deployment & Cloud",
    icon: Cloud,
    skills: ["Render", "Vercel", "Netlify", "PieHost"],
  },
  {
    id: "learning",
    title: "Currently Learning",
    icon: Compass,
    isLearning: true,
    skills: ["React.js", "Component Lifecycle", "Hooks & State Management"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto relative z-10 text-left">
      {/* Header */}
      <div className="mb-16 lg:mb-20 space-y-3">
        <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block">
          02 // Stack
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight">
          Technical Expertise
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
          Scientific classification of verified engineering competencies, databases, and frameworks.
        </p>
      </div>

      {/* Grid: Scientific Classification Blocks with generous breathing space */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
        {skillGroups.map((group, idx) => {
          const Icon = group.icon;
          const isLearning = group.isLearning;

          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className={`p-6 sm:p-7 rounded-lg border transition-all ${
                isLearning
                  ? "bg-[#101B2C] border-[#818CF8]/60 shadow-sm shadow-[#818CF8]/10"
                  : "bg-[#101B2C] border-[#243247] hover:border-[#38BDF8]/50"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#243247]">
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={16}
                    className={isLearning ? "text-[#818CF8]" : "text-[#38BDF8]"}
                  />
                  <h3 className="font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#F1F5F9]">
                    {group.title}
                  </h3>
                </div>

                {isLearning && (
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono font-semibold uppercase bg-[#818CF8]/20 text-[#818CF8] border border-[#818CF8]/40">
                    Active Focus
                  </span>
                )}
              </div>

              {/* Skills List as Clean Scientific Tags with breathing space */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1.5 rounded text-xs font-mono transition-colors ${
                      isLearning
                        ? "bg-[#142238] text-[#F1F5F9] border border-[#818CF8]/40"
                        : "bg-[#0A1220] text-[#94A3B8] hover:text-[#F1F5F9] border border-[#243247]"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
