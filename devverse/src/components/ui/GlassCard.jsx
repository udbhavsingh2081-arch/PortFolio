/* ============================================
   GlassCard — Reusable glassmorphism card
   
   This component creates a frosted-glass card
   effect used throughout the portfolio.
   
   Props:
   - children: content inside the card
   - className: extra CSS classes
   - hover: enable hover glow effect (default true)
   ============================================ */

import { motion } from "framer-motion";

const GlassCard = ({ children, className = "", hover = true, ...props }) => {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${hover ? "glass-hover" : ""} transition-all duration-300 ${className}`}
      whileHover={hover ? { y: -4 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
