import { CloseButton } from "../buttons";
type Props = {
  title: string;
  close: () => void;
};
export function TitleBar({ title, close }: Props) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <h3 className="text-2xl">{title}</h3>

      <CloseButton closeBasket={close} />
    </div>
  );
}
