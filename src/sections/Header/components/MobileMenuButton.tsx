export const MobileMenuButton = () => {
  return (
    <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:hidden md:min-h-0 md:min-w-0">
      <button
        type="button"
        className="text-sm font-medium items-center bg-transparent caret-transparent inline-flex h-10 justify-center leading-5 text-center text-nowrap w-10 p-0 rounded-md hover:text-zinc-950 hover:bg-amber-300"
      >
        <img
          src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-1.svg"
          alt="Icon"
          className="box-border caret-transparent h-5 text-nowrap w-5"
        />
      </button>
    </div>
  );
};
