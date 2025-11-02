"use client";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
type Props = {
  options: string[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};
export function Select({ options, value, setValue }: Props) {
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
  }, []);

  function handleClick(option: string) {
    setValue(option);

    setOpen(false);
  }
  return (
    <div ref={ref} className="relative w-full">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="border border-[#cecece] w-full justify-center flex items-center gap-x-2 py-2 px-5"
      >
        <span>{value}</span>
        <div
          className={`relative  w-2 h-2 border-t-1 border-r-1 border-black transform transition-transform duration-300 ${
            open ? "rotate-[-45deg]  top-0.5" : "rotate-[135deg] -top-0.5"
          }`}
        />
      </button>
      {open && (
        <ul className="absolute top-full left-0 w-full bg-white border border-[#cecece] flex flex-col items-center z-2">
          {options.map((option) => (
            <li
              key={option}
              className={`py-1 hover:bg-[var(--backgroundGrey)] w-full text-center cursor-pointer ${
                value === option ? "bg-[var(--backgroundGrey)]" : ""
              }`}
              onClick={() => handleClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
