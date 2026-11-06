/* ========================================================
   Achievements — MILESTONES & ACHIEVEMENTS
   Restrained Scientific Statistics & Verified Benchmarks
   ======================================================== */

import { motion } from "framer-motion";
import { spaceMilestones } from "../data/portfolioData";
import AnimatedCounter from "./ui/AnimatedCounter";

const Achievements = () => {
  return (
    <section id="achievements" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto relative z-10 text-left">
      {/* Header */}
      <div className="mb-16 lg:mb-20 space-y-3">
        <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block">
          06 // Benchmarks
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight">
          Milestones & Achievements
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
          Quantifiable metrics across algorithmic problem solving, academic performance, and production deployments.
        </p>
      </div>

      {/* Grid of Scientific Statistics with generous spacing */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
        {spaceMilestones.map((ms, idx) => (
          <motion.div
            key={ms.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="p-6 sm:p-7 rounded-lg bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8]/40 transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-[#F1F5F9] mb-1.5 tracking-tight">
                {ms.isFloat ? (
                  <span>9.2</span>
                ) : (
                  <AnimatedCounter target={ms.target} suffix={ms.suffix || ""} />
                )}
              </div>

              <h3 className="font-heading font-semibold text-xs sm:text-sm uppercase tracking-wider text-[#38BDF8] mb-3">
                {ms.label}
              </h3>
            </div>

            <p className="text-[11px] font-mono text-[#64748B] leading-relaxed pt-3 border-t border-[#243247]">
              {ms.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
