import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  active: boolean;
  title: string;
}
export function IconToggleButton({ children, active, title, ...rest }: Props) {
  return (
    <button
      aria-label={title}
      className={`relative h-9 w-9 ${
        active ? "bg-[var(--foreground)]" : "bg-gray-300"
      }  rounded-4xl flex items-center justify-center hover:opacity-70 transition-all duration-300 ease-in-out`}
      {...rest}
    >
      {children}
    </button>
  );
}
