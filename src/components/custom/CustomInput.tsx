
import {
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";
import { Input } from "../ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  placeholder: string;
  name: Path<T>;
  type?: string;
  label?: string;
}

export const CustomInput = <T extends FieldValues>({
  control,
  placeholder,
  name,
  type = "text",
  label,
}: Props<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className="bg-white"
              autoComplete="off"
              type={type}
            />
          </FormControl>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    ></FormField>
  );
};
