import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

import { SunIcon } from "lucide-react";

import { NavLink, Outlet } from "react-router-dom";
interface Routes {
  id: number;
  path: string;
  name: string;
}

const routes = [
  {
    id: 1,
    path: "/goals",
    name: "Goals",
  },
  {
    id: 2,
    path: "/documentation",
    name: "Documentation",
  },
];

export const MainLayaout = () => {
  return (
    <div className="bg-gray-50 h-screen flex flex-col gap-10">
      {/* Header */}
      <div className=" py-4 px-4 xl:px-10  flex items-center  ">
        <nav className="  border bg-white flex justify-center rounded-4xl p-2 px-4 mx-auto ">
          <ul className="flex gap-4 ">
            {routes.map((route: Routes) => (
              <NavLink
                key={route.id}
                to={route.path}
                className={({ isActive }) =>
                  clsx(
                    isActive ? "text-yellow-500" : "text-gray-500",
                    "text-sm"
                  )
                }
              >
                {route.name}
              </NavLink>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button className="rounded-full size-9" variant="outline">
            <SunIcon />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {/* Header */}

      <div className="h-screen ">
        <div className="p-4  max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
