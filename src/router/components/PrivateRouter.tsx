

import { Button } from "@/components/ui/button";
import type { JSX } from "react";
import { Link } from "react-router-dom";


export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  return   <article className="flex items-center justify-center h-screen relative">
      <div className=" p-10 rounded-2xl  h-fit border shadow  bg-white ">
         {children}
          <Link to={"/"}>
          <Button  className="mt-4">Back to home</Button>
        </Link>
         </div>
         
    </article>
};
