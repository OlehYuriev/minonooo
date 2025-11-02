type Props = {
  prev: string;
  next: string;
};
export function ButtonSlider({ prev, next }: Props) {
  return (
    <>
      <button
        type="button"
        className={` absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white bg-black/40 hover:bg-black 
			p-3 rounded-full cursor-pointer  md:block hidden ${prev}`}
      >
        ◀
      </button>
      <button
        type="button"
        className={` absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white
			 bg-black/40 hover:bg-black p-3 rounded-full cursor-pointer  md:block hidden ${next}`}
      >
        ▶
      </button>
    </>
  );
}
