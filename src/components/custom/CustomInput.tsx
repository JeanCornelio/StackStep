import clsx from "clsx";
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form";
import { Input } from "../ui/input";

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
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) =>  (
          <div>
            {label && (
              <label
                htmlFor={name}
                className={clsx([
                  fieldState.error ? "text-red-500" : "",
                  "text-3xl",
                  "text-xs",
                ])}
              >
                {label}
              </label>
            )}

            <Input
              {...field}
              placeholder={placeholder}
              aria-invalid={fieldState.invalid}
              autoComplete="off"
              type={type}
            />
            {fieldState.invalid && (
              <span className="text-xs text-red-500 block">{fieldState.error?.message}</span>
            )}
          </div>
        )
      }
    ></Controller>
  );
};
