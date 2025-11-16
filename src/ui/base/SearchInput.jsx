import { useSelector } from "react-redux";
import SearchIcon from "./Icon/searchIcon";
import { glassInputDarkStyle, glassInputLightStyle } from "../styles/glass";

export default function SearchInput({ value, onChange }) {
  const theme = useSelector((state) => state.user.theme);
  return (
    <div className="flex">
      <div className={`mt-2 mr-1`}>
        <SearchIcon />
      </div>

      <input
        placeholder={"Search the component..."}
        className={
          theme === "light"
            ? glassInputLightStyle + "h-10 grow rounded-[36px] px-4 py-2"
            : glassInputDarkStyle + "h-10 grow rounded-[36px] px-4 py-2"
        }
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
