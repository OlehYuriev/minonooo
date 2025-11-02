"use client";
import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 z-50">
      <motion.div
        className="w-40 h-1 bg-gray-200 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-[var(--foreground)]"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <p className="mt-4 text-gray-600 text-sm font-medium">Заватаження...</p>
    </div>
  );
}
