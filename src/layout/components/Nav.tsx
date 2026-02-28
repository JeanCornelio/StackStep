import type { Routes } from "../interfaces/nav.interface";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { SunIcon } from "lucide-react";
import routes from "../consts/nav";
import { AvatarCard } from "./AvatarCard";

export const Nav = () => {
  return (
    <div className=" py-4 px-4 xl:px-10  flex items-center  ">
      <nav className="  border bg-white flex justify-center rounded-4xl p-2 px-4 mx-auto ">
        <ul className="flex gap-4 ">
          {routes.map((route: Routes) => (
            <NavLink
              key={route.id}
              to={route.path}
              className={({ isActive }) =>
                clsx(isActive ? "text-yellow-500" : "text-gray-500", "text-sm")
              }
            >
              {route.name}
            </NavLink>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-1">
        <Button className="rounded-full size-8 " variant="outline">
          <SunIcon />
        </Button>
        <AvatarCard/>
      </div>
    </div>
  );
};
