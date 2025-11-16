import { useState } from "react";
import SearchInput from "../base/SearchInput";
import { glassContainerStyle } from "../styles/glass";

function SearchModal() {
  const [search, setSearch] = useState("");
  return (
    <div
      className={
        `z-50 flex h-96 w-96 items-center justify-center rounded-4xl p-1 lg:w-136 ` +
        glassContainerStyle
      }
    >
      <div
        className={`flex h-94 w-94 flex-col bg-transparent p-4 text-black transition-colors duration-500 lg:w-134 dark:rounded-[28px] dark:text-white dark:shadow-inner`}
      >
        <SearchInput
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default SearchModal;
