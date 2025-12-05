"use client";
import { EyeICon, EyeOff } from "@/components/icons/eye";
import { forwardRef, useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholderIcon?: React.ReactNode;
  type?: string;
  className?: string;
  error?: string | null;
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholderIcon, type = "text", className, error, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType =
      type === "password" ? (showPassword ? "text" : "password") : type;

    const classEyeicon = " w-[1.3rem] h-[1.3rem] cursor-pointer";
    return (
      <div className="relative">
        <input
          ref={ref}
          type={inputType}
          className={`border-b  w-full  ${
            placeholderIcon ? "pl-6" : ""
          } py-1.5 text-sm focus:outline-none ${className} ${
            error ? "border-red-500" : "border-[#dadada]"
          }`}
          {...rest}
        />

        {placeholderIcon && (
          <div className="absolute  top-1/2 -translate-y-1/2 pointer-events-none">
            {placeholderIcon}
          </div>
        )}
        {error && (
          <p className="text-red-500 mt-1 pointer-events-none ">{error}</p>
        )}
        {type === "password" && (
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-4 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className={classEyeicon} />
            ) : (
              <EyeICon className={classEyeicon} />
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
