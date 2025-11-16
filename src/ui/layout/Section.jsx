import { useLocation } from "react-router";
import { sectionOfPages } from "../../pages/pageInfo";
import { createContext, useContext } from "react";

const sectionContext = createContext();

export function Section({ id, children }) {
  const { pathname } = useLocation();
  const location = pathname.split("/").pop();
  const sections = sectionOfPages[location] || {};
  const section = sections[id];
  if (typeof section === "string") {
    return (
      <section
        id={section}
        className="prose prose-neutral dark:prose-invert max-w-none"
      >
        {children}
      </section>
    );
  }

  return (
    <sectionContext.Provider value={{ section, id }}>
      <div
        id={section.name}
        className="prose prose-neutral dark:prose-invert max-w-none"
      >
        {children}
      </div>
    </sectionContext.Provider>
  );
}

function Subsection({ id, children }) {
  const { section } = useContext(sectionContext);
  return (
    <section
      id={section.subsections[id]}
      className="prose prose-neutral dark:prose-invert max-w-none"
    >
      {children}
    </section>
  );
}

Section.Subsection = Subsection;
export default Section;
