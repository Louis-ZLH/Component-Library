import BarItem from "../base/BarItem";
import { pageList } from "../../pages/pageInfo";
import { memo } from "react";

function LeftSidebar() {
  return (
    <div
      className={`text-gray-80 hidden h-full w-54 flex-col bg-white p-4 pt-6 transition-colors duration-600 lg:flex dark:bg-black dark:text-gray-50`}
    >
      {pageList.map((item) => (
        <BarItem
          key={item.name}
          type={item.type}
          name={item.name}
          href={item.href}
        />
      ))}
    </div>
  );
}
export default memo(LeftSidebar);
