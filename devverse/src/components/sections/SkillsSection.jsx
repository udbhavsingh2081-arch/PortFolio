/* ============================================
   SkillsSection — Open Bento Clusters
   No repetitive card form — clean & fluid
   ============================================ */

import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { skillCategories, csConceptsList } from "../../data/skills";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  GraduationCap,
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionHeader
        title="Tech Arsenal"
        subtitle="Core programming languages, frameworks, and developer tools"
      />

      <ScrollReveal>
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl shadow-slate-900/5 text-left">
          {/* Categorized Clusters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {skillCategories.map((category) => {
              const Icon = iconMap[category.icon] || Code2;

              return (
                <div key={category.id} className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        category.isLearning
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      <Icon size={15} />
                    </div>
                    <h3 className="font-heading font-bold text-slate-900 text-sm">
                      {category.title}
                    </h3>
                  </div>

                  {category.isLearning && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-100 text-purple-800">
                      <Sparkles size={11} />
                      Currently Expanding
                    </span>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          category.isLearning
                            ? "bg-purple-50 text-purple-900 border border-purple-200"
                            : "bg-slate-100/80 text-slate-800 border border-slate-200/60 hover:bg-white hover:border-blue-400"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core CS Ribbon */}
          <div className="pt-6 border-t border-slate-200/80">
            <h4 className="font-heading text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">
              Computer Science Foundations
            </h4>
            <div className="flex flex-wrap gap-2">
              {csConceptsList.map((concept) => (
                <span
                  key={concept}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default SkillsSection;
