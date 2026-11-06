/* ========================================================
   Certificates — CERTIFICATIONS & COURSEWORK
   Minimalist Grid with Interactive Verification Modal
   ======================================================== */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BookOpen,
  Brain,
  Briefcase,
  X,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import { certificates } from "../data/portfolioData";

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

const iconMap = {
  "nptel-java": Award,
  "nptel-dbms": DatabaseIcon,
  "prompt-eng": BookOpen,
  "intro-ai": Brain,
  "career-edge": Briefcase,
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto relative z-10 text-left">
      {/* Header */}
      <div className="mb-16 lg:mb-20 space-y-3">
        <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block">
          05 // Credentials
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight">
          Certifications & Coursework
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
          Verified academic credentials, national examinations, and specialized technology coursework.
        </p>
      </div>

      {/* Grid: Minimal Scientific Cards with generous padding & gap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {certificates.map((cert, idx) => {
          const Icon = iconMap[cert.id] || Award;

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              onClick={() => setSelectedCert(cert)}
              className="p-6 sm:p-7 rounded-lg bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8]/50 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded bg-[#0A1220] border border-[#243247] text-[#38BDF8] flex items-center justify-center group-hover:border-[#38BDF8] transition-colors">
                    <Icon size={17} />
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-medium uppercase ${
                      cert.type === "Certified"
                        ? "bg-[#0A1220] text-[#38BDF8] border border-[#38BDF8]/30"
                        : "bg-[#0A1220] text-[#818CF8] border border-[#818CF8]/30"
                    }`}
                  >
                    {cert.type}
                  </span>
                </div>

                <h3 className="font-heading font-semibold text-[#F1F5F9] text-base mb-1.5 group-hover:text-[#38BDF8] transition-colors">
                  {cert.name}
                </h3>

                <p className="text-xs font-mono text-[#60A5FA] mb-2.5">
                  {cert.issuer}
                </p>

                {cert.details && (
                  <p className="text-[11px] font-mono text-[#64748B] mb-2 leading-relaxed">
                    {cert.details}
                  </p>
                )}
              </div>

              <div className="pt-3.5 border-t border-[#243247] flex items-center justify-between mt-3">
                <span className="text-[10px] font-mono uppercase text-[#64748B]">
                  {cert.score ? `Score: ${cert.score}` : "Verified Entry"}
                </span>
                <span className="text-xs font-mono text-[#38BDF8] group-hover:underline">
                  Inspect →
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Larger Certificate Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-[#050914]/85 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-xl bg-[#101B2C] border border-[#243247] shadow-2xl p-6 sm:p-9 z-10 space-y-6 text-left"
            >
              <div className="flex items-start justify-between border-b border-[#243247] pb-4">
                <div className="flex items-center gap-3">
                  <FileCheck size={22} className="text-[#38BDF8]" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#64748B] block">
                      Accreditation Dossier
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#F1F5F9]">
                      {selectedCert.name}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded bg-[#0A1220] border border-[#243247] text-[#94A3B8] hover:text-[#F1F5F9] cursor-pointer"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-5 rounded-lg bg-[#0A1220] border border-[#243247] space-y-3.5 font-mono text-xs text-[#94A3B8]">
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B]">Issuing Authority:</span>
                  <span className="text-[#F1F5F9] font-medium">{selectedCert.issuer}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#64748B]">Classification:</span>
                  <span className="text-[#38BDF8]">{selectedCert.type}</span>
                </div>
                {selectedCert.score && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Assessment Result:</span>
                    <span className="text-[#10B981] font-bold">{selectedCert.score}</span>
                  </div>
                )}
                {selectedCert.details && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Duration / Details:</span>
                    <span className="text-[#F1F5F9]">{selectedCert.details}</span>
                  </div>
                )}
                <div className="flex items-center justify-between pt-2.5 border-t border-[#243247]">
                  <span className="text-[#64748B]">Verification Status:</span>
                  <span className="inline-flex items-center gap-1.5 text-[#10B981]">
                    <CheckCircle2 size={14} />
                    Official Record
                  </span>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded bg-[#0A1220] hover:bg-[#142238] border border-[#243247] text-xs font-mono text-[#F1F5F9] cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
