import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";

export default function ThemeListener() {
  const theme = useSelector((state) => state.user.theme);
  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return null;
}
