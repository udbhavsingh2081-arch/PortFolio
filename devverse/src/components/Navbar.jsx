/* ========================================================
   Navbar — Top Navigation Bar
   Offset for Left Sidebar & Seamless Cyber Header
   ======================================================== */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Orbit, FileText } from "lucide-react";
import { personalData } from "../data/portfolioData";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about-skills" },
  { label: "Skills", href: "#about-skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education-certifications" },
  { label: "Certificates", href: "#education-certifications" },
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

  const handleScrollTo = (href) => {
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 md:left-16 right-0 z-30 h-[70px] transition-all duration-200 ${
        isScrolled
          ? "bg-[#050914]/90 backdrop-blur-md border-b border-[#38BDF8]/20 shadow-md shadow-[#050914]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto h-full px-6 sm:px-10 flex items-center justify-between">
        {/* Brand: DEVVERSE */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg border border-[#38BDF8]/40 bg-[#101B2C] flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8] group-hover:shadow-[0_0_12px_rgba(56,189,248,0.4)] transition-all">
            <Orbit size={16} className="group-hover:rotate-180 transition-transform duration-700" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-widest text-[#F1F5F9] group-hover:text-[#38BDF8] transition-colors">
              DEVVERSE
            </span>
            <span className="text-[9px] font-mono text-[#64748B] tracking-wider uppercase">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleScrollTo(href)}
              className="relative py-1 text-xs font-mono uppercase tracking-wider text-[#94A3B8] hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right Action: Resume Download Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={personalData.resumePath}
            download="Udbhav_Singh_Chouhan_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#101B2C] hover:bg-[#142238] border border-[#38BDF8]/40 hover:border-[#38BDF8] text-xs font-mono text-[#F1F5F9] hover:text-[#38BDF8] shadow-[0_0_10px_rgba(56,189,248,0.15)] transition-all cursor-pointer"
          >
            <FileText size={13} className="text-[#38BDF8]" />
            <span>Resume.pdf</span>
          </a>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#101B2C] border border-[#243247] text-[#94A3B8] hover:text-[#F1F5F9] cursor-pointer"
            aria-label="Toggle Navigation"
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
            className="lg:hidden bg-[#0A1220]/98 backdrop-blur-xl border-b border-[#38BDF8]/30 px-6 py-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map(({ label, href }) => (
                <button
                  key={label}
                  onClick={() => handleScrollTo(href)}
                  className="text-left py-2 px-3 rounded text-xs font-mono uppercase tracking-wider text-[#94A3B8] hover:text-[#38BDF8] hover:bg-[#101B2C] transition-colors cursor-pointer"
                >
                  {label}
                </button>
              ))}

              <div className="pt-2 border-t border-[#243247] mt-2">
                <a
                  href={personalData.resumePath}
                  download="Udbhav_Singh_Chouhan_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-[#0284C7] to-[#38BDF8] text-[#050914] text-xs font-mono font-bold"
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
