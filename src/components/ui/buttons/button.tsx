interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  variant?: "primary" | "secondary";
  loading?: boolean;
}

export function Button({
  text,
  className,
  variant = "primary",
  loading,
  ...rest
}: Props) {
  const variants: Record<typeof variant, string> = {
    primary: ` hover:text-white  hover:bg-[var(--foreground)]  border-[#cecece] 
	  disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black disabled:cursor-not-allowed`,
    secondary: `bg-[var(--foreground)] text-white  hover:bg-transparent hover:text-[var(--foreground)] border-[var(--foreground)] hover:border-[#cecece] 
		disabled:opacity-50  disabled:hover:bg-[var(--foreground)] disabled:hover:text-white disabled:cursor-not-allowed`,
  };

  return (
    <>
      <button
        className={`py-5 w-full flex items-center justify-center 
		transition-all duration-500 ease-in-out border-1 ${variants[variant]}  ${
          className || ""
        } `}
        {...rest}
      >
        {loading ? (
          <span className="w-5 h-5 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></span>
        ) : (
          text
        )}
      </button>
    </>
  );
}
