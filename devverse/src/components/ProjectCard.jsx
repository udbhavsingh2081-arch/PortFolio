/* ========================================================
   ProjectCard — Engineering Case Study Component
   NASA/SaaS Style Case Study with Interactive Modal
   ======================================================== */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  CheckCircle2,
  BookOpen,
  X,
  Database,
  Shield,
  Server,
  ArrowRight,
} from "lucide-react";
import { Github } from "./ui/Icons";

const ProjectCard = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="p-7 sm:p-9 rounded-xl bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8]/40 transition-all flex flex-col justify-between h-full text-left group">
        <div>
          {/* Top Meta Bar */}
          <div className="flex items-center justify-between gap-2 mb-5 pb-4 border-b border-[#243247]">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-xs font-bold text-[#38BDF8]">
                {project.projectNumber}
              </span>
              <span className="text-xs text-[#64748B]">/</span>
              <span className="text-xs font-mono uppercase text-[#94A3B8]">
                {project.category}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#0A1220] border border-[#243247] text-[#10B981]">
              Production Ready
            </span>
          </div>

          {/* Technical Interface Mockup / Schematic Placeholder */}
          <div className="w-full h-48 rounded-lg bg-[#0A1220] border border-[#243247] mb-6 overflow-hidden relative flex flex-col justify-between p-4">
            {/* Browser Header Bar */}
            <div className="flex items-center justify-between border-b border-[#243247] pb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#243247]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#243247]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#243247]" />
              </div>
              <span className="text-[10px] font-mono text-[#64748B] truncate max-w-[200px]">
                {project.liveUrl.replace("https://", "")}
              </span>
              <span className="text-[9px] font-mono text-[#38BDF8]">SSL // 256-BIT</span>
            </div>

            {/* Schematic Architectural Wireframe Graphic */}
            <div className="flex-1 flex flex-col justify-center items-center py-3 space-y-2 text-center">
              <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                <Server size={14} className="text-[#38BDF8]" />
                <span>MVC Pattern · REST API · MongoDB</span>
              </div>
              <p className="text-[11px] font-mono text-[#64748B]">
                [ Interface Blueprint // Verified Production Build ]
              </p>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[10px] font-mono text-[#64748B] pt-2 border-t border-[#243247]">
              <span>STACK: {project.techStack.slice(0, 3).join(", ")}</span>
              <span className="text-[#38BDF8]">HTTP 200 OK</span>
            </div>
          </div>

          {/* Project Title */}
          <h3 className="font-heading text-2xl font-bold text-[#F1F5F9] mb-3 group-hover:text-[#38BDF8] transition-colors">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase text-[#64748B] block mb-2.5">
              Technology Stack:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[#0A1220] text-[#F1F5F9] border border-[#243247]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features Bullet List */}
          <div className="space-y-2 mb-6 pt-4 border-t border-[#243247]">
            {project.features.slice(0, 4).map((feat, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                <CheckCircle2 size={14} className="text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls & Case Study Trigger */}
        <div className="space-y-3 pt-5 border-t border-[#243247]">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded btn-scientific-primary text-xs font-semibold cursor-pointer"
              >
                <ExternalLink size={14} />
                <span>Live Application</span>
              </a>
            )}

            {project.githubUrl && project.githubUrl !== "#" ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded btn-scientific-secondary text-xs cursor-pointer"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
            ) : (
              <span className="py-2.5 px-3 rounded bg-[#0A1220] text-[11px] font-mono text-[#64748B] border border-[#243247]">
                Repo on release
              </span>
            )}
          </div>

          {/* Engineering Case Study Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-[#0A1220] hover:bg-[#142238] border border-[#243247] hover:border-[#38BDF8] text-xs font-mono text-[#94A3B8] hover:text-[#38BDF8] transition-colors cursor-pointer"
          >
            <BookOpen size={13} />
            <span>View Engineering Case Study</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* Detailed Engineering Case Study Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-[#050914]/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl rounded-xl bg-[#101B2C] border border-[#243247] shadow-2xl p-6 sm:p-9 z-10 max-h-[90vh] overflow-y-auto text-left space-y-6"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-[#243247] pb-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-xs font-mono font-bold text-[#38BDF8]">
                      {project.projectNumber} // CASE STUDY
                    </span>
                    <span className="text-xs text-[#64748B]">·</span>
                    <span className="text-xs font-mono uppercase text-[#94A3B8]">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F1F5F9]">
                    {project.name}
                  </h3>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded bg-[#0A1220] border border-[#243247] text-[#94A3B8] hover:text-[#F1F5F9] transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Problem Statement & Objective */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-lg bg-[#0A1220] border border-[#243247] space-y-2">
                  <h4 className="text-xs font-mono uppercase text-[#38BDF8] font-bold">
                    Problem Being Solved
                  </h4>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-[#0A1220] border border-[#243247] space-y-2">
                  <h4 className="text-xs font-mono uppercase text-[#60A5FA] font-bold">
                    Project Objective
                  </h4>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {project.objective}
                  </p>
                </div>
              </div>

              {/* Technology Choices */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase text-[#F1F5F9] font-bold flex items-center gap-2">
                  <Layers size={14} className="text-[#38BDF8]" />
                  <span>Architecture & Technology Choices</span>
                </h4>
                <div className="p-5 rounded-lg bg-[#0A1220] border border-[#243247] text-xs sm:text-sm text-[#94A3B8] leading-relaxed space-y-3">
                  <p>{project.techChoices}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-[#101B2C] text-[#38BDF8] border border-[#243247] font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Complete Features Breakdown */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase text-[#F1F5F9] font-bold flex items-center gap-2">
                  <Shield size={14} className="text-[#10B981]" />
                  <span>Implemented Feature Specifications</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-5 rounded-lg bg-[#0A1220] border border-[#243247]">
                  {project.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#94A3B8]">
                      <CheckCircle2 size={14} className="text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I Learned / Engineering Takeaways */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase text-[#F1F5F9] font-bold flex items-center gap-2">
                  <Database size={14} className="text-[#818CF8]" />
                  <span>Key Engineering Learnings</span>
                </h4>
                <ul className="list-disc list-inside p-5 rounded-lg bg-[#0A1220] border border-[#243247] text-xs sm:text-sm text-[#94A3B8] leading-relaxed space-y-1.5">
                  {project.learnings.map((lrn, i) => (
                    <li key={i}>{lrn}</li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer Links */}
              <div className="flex items-center justify-between pt-5 border-t border-[#243247]">
                <span className="text-[11px] font-mono text-[#64748B]">
                  VERIFIED DEPLOYED BUILD
                </span>
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded btn-scientific-primary text-xs font-semibold cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      <span>Launch Live Site</span>
                    </a>
                  )}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded bg-[#0A1220] border border-[#243247] text-xs font-mono text-[#94A3B8] hover:text-[#F1F5F9] cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
