import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";
import { EllipsisIcon, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import type { Goal } from "@/pages/goals/components/types/goal.interface";

const STATE_GOAL = {
  ACTIVE: "active",
};

export const GoalCardComponent = ({
  title,
  description,
  percent,
  state,
  id,
}: Goal) => {
  return (
    <article className=" border shadow-xs p-4 rounded-2xl bg-white flex flex-col gap-4">
      <div className="flex  justify-between ">
        {/* Header*/}
        <div>
          <h5 className="font-semibold text-sm ">{title}</h5>
          <h6 className="text-gray-400 text-xs">{description}</h6>
        </div>

        {/* Action */}
        <div>
          <Link to={`/goal-details/${id}`} viewTransition>
            <Button className="h-2 w-2" variant="ghost">
              <EllipsisIcon />
            </Button>
          </Link>
        </div>
      </div>

      {/* container Percent */}
      <span className="text-4xl font-bold text-gray-300">{percent}%</span>

      {/* Footer */}

      {state === STATE_GOAL.ACTIVE && (
        <div className="mt-auto ms-auto">
          <Badge variant="outline">
            Active <Flame className="text-amber-400" />
          </Badge>
        </div>
      )}
    </article>
  );
};
