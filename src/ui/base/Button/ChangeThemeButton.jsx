import { useDispatch, useSelector } from "react-redux";
import SunIcon from "../Icon/SunIcon";
import MoonIcon from "../Icon/MoonIcon";
import { changeTheme } from "../../../features/login/userSlice";
import { glassButtonStyle } from "../../styles/glass";

function ChangeThemeButton() {
  const theme = useSelector((state) => state.user.theme);
  const dispatch = useDispatch();
  return (
    <div
      className={
        `mr-1 flex h-8 w-8 items-center justify-center rounded-full ` +
        glassButtonStyle
      }
    >
      <button
        className="cursor-pointer p-1"
        onClick={() => {
          dispatch(changeTheme(theme === "light" ? "dark" : "light"));
        }}
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
}
export default ChangeThemeButton;
