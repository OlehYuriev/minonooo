import { ToastContext } from "@/providers/toast-provider";
import { useContext } from "react";

export function useToast() {
  const context = useContext(ToastContext);
  if (!context)
    throw new Error("useToast Поаинен використовуватись в <ToastProvider>");
  return context;
}
