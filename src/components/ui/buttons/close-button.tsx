import { memo } from "react";

type Props = {
  closeBasket: () => void;
};

export const CloseButton = memo(function CloseButton({ closeBasket }: Props) {
  return (
    <button type="button" className={` w-6 h-6`} onClick={closeBasket}>
      <span className="block relative w-full h-full hover:rotate-90 transform transition duration-200 ease-in-out">
        <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-black rotate-45 transform -translate-y-1/2" />
        <span className="absolute left-0 top-1/2 w-6 h-0.5 bg-black -rotate-45 transform -translate-y-1/2" />
      </span>
    </button>
  );
});
