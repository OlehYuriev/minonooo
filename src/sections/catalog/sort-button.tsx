import { Dispatch, SetStateAction } from "react";

type Props = {
  sortOrder: "asc" | "desc";
  setSortOrder: Dispatch<SetStateAction<"asc" | "desc">>;
  handleOpenFilter: () => void;
};
export function SortButton({
  setSortOrder,
  sortOrder,
  handleOpenFilter,
}: Props) {
  const handleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };
  return (
    <div className="flex gap-8">
      <button
        type="button"
        className="flex items-center gap-x-3 text-[#6f6f6f]"
        onClick={handleSort}
      >
        <span> Сортування</span>
        <div
          className={` relative  w-2.5 h-2.5 border-t-2 border-r-2 border-[#6f6f6f] transform transition-transform duration-300 ${
            sortOrder !== "asc"
              ? "rotate-[-45deg] top-0.5"
              : "rotate-[135deg] -top-0.5"
          }`}
        />
      </button>
      <button
        type="button"
        className="flex items-center gap-x-3 text-[#6f6f6f]"
        onClick={handleOpenFilter}
      >
        Фільтр
      </button>
    </div>
  );
}
