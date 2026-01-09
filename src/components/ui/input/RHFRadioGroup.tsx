"use client";
import Image from "next/image";
import { Controller, useFormContext } from "react-hook-form";
type Option = { value: string; label: string };
type Props = { name: string; options: Option[] };

export function RHFRadioGroup({ name, options }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col gap-5">
          {options.map((option) => {
            const checked = field.value === option.value;

            return (
              <label
                key={option.value}
                className="flex items-center gap-4 cursor-pointer "
              >
                <input
                  type="radio"
                  value={option.value}
                  checked={checked}
                  onChange={() => field.onChange(option.value)}
                  className="hidden"
                />
                <span className="w-5 h-5  border-2 flex items-center justify-center border-[#c4c4c4]">
                  {checked && (
                    /*   <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> */
                    /*   <img src="/ok.svg" alt="ok" /> */
                    <Image src="/ok.svg" alt="ok" width={16} height={12} />
                  )}
                </span>

                <span className="text-sm">{option.label}</span>
              </label>
            );
          })}
          {error && (
            <p className="text-red-500 mt-1 pointer-events-none">
              {error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}
