/* ============================================
   SectionHeader — Consistent, Centered Anime Header
   ============================================ */

import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <motion.div
      className="text-center mb-12 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">
        {title}
      </h2>
      {/* Anime-style subtle pastel accent underline */}
      <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-sky-400 via-blue-600 to-indigo-500 mb-3" />
      {subtitle && (
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
