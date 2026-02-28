import {
  CustomDatePicker,
  CustomInput,
  CustomSelect,
  CustomTextarea,
} from "@/components/custom";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";

import { postGoal } from "@/services/goals";
import { zodResolver } from "@hookform/resolvers/zod";

import { Plus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z
    .string()
    .min(1, "Description is required")
    .min(10, "Description should be at least 10 characters long"),
  totalHours: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Hour must be a positive number",
    }),
  categoryId: z.string().min(1, "Category is required"),
  dueDate: z.date({ message: "DueDate is required" }),
});


interface AppGoalProps {
  refreshGoals: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Array<{ label: string; value: string }>;
}

export const AddGoal = ({
  refreshGoals,
  setIsOpen,
  categories,
}:  AppGoalProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      totalHours: "",
      categoryId: "",
      dueDate: undefined,
    },
  });

  const reset = () => {
    refreshGoals();
    form.reset();
    setIsOpen(false);
    toast.success("Goal created successfully");
  };

  const onSubmit = async (formData: z.infer<typeof formSchema>) => {
    try {
      const newGoal = {
        ...formData,
        totalHours: Number(formData.totalHours),
      };

      await postGoal(newGoal);
      reset();
    } catch (error) {
      toast.error(
        `Error creating goal: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  };
  return (
    <>
      <Form {...form}>
        <CustomInput
          label="Title"
          placeholder="My goal title"
          name="title"
          control={form.control}
        />
        <CustomDatePicker
          label="Due date"
   
          placeholder="Select a due date"
          name="dueDate"
          control={form.control}
        />

        <CustomTextarea
          label="Description"
          placeholder="My goal description"
          name="description"
          control={form.control}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <CustomSelect
            data={categories || []}
            label="Category"
            placeholder="Select a category"
            name="categoryId"
            control={form.control}
          />

          <CustomInput
            label="Total Hours"
            placeholder="example: 120"
            name="totalHours"
            type="number"
            control={form.control}
          />
        </div>
      </Form>
      <DialogFooter className="sm:justify-end mt-5">
        <Button
          type="button"
          variant="secondary"
          onClick={() => setIsOpen(false)}
        >
          <X /> Close
        </Button>
        <DialogClose asChild>
          <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
            <Plus /> Create
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
};
