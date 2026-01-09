"use client";
import { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
type Option = { label: string; value: string };
type Props = { name: string; options: Option[]; placeholder: string };

export function RHFAutocomplete({ name, options, placeholder }: Props) {
  const { control } = useFormContext();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const filteredOptions = options.filter((option) =>
          option.label.toLowerCase().includes(query.toLowerCase())
        );
        return (
          <div className="relative">
            <input
              value={query}
              placeholder={placeholder}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
                field.onChange(null);
              }}
              className={`w-full border-b py-1.5 text-sm outline-none ${
                error ? "border-red-500" : "border-[#dadada]"
              }`}
            />
            {/* Dropdown */}
            {query && open && filteredOptions.length > 0 && (
              <div
                ref={ref}
                className="absolute z-10  w-full border-b border-l border-r border-[#dadada] bg-white shadow 
				  flex flex-col max-h-40 overflow-y-auto"
              >
                {filteredOptions.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => {
                      field.onChange(option);
                      setQuery(option.label);
                      setOpen(false);
                    }}
                    className="hover:bg-gray-100 transition-all p-1.5 w-full  text-start"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
            {error && (
              <p className="text-red-500 mt-1 pointer-events-none">
                {error.message}
              </p>
            )}
          </div>
        );
      }}
    />
  );
}
