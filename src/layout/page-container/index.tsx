type Props = {
  children: React.ReactNode;
  className?: string;
};
export function PageContainer({ children, className }: Props) {
  return (
    <section
      className={`max-w-screen mx-auto px-5 margin-top-minus-header ${className}`}
    >
      {children}
    </section>
  );
}
