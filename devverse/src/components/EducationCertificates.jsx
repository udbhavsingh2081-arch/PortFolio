/* ========================================================
   EducationCertificates — Compact Education & Certificates
   Matching Reference Layout: Side-by-Side Clean Grid
   ======================================================== */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Brain,
  Briefcase,
  Calendar,
  CheckCircle2,
  X,
  FileCheck,
} from "lucide-react";
import { educationHistory, certificates } from "../data/portfolioData";

function DatabaseIcon(props) {
  return (
    <svg
      {...props}
      width="15"
      height="15"
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

const certIconMap = {
  "nptel-java": Award,
  "nptel-dbms": DatabaseIcon,
  "prompt-eng": BookOpen,
  "intro-ai": Brain,
  "career-edge": Briefcase,
};

const EducationCertificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section
      id="education-certifications"
      className="py-20 lg:py-28 px-6 sm:px-10 lg:px-14 max-w-6xl mx-auto relative z-10 text-left"
    >
      {/* Section Header */}
      <div className="mb-12 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider">
            03 // ACCREDITATION & TIMELINE
          </span>
          <span className="h-[1px] w-12 bg-[#38BDF8]/40" />
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F1F5F9] tracking-tight">
          Education & Certifications
        </h2>
        <p className="text-sm text-[#94A3B8] max-w-xl">
          Verified academic trajectory, NPTEL course scores, and computer science certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 p-6 rounded-2xl bg-[#101B2C]/90 border border-[#243247] shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#243247]">
            <GraduationCap size={18} className="text-[#38BDF8]" />
            <h3 className="font-heading font-bold text-base text-[#F1F5F9]">
              Academic Timeline
            </h3>
          </div>

          <div className="space-y-4 relative pl-4 border-l border-[#38BDF8]/30 ml-2">
            {educationHistory.map((edu) => {
              const isBtech = edu.id === "btech";
              return (
                <div key={edu.id} className="relative group">
                  <span
                    className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ring-2 ring-[#050914] ${
                      isBtech ? "bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" : "bg-[#64748B]"
                    }`}
                  />
                  <div className="p-3.5 rounded-xl bg-[#0A1220] border border-[#243247] group-hover:border-[#38BDF8]/40 transition-colors">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <h4 className="font-heading font-semibold text-xs text-[#F1F5F9]">
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] font-mono text-[#38BDF8] font-bold">
                        {edu.result}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#22D3EE] mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#64748B]">
                      <span>{edu.duration}</span>
                      {edu.status && <span className="text-[#818CF8]">· {edu.status}</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column (7 cols): Verified Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 p-6 rounded-2xl bg-[#101B2C]/90 border border-[#243247] shadow-[0_0_15px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#243247]">
            <Award size={18} className="text-[#22D3EE]" />
            <h3 className="font-heading font-bold text-base text-[#F1F5F9]">
              Verified Certifications (5)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certificates.map((cert) => {
              const Icon = certIconMap[cert.id] || Award;
              return (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="p-3.5 rounded-xl bg-[#0A1220] border border-[#243247] hover:border-[#38BDF8]/50 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="w-6 h-6 rounded bg-[#101B2C] text-[#38BDF8] flex items-center justify-center">
                        <Icon size={13} />
                      </div>
                      <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#101B2C] text-[#38BDF8] border border-[#38BDF8]/20">
                        {cert.score ? `Score: ${cert.score}` : "Verified"}
                      </span>
                    </div>

                    <h4 className="font-heading font-semibold text-xs text-[#F1F5F9] group-hover:text-[#38BDF8] transition-colors leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-[11px] font-mono text-[#60A5FA]">
                      {cert.issuer}
                    </p>
                  </div>

                  <span className="text-[10px] font-mono text-[#64748B] group-hover:text-[#22D3EE] pt-2 mt-2 border-t border-[#243247] block">
                    Inspect credential →
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
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
              className="relative w-full max-w-md rounded-xl bg-[#101B2C] border border-[#38BDF8]/40 shadow-2xl p-6 z-10 space-y-4 text-left"
            >
              <div className="flex items-start justify-between border-b border-[#243247] pb-3">
                <div className="flex items-center gap-2.5">
                  <FileCheck size={20} className="text-[#38BDF8]" />
                  <h3 className="font-heading text-base font-bold text-[#F1F5F9]">
                    {selectedCert.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1 rounded bg-[#0A1220] text-[#94A3B8] hover:text-[#F1F5F9] cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="p-3.5 rounded-lg bg-[#0A1220] border border-[#243247] space-y-2 font-mono text-xs text-[#94A3B8]">
                <div className="flex justify-between">
                  <span>Issuer:</span>
                  <span className="text-[#F1F5F9] font-medium">{selectedCert.issuer}</span>
                </div>
                {selectedCert.score && (
                  <div className="flex justify-between">
                    <span>Score:</span>
                    <span className="text-[#10B981] font-bold">{selectedCert.score}</span>
                  </div>
                )}
                <div className="flex justify-between pt-1 border-t border-[#243247]">
                  <span>Status:</span>
                  <span className="text-[#10B981] flex items-center gap-1">
                    <CheckCircle2 size={12} /> Verified
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-2 rounded bg-[#0A1220] hover:bg-[#142238] border border-[#243247] text-xs font-mono text-[#F1F5F9] cursor-pointer"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EducationCertificates;
