/* ========================================================
   Education — ACADEMIC TIMELINE
   Clean Engineering Timeline with Orbital Markers & Dates
   ======================================================== */

import { motion } from "framer-motion";
import { GraduationCap, School, Calendar, Award } from "lucide-react";
import { educationHistory } from "../data/portfolioData";

const Education = () => {
  return (
    <section id="education" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto relative z-10 text-left">
      {/* Header */}
      <div className="mb-16 lg:mb-20 space-y-3">
        <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block">
          04 // Timeline
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight">
          Education
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          Undergraduate engineering curriculum and foundational secondary education.
        </p>
      </div>

      {/* Slender Aerospace Timeline with generous spacing */}
      <div className="relative pl-7 sm:pl-10 border-l border-[#243247] ml-3 sm:ml-4 space-y-10 sm:space-y-12">
        {educationHistory.map((edu, idx) => {
          const isBtech = edu.id === "btech";

          return (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Slender Orbital Node Marker */}
              <div
                className={`absolute -left-[33px] sm:-left-[45px] top-2 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-[#050914] transition-transform group-hover:scale-110 ${
                  isBtech
                    ? "bg-[#38BDF8] text-[#050914]"
                    : "bg-[#101B2C] border border-[#243247] text-[#94A3B8]"
                }`}
              >
                {isBtech ? <GraduationCap size={13} /> : <School size={12} />}
              </div>

              {/* Clean Timeline Card with generous padding */}
              <div className="p-6 sm:p-7 rounded-lg bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8]/40 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="text-[10px] font-mono text-[#38BDF8] uppercase px-2 py-0.5 rounded bg-[#0A1220] border border-[#243247]">
                      {isBtech ? "Undergraduate" : "Secondary"}
                    </span>
                    <h3 className="font-heading text-base sm:text-lg font-semibold text-[#F1F5F9]">
                      {edu.degree}
                    </h3>
                  </div>

                  <span className="px-3 py-1 rounded text-xs font-mono font-bold bg-[#0A1220] text-[#38BDF8] border border-[#243247] w-fit">
                    {edu.result}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#F1F5F9]/80 font-medium mb-3">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-3.5 text-xs font-mono text-[#64748B]">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    <span>{edu.duration}</span>
                  </div>
                  {edu.status && (
                    <span className="text-[#818CF8]">
                      · {edu.status}
                    </span>
                  )}
                  {edu.board && <span>· Board: {edu.board}</span>}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
