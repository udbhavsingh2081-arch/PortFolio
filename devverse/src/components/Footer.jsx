/* ========================================================
   Footer — SCIENTIFIC AEROSPACE FOOTER
   Clean System Telemetry & Orbital Propulsion Control
   ======================================================== */

import { ArrowUp, Orbit } from "lucide-react";
import { Github, Linkedin } from "./ui/Icons";
import { personalData } from "../data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-32 lg:mt-40 border-t border-[#243247] bg-[#0A1220]/80 backdrop-blur-md relative z-10 text-left">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-14 lg:py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Logo & Subtitle */}
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <div className="w-5 h-5 rounded border border-[#243247] bg-[#101B2C] flex items-center justify-center text-[#38BDF8]">
                <Orbit size={13} />
              </div>
              <span className="font-heading font-bold text-sm tracking-wider text-[#F1F5F9]">
                DEVVERSE
              </span>
            </div>
            <p className="text-xs font-mono text-[#64748B]">
              Engineered by {personalData.name} · Full-Stack Web Developer
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3.5">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={15} />
            </a>

            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8] flex items-center justify-center text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={15} />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded btn-scientific-primary flex items-center justify-center text-[#050914] cursor-pointer hover:scale-105 active:scale-95 transition-transform ml-1"
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-[#243247] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#64748B] text-center sm:text-left">
          <p>© {new Date().getFullYear()} {personalData.name}. All verified engineering rights reserved.</p>
          <p>
            Compatible with AWS Amplify Hosting · React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
