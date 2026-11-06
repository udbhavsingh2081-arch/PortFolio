/* ============================================
   ContactSection — Open, Sleek Communication Hub
   No clunky card-like form — modern & responsive
   ============================================ */

import { useState } from "react";
import { Mail, Send, CheckCircle, ExternalLink, Copy, Check } from "lucide-react";
import { Github, Linkedin } from "../ui/Icons";
import { personalInfo } from "../../data/personalInfo";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [emailText, setEmailText] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;

    const mailto = `mailto:${personalInfo.email}?subject=Portfolio Inquiry&body=${encodeURIComponent(
      `From: ${emailText || "Visitor"}\n\n${message}`
    )}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setMessage("");
      setEmailText("");
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      <SectionHeader
        title="Get In Touch"
        subtitle="Open for internships, full-stack projects, and engineering conversations"
      />

      <ScrollReveal>
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl shadow-slate-900/5 max-w-2xl mx-auto">
          {/* Main Direct Email Action */}
          <div className="mb-8">
            <p className="text-slate-600 text-sm mb-3">
              Feel free to send a direct email or connect through professional channels:
            </p>

            <div className="inline-flex items-center gap-2 p-1.5 pl-4 rounded-full bg-slate-100/90 border border-slate-200/90 shadow-2xs">
              <span className="font-mono text-xs sm:text-sm font-semibold text-slate-800">
                {personalInfo.email}
              </span>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all cursor-pointer shadow-xs"
                title="Copy email address"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Social Presence Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10 pb-8 border-b border-slate-200/70">
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-blue-50 text-slate-800 hover:text-blue-700 text-xs font-semibold border border-slate-200 shadow-2xs transition-all hover:scale-105 active:scale-95"
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 shadow-2xs transition-all hover:scale-105 active:scale-95"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-amber-50 text-slate-800 hover:text-amber-700 text-xs font-semibold border border-slate-200 shadow-2xs transition-all hover:scale-105 active:scale-95"
            >
              <ExternalLink size={15} />
              <span>LeetCode</span>
            </a>
          </div>

          {/* Minimalist Message Drop (No Clunky Form) */}
          <div className="text-left">
            <h4 className="font-heading text-sm font-bold text-slate-900 mb-2">
              Send a Quick Note
            </h4>

            {sent ? (
              <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs flex items-center gap-2 border border-emerald-200">
                <CheckCircle size={16} />
                <span>Default mail client opened. Thank you for connecting!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={emailText}
                  onChange={(e) => setEmailText(e.target.value)}
                  placeholder="Your email address (optional)"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50/90 text-slate-900 border border-slate-200 focus:outline-none focus:bg-white focus:border-blue-600 text-xs sm:text-sm transition-colors"
                />

                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message or internship inquiry..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50/90 text-slate-900 border border-slate-200 focus:outline-none focus:bg-white focus:border-blue-600 text-xs sm:text-sm transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send size={15} />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
