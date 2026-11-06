/* ============================================
   CertificationsSection — Open Unified List
   No clunky boxes — sleek & responsive
   ============================================ */

import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Target,
  Zap,
} from "lucide-react";
import { certifications } from "../../data/certifications";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";

const iconMap = { Award, BookOpen, Brain, Briefcase, Target, Zap };

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionHeader
        title="Certifications"
        subtitle="Verified coursework and participation"
      />

      <ScrollReveal>
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl shadow-slate-900/5 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => {
              const Icon = iconMap[cert.icon] || Award;

              return (
                <div
                  key={cert.id}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-blue-300 transition-all shadow-2xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <h3 className="font-heading font-semibold text-slate-900 text-sm truncate">
                        {cert.name}
                      </h3>
                      {cert.score && (
                        <span className="shrink-0 text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60">
                          {cert.score}
                        </span>
                      )}
                    </div>

                    <p className="text-slate-600 text-xs font-medium">
                      {cert.issuer}
                    </p>

                    {cert.details && (
                      <p className="text-slate-400 text-[11px] mt-1 truncate">
                        {cert.details}
                      </p>
                    )}
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

export default CertificationsSection;
