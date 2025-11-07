import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { EllipsisIcon, Flame } from "lucide-react";

export const GoalCardComponent = () => {
  return (
    <article className=" border shadow-xs p-4 rounded-2xl bg-white flex flex-col gap-4">
      <div className="flex  justify-between ">
        {/* Header*/}
        <div>
          <h5 className="font-semibold text-sm ">Lern about nestJS</h5>
          <h6 className="text-gray-400 text-xs">
            Dominar los conceptos básicos y crear una API con NestJS
          </h6>
        </div>

        {/* Action */}
        <div>
          <Button className="h-2 w-2" variant="ghost">
            <EllipsisIcon/>
          </Button>
        </div>
      </div>

      {/* container Percent */}
      <span className="text-4xl font-bold text-gray-300">80%</span>

      {/* Footer */}
      <div className="mt-auto ms-auto">
        <Badge variant="outline">Active <Flame className="text-amber-400"/></Badge>
      </div>
    </article>
  );
};
