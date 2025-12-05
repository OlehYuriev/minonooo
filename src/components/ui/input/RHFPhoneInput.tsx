"use client";
import { Controller, useFormContext } from "react-hook-form";
import { IMaskInput } from "react-imask";

type Props = { name: string };

export function RHFPhoneInput({ name }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="relative">
          <IMaskInput
            {...field}
            ref={field.ref}
            mask="+{380} (00) 000-00-00"
            unmask={false}
            onAccept={(value: string) => field.onChange(value)}
            value={field.value}
            placeholder="+380 (__) ___-__-__"
            className={`border-b w-full py-1.5 text-sm focus:outline-none ${
              error ? "border-red-500" : "border-[#dadada]"
            }`}
          />
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
