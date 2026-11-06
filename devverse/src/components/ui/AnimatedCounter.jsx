/* ============================================
   AnimatedCounter — Number that counts up
   ============================================ */

import { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ target, suffix = "", duration = 1.5 }) => {
  const targetNum = parseInt(target, 10) || 0;
  const [count, setCount] = useState(targetNum); // Default to target so it never shows 0 if observer fails
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          setCount(0);

          let startTime;
          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * targetNum));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetNum);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [targetNum, duration]);

  return (
    <span ref={ref} className="font-heading font-bold">
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
