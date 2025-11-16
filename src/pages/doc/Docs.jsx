import { Outlet } from "react-router";
import LeftSidebar from "../../ui/layout/LeftSidebar";
import RightSideBar from "../../ui/layout/RightSideBar";
import { createContext, useState } from "react";
import { useMemo } from "react";

export const sectionContext = createContext();
export const locationContext = createContext();

function Docs() {
  const [activeSection, setActiveSection] = useState("");
  const [location, setLocation] = useState("");

  const sectionProviderValue = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection, setActiveSection],
  );
  const locationProviderValue = useMemo(
    () => ({ location, setLocation }),
    [location, setLocation],
  );

  return (
    <div className="relative flex h-screen w-screen">
      <LeftSidebar />
      <sectionContext.Provider value={sectionProviderValue}>
        <locationContext.Provider value={locationProviderValue}>
          <RightSideBar />
          <div
            className={`main-scroll mulish scroller flex flex-1 flex-col overflow-auto bg-white px-8 pb-40 text-[17px] tracking-tight text-gray-900/70 transition-colors duration-600 sm:px-25 lg:px-35 xl:pr-90 xl:pl-40 dark:bg-black dark:text-[#A9A9A9]`}
          >
            <Outlet />
          </div>
        </locationContext.Provider>
      </sectionContext.Provider>
    </div>
  );
}

export default Docs;
