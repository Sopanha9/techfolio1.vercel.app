export const FooterBottom = () => {
  return (
    <div className="text-sm items-center box-border caret-transparent flex flex-col justify-between leading-5 md:flex-row">
      <p className="text-zinc-400 box-border caret-transparent">
        © 2025 Engineering Portfolio. All rights reserved.
      </p>
      <div className="box-border caret-transparent gap-x-4 flex gap-y-4 mt-4 md:mt-0">
        <a
          href="/privacy"
          className="text-zinc-400 box-border caret-transparent block hover:text-teal-500"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="text-zinc-400 box-border caret-transparent block hover:text-teal-500"
        >
          Terms of Service
        </a>
      </div>
    </div>
  );
};
