"use client";
import { ToastPosition, ToastType } from "@/providers/toast-provider";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Toast } from "./toast";

type ToastItem = {
  id: number;
  message: string;
  type?: ToastType;
  position?: ToastPosition;
};

export function ToastContainer({ toasts }: { toasts: ToastItem[] }) {
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

  return createPortal(
    <div>
      <AnimatePresence>
        {toasts.map((toast) => {
          const pos = toast.position ?? "bottom-right";
          return (
            <motion.div
              key={toast.id}
              className={`absolute ${positionClasses[pos]} space-y-2 z-90`}
              initial={{
                opacity: 0,
                y: positionClasses[pos].includes("top") ? -20 : 20,
              }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: positionClasses[pos].includes("top") ? -20 : 20,
              }}
              transition={{ duration: 0.3 }}
            >
              <Toast message={toast.message} type={toast.type} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>,
    document.body
  );
}
