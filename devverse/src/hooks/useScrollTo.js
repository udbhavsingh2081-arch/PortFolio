// Custom hook for smooth scrolling to sections

export const useScrollTo = () => {
  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return scrollTo;
};
