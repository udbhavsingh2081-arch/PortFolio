/* ============================================
   AboutSection — Open Editorial Story
   No heavy nested box cards — clean & attractive
   ============================================ */

import { MapPin, Calendar, Target } from "lucide-react";
import { personalInfo } from "../../data/personalInfo";
import { education } from "../../data/education";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";
import profilePhoto from "../../assets/images/profile.jpeg";

const AboutSection = () => {
  const btech = education.find((e) => e.id === "btech");

  return (
    <section id="about" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionHeader
        title="About Me"
        subtitle="Developer background, educational foundation, and aspirations"
      />

      <ScrollReveal>
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column (5 cols): Photo & Quick Pills */}
            <div className="md:col-span-5 flex flex-col items-center text-center">
              <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden ring-4 ring-white shadow-xl mb-5">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quick Details Pills */}
              <div className="flex flex-col gap-2 w-full max-w-xs">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-50/90 border border-slate-200/80 text-xs text-left">
                  <MapPin className="text-blue-600 shrink-0" size={16} />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Location</span>
                    <span className="text-slate-800 font-medium">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-50/90 border border-slate-200/80 text-xs text-left">
                  <Calendar className="text-blue-600 shrink-0" size={16} />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Status</span>
                    <span className="text-slate-800 font-medium">{btech?.semester}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-50/90 border border-slate-200/80 text-xs text-left">
                  <Target className="text-blue-600 shrink-0" size={16} />
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Objective</span>
                    <span className="text-slate-800 font-medium">SDE Internship</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Editorial Narrative */}
            <div className="md:col-span-7 space-y-4 text-left">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Building practical, full-stack applications with clean code.
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {personalInfo.introduction}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                I have solved 150+ problems on LeetCode focusing on Data Structures and Algorithms, and am actively expanding my frontend capabilities with React.js.
              </p>

              <blockquote className="border-l-3 border-blue-600 pl-4 py-1.5 mt-4 text-slate-800 italic text-sm bg-blue-50/50 rounded-r-xl">
                "{personalInfo.careerGoal}"
              </blockquote>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default AboutSection;
