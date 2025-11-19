import { useContext } from "react";
import { sectionContext } from "../../pages/Docs";
import { useObserver } from "../../features/doc/useObserver";

export default function RightSideBar() {
  const { activeSection } = useContext(sectionContext);
  const sections = useObserver();

  const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      container: "nearest",
    });
  };

  return (
    <div
      className={`absolute top-5 right-3 hidden w-64 translate-z-0 bg-white transition-colors duration-600 will-change-transform xl:block dark:bg-black`}
    >
      <ul>
        {sections?.length &&
          sections.map((section) => {
            if (typeof section === "string")
              return (
                <li key={section}>
                  <button
                    className={`mt-2 cursor-pointer text-sm transition-colors hover:text-gray-950 hover:dark:text-white ${activeSection === section ? "text-gray-950 dark:text-white" : "text-gray-900/50 dark:text-white/50"}`}
                    onClick={() => scrollToId(section)}
                  >
                    {section}
                  </button>
                </li>
              );
            else if (typeof section === "object" && section.subsections)
              return (
                <li key={section.name}>
                  <button
                    className={`mt-2 cursor-pointer text-sm transition-colors hover:text-gray-950 hover:dark:text-white ${activeSection === section.name ? "text-gray-950 dark:text-white" : "text-gray-900/50 dark:text-white/50"}`}
                    onClick={() => {
                      scrollToId(section.name);
                    }}
                  >
                    {section.name}
                  </button>
                  <ul className="mt-1 ml-4">
                    {section.subsections.map((subsection) => (
                      <li key={subsection}>
                        <button
                          className={`mt-1 cursor-pointer text-sm transition-colors hover:text-gray-950 hover:dark:text-white ${activeSection === subsection ? "text-gray-950 dark:text-white" : "text-gray-900/50 dark:text-white/50"}`}
                          onClick={() => scrollToId(subsection)}
                        >
                          {subsection}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            return null;
          })}
      </ul>
    </div>
  );
}
