"use client";

type Props = {
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
};
export function Toast({ type = "success", message, onClose }: Props) {
  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };
  return (
    <div>
      <div
        className={`px-6 py-3 text-white rounded shadow-lg ${colors[type]} relative`}
      >
        {message}

        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-white/70 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
