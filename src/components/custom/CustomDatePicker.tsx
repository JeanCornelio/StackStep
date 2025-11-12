import {
  type Control,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props<T extends FieldValues> {
  control: Control<T>;
  placeholder: string;
  name: Path<T>;
  form: UseFormReturn<T>;
  label?: string;
}

export const CustomDatePicker = <T extends FieldValues>({
  control,
  placeholder,
  name,
  form,
  label,
}: Props<T>) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    //TODO: fix date being set to undefined on initial render
    form.setValue(name, date);

  }, [date]);

  return (
    <FormField
      name={name}
      control={control}
      render={({ field, fieldState }) => (
          <FormItem>
          
            {label && <FormLabel htmlFor={name} >{label}</FormLabel>}
            <FormControl>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className={clsx(
                      fieldState.error ? "border-red-500" : "",
                      "w-full justify-between font-normal"
                    )}
                  >
                    {date ? (
                      <span>{date.toLocaleDateString()}</span>
                    ) : (
                      <span className="text-gray-500">{placeholder}</span>
                    )}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    {...field}
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      field.onChange(date); //Delegate to react-hook-form
                      setDate(date);
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormMessage className="text-xs" />
          </FormItem>
        )}
    ></FormField>
  );
};
