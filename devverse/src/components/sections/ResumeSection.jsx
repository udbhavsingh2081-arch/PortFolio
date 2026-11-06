/* ============================================
   ResumeSection — Clean CV Download Banner
   ============================================ */

import { FileText, Download, Eye } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionHeader
        title="Resume"
        subtitle="Complete technical summary and educational qualifications"
      />

      <ScrollReveal>
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl shadow-slate-900/5 text-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4">
            <FileText size={28} />
          </div>

          <h3 className="font-heading text-2xl font-bold text-slate-900 mb-1.5">
            Udbhav Singh Chouhan — Technical CV
          </h3>
          <p className="text-slate-600 text-sm max-w-lg mx-auto mb-8">
            Full-Stack Web Developer · B.Tech CSE (CGPA 9.2) · Hands-on Node.js, Express, MongoDB, and React experience.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={personalInfo.resumePath}
              download="Udbhav_Singh_Chouhan_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-md shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
            >
              <Download size={16} />
              <span>Download Resume PDF</span>
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold border border-slate-300 shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              <Eye size={16} />
              <span>View in Browser</span>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ResumeSection;
