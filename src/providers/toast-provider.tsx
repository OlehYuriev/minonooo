"use client";
import { ToastContainer } from "@/components/ui/toast";
import { registerToast } from "@/utils/toast";
import { createContext, useCallback, useEffect, useState } from "react";
export type ToastPosition =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export type ToastType = "success" | "error" | "info";
type Toast = {
  id: string;
  message: string;
  type?: ToastType;
  position?: ToastPosition;
};
type ToastContextType = {
  showToast: (
    message: string,
    type?: ToastType,
    position?: ToastPosition,
  ) => void;
};
const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (
      message: string,
      type: ToastType = "success",
      position: ToastPosition = "bottom-right",
    ) => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { id, message, type, position }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3000);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  useEffect(() => {
    registerToast(showToast);
  }, [showToast]);
  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}
