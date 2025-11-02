"use client";

import { useClickOutsideAndEscapeClose } from "@/hooks/use-click-outside-close";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createPortal } from "react-dom";
type Props = {
  children: React.ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  className?: string;
  type?: "modal" | "drawer";
  position?: "left" | "right" | "center";
};

export function OverlayPanel({
  children,
  open,
  setOpen,
  className = "",
  type = "drawer",
  position = "left",
}: Props) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const panelRef = useClickOutsideAndEscapeClose({
    onClose: () => setOpen(false),
    active: open,
  });

  useEffect(() => {
    setPortalRoot(document.getElementById("container"));
  }, []);

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  if (!portalRoot) return null;

  const getPanelClasses = () => {
    if (type === "modal") {
      return `fixed bg-[#fbfbfa] z-[9] transition-all duration-300 ease-in-out py-9 px-8 w-4/5 sm:w-auto
        overflow-y-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        ${
          open ? "scale-100 opacity-100 visible" : "scale-0 opacity-0 invisible"
        }`;
    }

    const positionClass =
      position === "left"
        ? open
          ? "left-0"
          : "-left-full"
        : position === "right"
        ? open
          ? "right-0"
          : "-right-full"
        : "";

    return `fixed bg-[#fbfbfa] top-14 z-[9] transition-all duration-300 ease-in-out pt-9 pb-5 px-8
      overflow-y-auto ${positionClass} ${className} height-minus-header`;
  };

  return createPortal(
    <>
      {open && (
        <div
          className="fixed w-full h-full bg-black opacity-50 inset-0 z-[8]"
          onClick={() => setOpen(false)}
        />
      )}
      <div ref={panelRef} className={getPanelClasses()}>
        {children}
      </div>
    </>,
    portalRoot
  );
}
