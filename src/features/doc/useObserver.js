import { useContext, useEffect, useMemo } from "react";
import { locationContext, sectionContext } from "../../pages/Docs";
import { sectionOfPages } from "../../pages/pageInfo";

export function useObserver() {
  const { setActiveSection } = useContext(sectionContext);
  const { location } = useContext(locationContext);
  const sections = useMemo(() => sectionOfPages[location], [location]);
  useEffect(() => {
    if (!sections?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        // scrollMargin: "-45% 0px -45% 0px",
        rootMargin: "-30% 0px -69% 0px",
        threshold: 0,
      },
    );
    sections.forEach((item) => {
      if (typeof item === "string") {
        const el = document.getElementById(item);
        if (el) observer.observe(el);
      } else if (typeof item === "object" && item.subsections) {
        item.subsections.forEach((subsection) => {
          const el = document.getElementById(subsection);
          if (el) observer.observe(el);
        });
        const el = document.getElementById(item.name);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [setActiveSection, sections, sections?.length]);
  return sections;
}
