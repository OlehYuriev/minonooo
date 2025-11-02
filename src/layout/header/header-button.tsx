import Image from "next/image";
import { memo } from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt: string;
  label: string;
  count?: number;
}

export const HeaderButton = memo(function HeaderButton({
  src,
  alt,
  label,
  count,
  ...rest
}: Props) {
  return (
    <button aria-label={label} className="relative h-8 w-8" {...rest}>
      <Image src={src} alt={alt} fill sizes="100%" />
      {typeof count === "number" && count > 0 && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-[var(--foreground)] font-extrabold text-white text-[0.6rem]  rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
});
