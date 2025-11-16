import { NavLink } from "react-router";

function BarItem({ type, name, href = null }) {
  if (type === "title") {
    return (
      <div className="wdxl-lubrifont-sc-regular mt-3 mb-2 ml-1 text-lg font-bold opacity-50">
        {name}
      </div>
    );
  }

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `mb-0.5 block rounded-xl p-1 hover:bg-gray-500/20 ${
          isActive ? "bg-gray-500/20 " : "font-normal"
        }`
      }
    >
      <span className="ml-2 text-sm tracking-tight capitalize transition-colors duration-0">
        {name}
      </span>
    </NavLink>
  );
}
export default BarItem;
