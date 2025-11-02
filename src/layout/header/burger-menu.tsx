"use client";
import { Navigation } from "@/components/ui/navigation";
import { OverlayPanel } from "@/components/ui/overlay-panel";
import { useState } from "react";

export function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onMouseDown={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        className="sm:hidden relative w-6 h-6 flex items-center justify-center focus:outline-none z-10"
        aria-label="Меню"
      >
        <span
          className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute w-6 h-0.5 bg-black transition-all duration-300 ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>

      <OverlayPanel
        open={open}
        setOpen={setOpen}
        position="left"
        className={` w-2/4`}
      >
        <Navigation />
      </OverlayPanel>
    </>
  );
}
