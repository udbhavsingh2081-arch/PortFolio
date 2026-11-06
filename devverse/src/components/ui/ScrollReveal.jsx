/* ============================================
   ScrollReveal — Smooth scroll animation
   Uses Framer Motion's native whileInView
   ============================================ */

import { motion } from "framer-motion";

const directions = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

const ScrollReveal = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) => {
  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
