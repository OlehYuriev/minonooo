type Props = {
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function AuthForm({ children, handleSubmit }: Props) {
  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-md w-full  flex flex-col gap-y-5 "
    >
      {children}
    </form>
  );
}
