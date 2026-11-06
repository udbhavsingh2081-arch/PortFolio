/* ============================================
   ProjectsSection — Attractive, Open Project Showcase
   TalentTrack & StayVerse — No nested box clutter
   ============================================ */

import { ExternalLink, CheckCircle2, ChevronRight, Layers, Sparkles } from "lucide-react";
import { Github } from "../ui/Icons";
import { projects } from "../../data/projects";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionHeader
        title="Featured Projects"
        subtitle="Full-stack web applications deployed and operating in production"
      />

      <div className="space-y-12">
        {projects.map((proj, index) => (
          <ScrollReveal key={proj.id} delay={index * 0.1}>
            <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl shadow-slate-900/5 text-left">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-200/70 pb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                      0{index + 1}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                      {proj.name}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm font-medium">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Direct Action Pills */}
                <div className="flex items-center gap-2.5 shrink-0">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all hover:scale-105 active:scale-95"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {proj.githubUrl && proj.githubUrl !== "#" ? (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900/10 hover:bg-slate-900/15 text-slate-800 text-xs font-semibold border border-slate-900/20 transition-all hover:scale-105 active:scale-95"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <span className="text-[11px] text-slate-500 font-mono border border-slate-200 px-2.5 py-1.5 rounded-full bg-slate-50">
                      Repo Confirmed
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                {proj.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                  <Layers size={13} className="text-blue-600" />
                  <span>Architecture & Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100/90 text-slate-800 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Two Column Details: Features & Learnings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/70">
                  <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-blue-600" />
                    Key Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {proj.features.slice(0, 6).map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-700 text-xs sm:text-sm"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-blue-600 shrink-0 mt-0.5"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/70">
                  <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                    <ChevronRight size={14} className="text-purple-600" />
                    Engineering Insights
                  </h4>
                  <ul className="space-y-2">
                    {proj.learnings.slice(0, 5).map((learning, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-700 text-xs sm:text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
