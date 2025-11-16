import LibLogo from "../base/Icon/LibLogo.jsx";
import { useLocation, useNavigate } from "react-router";
import ChangeThemeButton from "../base/Button/ChangeThemeButton.jsx";
import GithubButton from "../base/Button/GithubButton.jsx";
import Search from "../modal/Search.jsx";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === "/login") {
    return (
      <header className="flex h-12 w-screen items-center justify-center bg-sky-100 shadow-md">
        <span className="merriweather-100 text-sm text-sky-600">
          Welcome to Component Library!
        </span>
      </header>
    );
  }

  return (
    <header
      className={`flex h-16 w-screen items-center justify-between bg-white transition duration-600 dark:bg-black`}
    >
      <button
        className="mb-1 ml-3 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          navigate("/docs");
        }}
      >
        <LibLogo />
      </button>

      <div className="mr-3 flex gap-2 bg-auto">
        <Search />
        <ChangeThemeButton />
        <GithubButton />
      </div>
    </header>
  );
}
