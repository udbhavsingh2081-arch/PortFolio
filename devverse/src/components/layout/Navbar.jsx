/* ============================================
   Navbar — Modern Floating Capsule
   Attractive, sleek, and responsive
   ============================================ */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS } from "../../utils/constants";
import { personalInfo } from "../../data/personalInfo";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    NAV_LINKS.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Floating Capsule Bar */}
        <nav className="pointer-events-auto w-full bg-white/85 backdrop-blur-xl border border-white/80 shadow-lg shadow-slate-900/5 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-mono font-bold shadow-xs group-hover:scale-105 transition-transform">
              U
            </span>
            <span className="font-heading text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              DEVVERSE
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-5">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.replace("#", "");
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={`text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer px-2.5 py-1 rounded-full ${
                    isActive
                      ? "text-blue-700 bg-blue-50 font-bold"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download="Udbhav_Singh_Chouhan_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>

            <button
              className="md:hidden text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle Navigation"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto md:hidden max-w-sm mx-auto mt-2 bg-white/95 backdrop-blur-xl border border-white/90 rounded-2xl p-4 shadow-xl"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className="text-left text-sm font-medium px-3 py-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
                >
                  {label}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={personalInfo.resumePath}
                  download="Udbhav_Singh_Chouhan_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
