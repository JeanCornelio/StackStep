import { type Control, type FieldValues, type Path } from "react-hook-form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface Props<T extends FieldValues> {
  control: Control<T>;
  placeholder: string;
  name: Path<T>;
  label?: string;
  data: Array<{ label: string; value: string }>;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const CustomSelect = <T extends FieldValues>({
  control,
  placeholder,
  name,
  data = [],
  label,
  onChange,
  disabled = false,
}: Props<T>) => {
  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

          <Select disabled={disabled} value={field.value} onValueChange={(value) => { field.onChange(value);
            onChange?.(value);
           }}>
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                {data.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FormMessage className="text-xs" />
        </FormItem>
      )}
    ></FormField>
  );
};
