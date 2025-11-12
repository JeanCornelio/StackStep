import { CustomDialog } from "@/components/custom";
import { GoalCardComponent } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Filter, Rocket  } from "lucide-react";
import { AddGoal } from "./components/AddGoal";


export const GoalsPage = () => {
  return (
    <section>
      <div className="flex justify-between ">
        {/* title */}
        <div className="mb-5">
          <span className="text-3xl font-semibold">Goals</span>
          <p className="text-sm text-gray-400">
            Keep your goals aligned and your progress on track.
          </p>
        </div>

        {/* Tools button */}
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter />
          </Button>
          <CustomDialog 
            icon={Rocket} 
            buttonTitle="Create"
            title="Goal"
            description="administer your goals effectively"
            >
            <AddGoal />
          </CustomDialog>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-4  w-full">
        <GoalCardComponent />
        <GoalCardComponent />
        <GoalCardComponent />
        <GoalCardComponent />
      </div>
    </section>
  );
};
