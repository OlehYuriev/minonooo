import { BasketSummary } from "@/components/basket/basket-summary";
import { OverlayPanel } from "@/components/ui/overlay-panel";
import { TitleBar } from "@/components/ui/title-bar";
import { Dispatch, SetStateAction } from "react";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  close: () => void;
  children: React.ReactNode;
  footerSummary?: boolean;
  title: string;
};
export function HeaderOverlayPanel({
  open,
  setOpen,
  close,
  footerSummary,
  title,
  children,
}: Props) {
  return (
    <OverlayPanel
      open={open}
      setOpen={setOpen}
      position="right"
      className={`w-full min-[500px]:w-3/4 md:w-2/4 lg:w-2/5`}
    >
      <div className="flex flex-col h-full">
        <TitleBar title={title} close={close} />
        <div className="flex-1 overflow-y-auto flex flex-col gap-y-10 ">
          {children}
        </div>
        {footerSummary && (
          <div className="pt-2">
            <BasketSummary />
          </div>
        )}
      </div>
    </OverlayPanel>
  );
}
