"use client";
import { ToastPosition, ToastType } from "@/providers/toast-provider";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Toast } from "./toast";

type ToastItem = {
  id: string;
  message: string;
  type?: ToastType;
  position?: ToastPosition;
};
type Props = {
  toasts: ToastItem[];
  removeToast: (id: string) => void;
};
export function ToastContainer({ toasts, removeToast }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
  };

  const grouped = toasts.reduce<Record<ToastPosition, ToastItem[]>>(
    (acc, toast) => {
      const pos = toast.position ?? "bottom-right";
      acc[pos] = acc[pos] ? [...acc[pos], toast] : [toast];
      return acc;
    },
    {} as Record<ToastPosition, ToastItem[]>
  );

  return createPortal(
    <>
      {Object.keys(positionClasses).map((position) => {
        const pos = position as ToastPosition;
        const items = grouped[pos] ?? [];

        return (
          <div
            key={pos}
            className={`fixed ${positionClasses[pos]} flex flex-col gap-2 z-90`}
          >
            <AnimatePresence presenceAffectsLayout>
              {items.slice(-4).map((toast) => (
                <motion.div
                  layout
                  key={toast.id}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: pos.includes("top") ? -20 : 20,
                  }}
                  transition={{
                    y: { type: "spring", stiffness: 700, damping: 30 },
                    opacity: { duration: 0.15 },
                  }}
                >
                  <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        );
      })}
    </>,
    document.body
  );
}
