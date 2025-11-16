import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.includes("/docs/")) return;
    const content = document.querySelector(".main-scroll");

    if (content) {
      content.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
