import { Outlet } from "react-router";
import Header from "./Header";
import ScrollManager from "../../ScrollManager";

export function AppLayout() {
  return (
    <>
      <ScrollManager />
      <div className="flex h-screen flex-col items-center overflow-hidden bg-gray-50">
        <Header />
        <div className="w-full flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}
