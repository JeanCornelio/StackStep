import {
  CustomDatePicker,
  CustomInput,
  CustomSelect,
  CustomTextarea,
} from "@/components/custom";

import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  totalHours: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Hour must be a positive number",
    }),
  category: z.string().min(1, "Category is required"),
  dueDate: z.date({ message: "DueDate is required" }),
});

export const AddGoal = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      totalHours: "",
      category: "",
      dueDate: undefined,
    },
  });

  console.log(form.getValues());
  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    console.log(formData);
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
          form={form}
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
            data={[
              { label: "Health", value: "Health-123" },
              { label: "Productivity", value: "Productivity-123" },
            ]}
            label="Category"
            placeholder="Select a category"
            name="category"
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
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            <X /> Close
          </Button>
        </DialogClose>
        <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
          <Plus /> Create
        </Button>
      </DialogFooter>
    </>
  );
};
