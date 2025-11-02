type Props = {
  title: string;
  children: React.ReactNode;
};

export function AuthLayout({ children, title }: Props) {
  return (
    <section className=" h-full mx-auto px-5 margin-top-minus-header flex items-center justify-center">
      <div className="w-full mx-auto flex flex-col items-center">
        <h1 className="text-2xl font-medium mb-5 text-center">{title}</h1>

        {children}
      </div>
    </section>
  );
}
