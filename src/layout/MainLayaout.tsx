import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";


export const MainLayaout = () => {

  return (
    <div className="bg-gray-50 h-screen flex flex-col gap-10">
      <Nav />
      <div className="h-screen ">
        <div className="p-4  max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
