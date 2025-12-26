export const HeroContent = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex flex-col justify-center max-w-[1400px] min-h-[900px] w-full z-10 mx-auto px-4 py-20 md:py-32">
      <div className="box-border caret-transparent max-w-screen-md text-center mx-auto animate-fade-in">
        <h2 className="text-teal-500 text-3xl font-bold box-border caret-transparent leading-9 mb-4 md:text-4xl md:leading-10 animate-slide-up">
          Professional AC Technician
        </h2>
        <h1 className="text-5xl font-bold box-border caret-transparent tracking-[-1.2px] leading-[48px] md:text-7xl md:tracking-[-1.8px] md:leading-[72px] animate-slide-up animation-delay-200">
          <span className="text-transparent text-5xl bg-clip-text bg-[linear-gradient(to_right,rgb(31,173,147),rgb(122,81,205),rgb(246,182,81))] box-border tracking-[-1.2px] leading-[48px] md:text-7xl md:tracking-[-1.8px] md:leading-[72px]">
            Mike Johnson&#39;s
          </span>
          Portfolio
        </h1>
        <p className="text-zinc-400 dark:text-zinc-400 text-xl box-border caret-transparent leading-7 max-w-2xl mt-6 mx-auto md:text-2xl md:leading-8 animate-slide-up animation-delay-400">
          Expert HVAC installation, repair, and maintenance services with over 10 years of experience.
        </p>
        <div className="box-border caret-transparent gap-x-4 flex flex-wrap justify-center gap-y-4 mt-10 animate-slide-up animation-delay-600">
          <a
            href="/projects"
            className="text-sm font-medium items-center bg-teal-500 box-border caret-transparent flex h-11 justify-center leading-5 text-nowrap px-8 rounded-md hover:bg-teal-500/90"
          >
            View Projects{" "}
            <img
              src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-2.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 text-nowrap w-4 ml-2"
            />
          </a>
          <a
            href="#"
            className="text-sm font-medium items-center bg-zinc-950 box-border caret-transparent flex h-11 justify-center leading-5 text-nowrap border border-zinc-800 px-8 rounded-md border-solid hover:text-zinc-950 hover:bg-amber-300"
          >
            Download CV{" "}
            <img
              src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-3.svg"
              alt="Icon"
              className="box-border caret-transparent h-4 text-nowrap w-4 ml-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
