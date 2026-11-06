/* ============================================
   EducationSection — Minimalist Vertical Timeline
   No card boxes — pure sleek timeline
   ============================================ */

import { GraduationCap, School } from "lucide-react";
import { education } from "../../data/education";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";

const iconMap = {
  GraduationCap,
  School,
};

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionHeader
        title="Education"
        subtitle="Academic trajectory and institutional achievements"
      />

      <ScrollReveal>
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl shadow-slate-900/5 text-left">
          <div className="relative border-l-2 border-blue-600/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
            {education.map((edu) => {
              const Icon = iconMap[edu.icon] || GraduationCap;

              return (
                <div key={edu.id} className="relative group">
                  {/* Timeline Node Icon */}
                  <div className="absolute -left-[37px] sm:-left-[45px] top-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center ring-4 ring-white shadow-md">
                    <Icon size={15} />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                        {edu.degree}
                      </h3>
                      {edu.current && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                          Current
                        </span>
                      )}
                    </div>

                    <span className="text-blue-700 font-bold text-sm bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 w-fit">
                      {edu.result}
                    </span>
                  </div>

                  <p className="text-slate-700 font-medium text-sm">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
                    <span>{edu.duration}</span>
                    {edu.semester && <span>· {edu.semester}</span>}
                    {edu.location && <span>· {edu.location}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default EducationSection;
