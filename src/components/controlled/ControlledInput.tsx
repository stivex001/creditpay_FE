/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import { useController, Control } from "react-hook-form";
import { cn } from "../../lib/utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDateRange } from "react-icons/md";
import { EyeIcon } from "@/assets/icons/MenuIcon";

type ControlledInputProps = {
  name: string;
  label: string;
  control?: Control<any>;
  rules?: { required: boolean; pattern?: RegExp; maxLength?: number };

  placeholder?: string;
  type?: string;
  method?: string;
  currency?: string;
  dontShowTime?: boolean;
  readOnly?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
} & React.ComponentProps<any>;

const ControlledInput: React.FC<ControlledInputProps> = ({
  label,
  name,
  control,
  rules,
  placeholder = "",
  type = "text",
  method,
  variant = "primary",
  dontShowTime = false,
  readOnly = false,
  ...props
}) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  });

  const baseStyles = "w-full h-10 border rounded-[10px] px-3";
  const styles = {
    primary: "border-[#A4BEFF]  focus:ring-[#A4BEFF]",
    secondary:
      "border border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500",
    tertiary:
      "border border-green-300 focus:border-green-500 focus:ring-green-500",
    invalid: "border-red-500 focus:border-red-500 focus:ring-red-500",
  };

  const inputClassName = cn(baseStyles, styles[variant as keyof typeof styles], {
    [styles.invalid]: invalid,
  });

  const datePickerRef = useRef<any>(null);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={`space-y-3`}>
      <label
        htmlFor={name}
        className={`text-xl font-medium capitalize text-[#142B71]`}
      >
        {label}
      </label>
      <div className={` flex items-center space-x-2 relative`}>
        {type === "date" ? (
          <div
            {...props}
            className={`${inputClassName} bg-[#F5F5F9] rounded-md flex items-center justify-between px-3 gap-3 cursor-pointer`}
          >
            <DatePicker
              selected={value}
              onChange={(date) => onChange(date)}
              dateFormat="dd.MM.yyyy"
              placeholderText={placeholder}
              className="bg-transparent w-full outline-none cursor-pointer"
              id={name}
              name={name}
              onBlur={onBlur}
              ref={datePickerRef}
              preventOpenOnFocus
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100}
            />
            <MdOutlineDateRange
              onClick={() => datePickerRef.current?.setOpen(true)}
              className="size-6"
            />
          </div>
        ) : (
          <input
            id={name}
            name={name}
            type={type === "password" && showPassword ? "text" : type}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            className={inputClassName}
            {...props}
            // readOnly={readOnly}
          />
        )}

        {type === "color" && (
          <div
            className="w-8 h-8 border rounded"
            style={{ backgroundColor: value || "#ffffff" }}
          />
        )}
        {type === "password" && (
          <div
            className="absolute right-0 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            <EyeIcon />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500 capitalize">{error.message}</p>
      )}
    </div>
  );
};

export default ControlledInput;
