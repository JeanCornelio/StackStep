import { CustomDialog } from "@/components/custom";

import { Rocket } from "lucide-react";

import {
  FilterGoal,
  AddGoal,
  GoalCardComponent,
  SkeletonGoalPage,
} from "./components";
import { useQuery } from "@tanstack/react-query";
import { fetchGoals } from "@/services/goals";

import { useMemo, useState } from "react";
import { CustomPaginator } from "@/components/custom/CustomPaginator";
import type { Goal } from "./components/types/goal.interface";
import { fetchCategoriesDropdown } from "@/services/category";

export interface PaginationParams {
  page: number;
  size: number;
}

export interface SearchParams {
  term?: string | null;
  categoryId?: string | null;
}

const initalParams = {
  page: 1,
  size: 10,
};

const initialSearchParams = {
  term: null,
  categoryId: null,
};

export const GoalsPage = () => {
  const [params, setParams] = useState<PaginationParams>(initalParams);
  const [searchParams, setSearchParams] =
    useState<SearchParams>(initialSearchParams);
  const [isOpen, setIsOpen] = useState(false);

  const {
    error,
    data: goals,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["goals", params, searchParams],
    queryFn: () => fetchGoals({ ...params, ...searchParams }),
  });

  const { data: categories } = useQuery({
    queryKey: ["Categories_Dropdown"],
    queryFn: () => fetchCategoriesDropdown(),
  });

  const memoCategories = useMemo(() => categories || [], [categories]);

  if (error) {
    return <div>Error loading goals</div>;
  }

  return (
    <section className="flex flex-col gap-8">
      {/* title */}
      <div className="flex justify-between items-center">
        <div className="mb-2">
          <span className="text-3xl font-semibold">Goals</span>
          <p className="text-sm text-gray-400">
            Keep your goals aligned and your progress on track.
          </p>
        </div>
        <div className="flex justify-end items-center gap-4">
          <div className="flex gap-2 ">
            {goals?.data.length > 0 && (
            <FilterGoal
              categories={memoCategories}
              setSearchParams={setSearchParams}
            />)
}   
          </div>
          <CustomDialog
            icon={Rocket}
            buttonTitle="Create"
            title="Goal"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            description="administer your goals effectively"
          >
            <AddGoal
              refreshGoals={refetch}
              setIsOpen={setIsOpen}
              categories={categories || []}
            />
          </CustomDialog>
        </div>
      </div>

      {isLoading ? (
        <SkeletonGoalPage />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-4  w-full h-fit">
            {goals.data.length === 0 && (
              <div className="col-span-full text-center text-gray-400">
                No goals found. Create your first goal!
              </div>
            )}
            {goals.data?.map((goal: Goal) => (
              <GoalCardComponent key={goal.id} {...goal} />
            ))}
          </div>

          {goals.data.length > 0 && (
            <div className="mt-20">
              <CustomPaginator
                totalItems={goals.total}
                size={params.size}
                page={params.page}
                onParamsChange={(page, size) => setParams({ page, size })}
              />
            </div>
          )}
        </>
      )}
    </section>
  );
};
