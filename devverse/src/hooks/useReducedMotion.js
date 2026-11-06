// Custom hook to detect if user prefers reduced motion
// Returns true if the user has enabled "Reduce Motion" in their OS settings

import { useState, useEffect } from "react";

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReducedMotion;
};
