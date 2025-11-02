import { useEffect, useRef } from "react";

type UseClickOutsideAndEscapeCloseProps = {
  onClose: () => void;
  active: boolean;
};

export function useClickOutsideAndEscapeClose({
  onClose,
  active,
}: UseClickOutsideAndEscapeCloseProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!active) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, onClose]);

  return ref;
}
