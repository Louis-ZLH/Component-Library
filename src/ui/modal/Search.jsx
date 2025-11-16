import SearchIcon from "../base/Icon/searchIcon";
import Modal from "./Modal";
import SearchModal from "./SearchModal";
import { glassButtonStyle } from "../styles/glass";

function SearchButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        `mr-1 h-8 w-12 cursor-pointer rounded-xl px-3 lg:w-28 ` +
        glassButtonStyle
      }
    >
      <div className="flex">
        <SearchIcon />
        <span
          className={`mt-[0.5px] hidden text-gray-400 lg:block dark:text-gray-200`}
        >
          Search
        </span>
      </div>
    </button>
  );
}

function Search() {
  return <Modal button={<SearchButton />} window={<SearchModal />} />;
}

export default Search;
