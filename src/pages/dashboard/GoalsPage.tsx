import { GoalCardComponent } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Filter, Rocket } from "lucide-react";

export const GoalsPage = () => {
  return (
    <section>
      <div className="flex justify-between items-center">
        {/* title */}
      <div className="mb-5">

      <span className="text-3xl font-semibold">Goals</span>
      <p className="text-sm text-gray-400">Keep your goals aligned and your progress on track.</p>
      
      </div>

        {/* Tools button */}
      <div className="flex gap-2">

          <Button variant="outline">
              <Filter/>            
            </Button>      

          <Button>
            <Rocket/> Create Goal
          </Button>
      </div>
      </div>
    

      <div className="grid grid-cols-1 sm:grid-cols-2  2xl:grid-cols-3 gap-4">
        <GoalCardComponent />
        <GoalCardComponent />
        <GoalCardComponent />
        <GoalCardComponent />
      </div>
    </section>
  );
};
