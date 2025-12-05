import { ToastPosition, ToastType } from "@/providers/toast-provider";

type ToastFn = (
  message: string,
  type?: ToastType,
  position?: ToastPosition
) => void;

let toastHandler: ToastFn | null = null;

export function registerToast(fn: ToastFn) {
  toastHandler = fn;
}

export function toast(
  message: string,
  type: ToastType = "success",
  position: ToastPosition = "bottom-right"
) {
  if (!toastHandler) {
    console.warn("ToastProvider ещё не инициализирован");
    return;
  }

  toastHandler(message, type, position);
}
