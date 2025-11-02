"use client";

type Props = {
  message: string;
  type?: "success" | "error" | "info";
};
export function Toast({ type = "success", message }: Props) {
  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };
  return (
    <div>
      <div className={`px-4 py-2 text-white rounded shadow-lg ${colors[type]}`}>
        {message}
      </div>
    </div>
  );
}
