/* ============================================
   AchievementsSection — High-Impact Metrics Strip
   No card boxes — bold & responsive
   ============================================ */

import { Code2, Award, Database, Rocket, Users } from "lucide-react";
import { achievements } from "../../data/achievements";
import SectionHeader from "../ui/SectionHeader";
import AnimatedCounter from "../ui/AnimatedCounter";
import ScrollReveal from "../ui/ScrollReveal";

const iconMap = { Code2, Award, Database, Rocket, Users };

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <SectionHeader
        title="Achievements"
        subtitle="Measurable performance benchmarks and technical milestones"
      />

      <ScrollReveal>
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {achievements.slice(0, 4).map((achievement) => {
              const Icon = iconMap[achievement.icon] || Award;

              return (
                <div key={achievement.id} className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-2">
                    <Icon size={20} />
                  </div>

                  {achievement.metric && (
                    <div className="text-3xl sm:text-4xl font-heading font-bold text-slate-900 tracking-tight">
                      <AnimatedCounter
                        target={parseInt(achievement.metric, 10)}
                        suffix={
                          achievement.metric.includes("+")
                            ? "+"
                            : achievement.metric.includes("%")
                            ? "%"
                            : ""
                        }
                      />
                    </div>
                  )}

                  <h3 className="font-heading font-semibold text-slate-900 text-xs sm:text-sm">
                    {achievement.title}
                  </h3>

                  <p className="text-slate-500 text-[11px] leading-relaxed hidden sm:block">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default AchievementsSection;
