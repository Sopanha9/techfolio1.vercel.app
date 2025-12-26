import { ThemeToggle } from '@/components/ThemeToggle';

export const HeaderActions = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 hidden min-h-0 min-w-0 gap-y-4 md:flex md:min-h-[auto] md:min-w-[auto]">
      <ThemeToggle />
      <a
        href="/contact"
        className="box-border caret-transparent inline min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]"
      >
        <button className="text-sm font-medium items-center bg-teal-500 caret-transparent inline-flex h-10 justify-center leading-5 text-center text-nowrap px-4 py-2 rounded-md hover:bg-teal-500/90">
          Contact Me
        </button>
      </a>
    </div>
  );
};
