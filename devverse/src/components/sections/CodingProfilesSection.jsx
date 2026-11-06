/* ============================================
   CodingProfilesSection — Clean Open Profiles
   LeetCode & GitHub Presence
   ============================================ */

import { Code, ExternalLink, Terminal, Flame, CheckCircle } from "lucide-react";
import { Github } from "../ui/Icons";
import { personalInfo } from "../../data/personalInfo";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";

const CodingProfilesSection = () => {
  return (
    <section id="coding-profiles" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionHeader
        title="Coding Profiles"
        subtitle="Verifiable problem solving and public code repositories"
      />

      <ScrollReveal>
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl shadow-slate-900/5 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LeetCode Block */}
            <div className="flex flex-col justify-between space-y-5 p-6 rounded-2xl bg-amber-50/50 border border-amber-200/70">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Code size={22} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white text-amber-800 border border-amber-200">
                    DSA Practice
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">
                  LeetCode
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-4">
                  Consistent problem solving in arrays, strings, trees, and dynamic programming.
                </p>

                <div className="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-amber-200/60 mb-4">
                  <Flame className="text-amber-500" size={22} />
                  <div>
                    <span className="text-xl font-bold font-heading text-slate-900 block">
                      150+
                    </span>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                      Problems Solved
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-emerald-600 shrink-0" />
                    <span>Focus on DSA & algorithmic optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-emerald-600 shrink-0" />
                    <span>Targeting SDE placement readiness</span>
                  </div>
                </div>
              </div>

              <a
                href={personalInfo.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>View LeetCode Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* GitHub Block */}
            <div className="flex flex-col justify-between space-y-5 p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center">
                    <Github size={22} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200">
                    Open Source
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-900 mb-1">
                  GitHub
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-4">
                  Full-stack repositories, version control workflows, clean commits, and deployment pipelines.
                </p>

                <div className="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-slate-200/60 mb-4">
                  <Terminal className="text-blue-600" size={22} />
                  <div>
                    <span className="text-sm font-bold font-mono text-slate-900 block truncate">
                      @udbhavsingh2081-arch
                    </span>
                    <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">
                      Public Repositories
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-blue-600 shrink-0" />
                    <span>TalentTrack & StayVerse source code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-blue-600 shrink-0" />
                    <span>Branch workflows and clean commit structure</span>
                  </div>
                </div>
              </div>

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>Explore GitHub Repositories</span>
                <Github size={14} />
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default CodingProfilesSection;
