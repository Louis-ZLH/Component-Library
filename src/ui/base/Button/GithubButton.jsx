import { useSelector } from "react-redux";

function GithubButton() {
  const theme = useSelector((state) => state.user.theme);
  return (
    <button
      onClick={() => {
        window.open("https://github.com/Louis-ZLH");
      }}
    >
      <img
        src={theme === "light" ? `/github-mark.svg` : `/github-mark-white.svg`}
        alt="GitHub"
        className="h-7.5 w-7.5 cursor-pointer transition hover:opacity-70"
      />
    </button>
  );
}
export default GithubButton;
