import Link from "next/link";

type Props = {
  link: string;
  title: string;
};
export function AuthRedirectLink({ link, title }: Props) {
  return (
    <div className="mt-5 text-center">
      <Link href={link} className=" hover:opacity-60 transition-all">
        {title}
      </Link>
    </div>
  );
}
