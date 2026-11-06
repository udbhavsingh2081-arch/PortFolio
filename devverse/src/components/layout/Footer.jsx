/* ============================================
   Footer — Frosted Glass Anime Theme Footer
   ============================================ */

import { Mail, ExternalLink } from "lucide-react";
import { Github, Linkedin } from "../ui/Icons";
import { personalInfo } from "../../data/personalInfo";
import { NAV_LINKS } from "../../utils/constants";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
    { icon: ExternalLink, href: personalInfo.social.leetcode, label: "LeetCode" },
  ];

  const handleNavClick = (href) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="mt-20 border-t border-white/60 bg-white/85 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Branding */}
          <div>
            <h3 className="font-heading text-lg font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-mono font-bold">
                U
              </span>
              DEVVERSE
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              {personalInfo.introShort}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-1.5">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="text-left text-slate-600 hover:text-blue-600 text-xs font-medium transition-colors cursor-pointer"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
              Connect
            </h4>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-400 transition-colors shadow-2xs"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200/80 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Udbhav Singh Chouhan. All rights reserved.</p>
          <p>
            Hosted on <span className="font-semibold text-slate-700">AWS Amplify</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
