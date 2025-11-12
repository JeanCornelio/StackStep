import { CustomInput } from "@/components/custom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Filter, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const categories = [
  "Health",
  "Career",
  "Development",
  "Finance",
  "Relationships",
  "Hobbies",
];

const CATEGORY_INITIAL_STATE = "Category";

export const FilterGoal = () => {
  const [categorySelected, setCategorySelected] = useState(
    CATEGORY_INITIAL_STATE
  );
  const [filtering, Setfiltering] = useState(false);

  const form = useForm({
    defaultValues: {
      search: "",
    },
  });

  const filterAction = () => {
    Setfiltering(!filtering);
    form.reset();
    setCategorySelected(CATEGORY_INITIAL_STATE);
  };

  const searchWatch = form.watch("search");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchWatch.trim() === "") return;

      console.log("Search");
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [searchWatch]);

  return (
    <>
      {filtering && (
        <>
          <Form {...form}>
            <CustomInput
              placeholder="Search goals"
              name="search"
              control={form.control}
            />
          </Form>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <span
                  className={
                    CATEGORY_INITIAL_STATE === categorySelected
                      ? "text-gray-500"
                      : ""
                  }
                >
                  {categorySelected}
                </span>
                {CATEGORY_INITIAL_STATE !== categorySelected && (
                  <span
                    role="button"
                    onClick={() => setCategorySelected(CATEGORY_INITIAL_STATE)}
                  >
                    <X />
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit p-1">
              <div className="flex flex-col gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className="justify-start"
                    onClick={() => setCategorySelected(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </>
      )}

      <Button variant="outline" onClick={() => filterAction()}>
        {filtering ? <X /> : <Filter />}
      </Button>
    </>
  );
};
