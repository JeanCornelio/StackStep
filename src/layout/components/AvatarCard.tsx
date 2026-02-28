import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUserStore } from "@/lib/storage";
import { useAuth } from "@/pages/auth/hooks/useAuth";

import { LogOut, User2 } from "lucide-react";

export const AvatarCard = () => {
  const { username, email } = useUserStore();
  const {logOut} = useAuth();
  return (
    <Popover>
      <PopoverTrigger asChild className="cursor-pointer">
        <Avatar>
          <AvatarImage src="" alt="@shadcn" />
          <AvatarFallback className="border text-gray-300">
            <User2 />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-fit mx-10">
        <div className="grid gap-2">
          <h4 className="leading-none font-bold">{username}</h4>

          <div className="grid gap-2">
            <span className="text-sm">{email}</span>
          </div>
        </div>
          <Button className=" w-full mt-2" onClick={logOut}>
            Log out
          <LogOut/>
        </Button>
      </PopoverContent>
    </Popover>
  );
};
