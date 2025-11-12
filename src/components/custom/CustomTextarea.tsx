import type { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";

export interface CustomTextareaProps<T extends FieldValues> {
  label?: string;
  placeholder?: string;
  name: Path<T>;
  control: Control<T>;
}

export const CustomTextarea = <T extends FieldValues>({
  label,
  placeholder,
  name,
  control
}: CustomTextareaProps<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <FormControl>
            <Textarea
              {...field}
              placeholder={placeholder}
              autoComplete="off"
            />
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    ></FormField>
  );
};


