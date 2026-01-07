"use client";

import { Navigation } from "@/components/ui/navigation";
import { useEffect, useRef, useState } from "react";
export function FooterNav() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const [maxHeight, setMaxHeight] = useState<string | undefined>("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);
  return (
    <div className="sm:block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center sm:justify-start gap-x-4 w-full sm:cursor-default sm:pointer-events-none"
      >
        <h4 className="text-lg font-medium mb-2 sm:mb-6">Меню</h4>

        <div
          className={` relative sm:hidden w-2.5 h-2.5 border-t-2 border-r-2 border-black transform transition-transform duration-300 ${
            isOpen ? "rotate-[-45deg]  -top-0.5" : "rotate-[135deg] -top-1.5"
          }`}
        />
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-500 sm:max-h-none sm:overflow-visible sm:transition-none text-center"
        style={{
          maxHeight: maxHeight,
        }}
      >
        <Navigation flexCol={true} />
      </div>
    </div>
  );
}
