/* ========================================================
   Sidebar — Narrow Vertical Cyber Icon Sidebar
   Matching Cyber-Tech Portfolio Composition
   ======================================================== */

import { useState, useEffect } from "react";
import {
  Home,
  User,
  Cpu,
  FolderGit2,
  GraduationCap,
  Award,
  Mail,
  Orbit,
} from "lucide-react";
import { Github, Linkedin } from "./ui/Icons";
import { personalData } from "../data/portfolioData";

const sidebarNavItems = [
  { id: "hero", label: "Home", icon: Home, href: "#hero" },
  { id: "about-skills", label: "About & Skills", icon: User, href: "#about-skills" },
  { id: "projects", label: "Projects", icon: FolderGit2, href: "#projects" },
  { id: "education-certifications", label: "Education", icon: GraduationCap, href: "#education-certifications" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact" },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" }
    );

    const sectionIds = ["hero", "about-skills", "projects", "education-certifications", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      aria-label="Quick Navigation Sidebar"
      className="fixed left-0 top-0 bottom-0 w-16 z-40 hidden md:flex flex-col items-center justify-between py-6 bg-[#050914]/90 backdrop-blur-xl border-r border-[#38BDF8]/20 select-none shadow-[4px_0_24px_rgba(0,0,0,0.5)]"
    >
      {/* Top Brand Hex / Orbit Emblem */}
      <a
        href="#hero"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="w-10 h-10 rounded-xl bg-[#101B2C] border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8] hover:border-[#38BDF8] hover:shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all group cursor-pointer"
        title="DEVVERSE Core"
      >
        <Orbit size={20} className="group-hover:rotate-180 transition-transform duration-700" />
      </a>

      {/* Center Nav Icon Stack */}
      <nav className="flex flex-col items-center gap-3">
        {sidebarNavItems.map(({ id, label, icon: Icon, href }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => handleScrollTo(href)}
              className={`relative group w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                isActive
                  ? "bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/60 shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                  : "text-[#64748B] hover:text-[#F1F5F9] hover:bg-[#101B2C] border border-transparent hover:border-[#243247]"
              }`}
              aria-label={label}
            >
              <Icon size={18} />

              {/* Active Indicator Pip */}
              {isActive && (
                <span className="absolute -left-1 w-1 h-4 bg-[#38BDF8] rounded-r-full shadow-[0_0_8px_#38BDF8]" />
              )}

              {/* Tooltip on Hover */}
              <span className="absolute left-14 px-2.5 py-1 rounded bg-[#101B2C] text-[#F1F5F9] border border-[#38BDF8]/30 text-[11px] font-mono tracking-wider whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
                {label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Socials & System Telemetry */}
      <div className="flex flex-col items-center gap-3">
        <a
          href={personalData.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
          title="GitHub"
          aria-label="GitHub"
        >
          <Github size={14} />
        </a>

        <a
          href={personalData.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <Linkedin size={14} />
        </a>

        {/* Vertical Pulse Status */}
        <div className="flex flex-col items-center gap-1.5 pt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
          <span className="text-[9px] font-mono text-[#64748B] [writing-mode:vertical-rl] tracking-widest uppercase">
            SYS ONLINE
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
