/* ============================================
   LoadingScreen — Minimal light loader
   ============================================ */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 80);

    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 700);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-6 text-center">
            <h1 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">
              DEVVERSE
            </h1>
            <p className="text-slate-500 text-xs mt-1">
              Loading portfolio...
            </p>
          </div>

          <div className="w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
