/* ========================================================
   Navbar — Scientific Aerospace Navigation
   Slim, Minimalist Header with Orbital Insignia
   ======================================================== */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Orbit, FileText } from "lucide-react";
import { personalData } from "../data/portfolioData";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-72px 0px -40% 0px" }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (href) => {
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-200 ${
        isScrolled
          ? "bg-[#050914]/90 backdrop-blur-md border-b border-[#243247] shadow-sm shadow-[#050914]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Brand: Orbital Symbol + DEVVERSE */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded border border-[#243247] bg-[#101B2C] flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8] transition-colors">
            <Orbit size={16} className="group-hover:rotate-90 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-widest text-[#F1F5F9] group-hover:text-[#38BDF8] transition-colors">
              DEVVERSE
            </span>
            <span className="text-[9px] font-mono text-[#64748B] tracking-wider uppercase">
              Orbital 01 // SDE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map(({ label, href }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <button
                key={href}
                onClick={() => handleScrollTo(href)}
                className={`relative py-1 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? "text-[#38BDF8] font-semibold"
                    : "text-[#94A3B8] hover:text-[#F1F5F9]"
                }`}
              >
                {label}
                {isActive && (
                  <motion.div
                    layoutId="activeScientificIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#38BDF8]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Small Technical Resume Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href={personalData.resumePath}
            download="Udbhav_Singh_Chouhan_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#101B2C] hover:bg-[#142238] border border-[#243247] hover:border-[#38BDF8] text-xs font-mono text-[#F1F5F9] hover:text-[#38BDF8] transition-all cursor-pointer"
          >
            <FileText size={13} className="text-[#38BDF8]" />
            <span>Resume.pdf</span>
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded bg-[#101B2C] border border-[#243247] text-[#94A3B8] hover:text-[#F1F5F9] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A1220]/98 backdrop-blur-xl border-b border-[#243247] px-6 py-5 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleScrollTo(href)}
                  className={`text-left py-2 px-3 rounded text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    activeSection === href.replace("#", "")
                      ? "text-[#38BDF8] bg-[#101B2C] border-l-2 border-[#38BDF8]"
                      : "text-[#94A3B8] hover:text-[#F1F5F9]"
                  }`}
                >
                  {label}
                </button>
              ))}

              <div className="pt-3 border-t border-[#243247] mt-2">
                <a
                  href={personalData.resumePath}
                  download="Udbhav_Singh_Chouhan_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded bg-[#38BDF8] text-[#050914] text-xs font-mono font-bold"
                >
                  <FileText size={14} />
                  <span>Download Resume PDF</span>
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
