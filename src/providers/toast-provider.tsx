"use client";
import { ToastContainer } from "@/components/ui/toast";
import { createContext, useCallback, useState } from "react";
export type ToastPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export type ToastType = "success" | "error" | "info";
type Toast = {
  id: number;
  message: string;
  type?: ToastType;
  position?: ToastPosition;
};
type ToastContextType = {
  showToast: (
    message: string,
    type?: ToastType,
    position?: ToastPosition
  ) => void;
};
export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (
      message: string,
      type: ToastType = "success",
      position: ToastPosition = "bottom-right"
    ) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type, position }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
}
