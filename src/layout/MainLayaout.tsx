import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SunIcon } from "lucide-react";

import { Outlet } from "react-router-dom";

export const MainLayaout = () => {
  return (
    <div className="bg-gray-50 h-screen flex flex-col gap-10">
      {/* Header */}
      <div className=" py-4 px-10  flex items-center  ">
        <nav className="  border bg-white flex justify-center rounded-4xl p-2 px-4 mx-auto ">
          <ul className="flex gap-4 ">
            <li className="cursor-pointer text-yellow-500 text-sm">Goals</li>
              <li className="text-gray-500 cursor-pointer text-sm">Documentation</li>
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

      <div className="h-screen flex justify-center">
        <div className="p-4">
          <Outlet />
        
        </div>
      </div>
    </div>
  );
};
