/* ========================================================
   Projects — SELECTED PROJECTS / ENGINEERING CASE STUDIES
   Spacious 2-Column Scientific Layout for TalentTrack & StayVerse
   ======================================================== */

import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto relative z-10 text-left">
      {/* Header */}
      <div className="mb-16 lg:mb-20 space-y-3">
        <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block">
          03 // Case Studies
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight">
          Selected Projects
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
          Engineered full-stack applications with production deployments, authentication, and database schemas.
        </p>
      </div>

      {/* 2-Column Balanced Grid with generous breathing space */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="h-full"
          >
            <ProjectCard project={proj} index={idx} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
