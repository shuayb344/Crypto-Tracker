import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="p-4 bg-black min-h-screen text-white overflow-auto">
      <Header />
      <div className="sm:w-[80%] w-full mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
