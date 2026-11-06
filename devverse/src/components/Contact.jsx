/* ========================================================
   Contact — ESTABLISH A CONNECTION
   Scientific Communications Console & Direct Transmission
   ======================================================== */

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Copy, Check, ExternalLink, Mail } from "lucide-react";
import { Github, Linkedin } from "./ui/Icons";
import { personalData } from "../data/portfolioData";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = encodeURIComponent(`DEVVERSE Connection from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto relative z-10 text-left">
      {/* Header */}
      <div className="mb-16 lg:mb-20 space-y-3">
        <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block">
          07 // Communications
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F1F5F9] tracking-tight">
          Establish a Connection
        </h2>
        <p className="text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed">
          Have an interesting project, opportunity or idea? Let's connect and build something meaningful.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (5 cols): Direct Channels with breathing space */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Copy Card */}
          <div className="p-5 rounded-lg bg-[#101B2C] border border-[#243247] space-y-2.5">
            <span className="text-[11px] font-mono text-[#38BDF8] uppercase tracking-wider block">
              Direct Communication Frequency:
            </span>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs sm:text-sm text-[#F1F5F9] truncate">
                {personalData.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded bg-[#0A1220] hover:bg-[#142238] text-[#38BDF8] text-xs font-mono flex items-center gap-1.5 border border-[#243247] hover:border-[#38BDF8] transition-all cursor-pointer shrink-0"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? "COPIED" : "COPY"}</span>
              </button>
            </div>
          </div>

          {/* Scientific Telemetry Profiles */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase text-[#64748B] block">
              Verified Profiles:
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8] text-[#94A3B8] hover:text-[#F1F5F9] text-xs font-mono transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin size={15} className="text-[#38BDF8]" />
                  <span>linkedin.com/in/udbhav-singh-cse</span>
                </div>
                <ExternalLink size={13} />
              </a>

              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-[#101B2C] border border-[#243247] hover:border-[#38BDF8] text-[#94A3B8] hover:text-[#F1F5F9] text-xs font-mono transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Github size={15} className="text-[#38BDF8]" />
                  <span>github.com/udbhavsingh2081-arch</span>
                </div>
                <ExternalLink size={13} />
              </a>

              <a
                href={personalData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-[#101B2C] border border-[#243247] hover:border-[#60A5FA] text-[#94A3B8] hover:text-[#F1F5F9] text-xs font-mono transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <ExternalLink size={15} className="text-[#60A5FA]" />
                  <span>leetcode.com/u/Udbhav_singh_chouhan</span>
                </div>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Clean Contact Form */}
        <div className="lg:col-span-7 p-7 sm:p-9 rounded-xl bg-[#101B2C] border border-[#243247]">
          {sent ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-10 text-center space-y-2.5"
            >
              <div className="w-12 h-12 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="font-heading text-lg font-semibold text-[#F1F5F9]">
                Message Dispatch Ready!
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8] max-w-sm mx-auto leading-relaxed">
                Your email client was invoked with pre-filled telemetry. Thank you for connecting.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-mono uppercase text-[#38BDF8] mb-2">
                  Name / Organization:
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Dr. Jane Smith"
                  className="w-full px-4 py-3 rounded bg-[#0A1220] text-[#F1F5F9] border border-[#243247] focus:outline-none focus:border-[#38BDF8] text-xs sm:text-sm font-mono transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#38BDF8] mb-2">
                  Return Frequency (Your Email):
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@organization.com"
                  className="w-full px-4 py-3 rounded bg-[#0A1220] text-[#F1F5F9] border border-[#243247] focus:outline-none focus:border-[#38BDF8] text-xs sm:text-sm font-mono transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#38BDF8] mb-2">
                  Transmission Details:
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Inquiry regarding software development, internships, or technical collaboration..."
                  className="w-full px-4 py-3 rounded bg-[#0A1220] text-[#F1F5F9] border border-[#243247] focus:outline-none focus:border-[#38BDF8] text-xs sm:text-sm font-mono transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded btn-scientific-primary text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <Send size={15} />
                <span>Transmit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
