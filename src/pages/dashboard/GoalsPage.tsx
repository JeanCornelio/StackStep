import { CustomDialog } from "@/components/custom";
import { GoalCardComponent } from "@/components/shared";

import { Rocket } from "lucide-react";

import { FilterGoal, AddGoal } from "./components";

export const GoalsPage = () => {
  return (
    <section className="flex flex-col gap-5">
      {/* title */}
      <div className="flex justify-between items-center">
        <div className="mb-2">
          <span className="text-3xl font-semibold">Goals</span>
          <p className="text-sm text-gray-400">
            Keep your goals aligned and your progress on track.
          </p>
        </div>
        <CustomDialog
          icon={Rocket}
          buttonTitle="Create"
          title="Goal"
          description="administer your goals effectively"
        >
          <AddGoal />
        </CustomDialog>
      </div>

      {/* Tools button */}
      <div className="flex gap-2 ms-auto">
        <FilterGoal />
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
