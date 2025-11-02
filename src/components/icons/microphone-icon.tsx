import { FC } from "react";

interface IconProps {
  stroke?: string;
  className?: string;
}

export const MicrophoneIcon: FC<IconProps> = ({
  stroke = "#2D2D2D",
  className = "size-6",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={stroke}
    className={`${className} transition-all duration-300 ease-in-out`}
  >
    <path
      strokeLinecap="round"
      d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
    />
  </svg>
);
