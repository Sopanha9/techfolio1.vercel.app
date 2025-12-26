import { AboutImage } from "@/sections/AboutSection/components/AboutImage";
import { AboutText } from "@/sections/AboutSection/components/AboutText";

export const AboutContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[1400px] w-full mx-auto px-4">
      <div className="box-border caret-transparent">
        <h2 className="text-3xl font-bold box-border caret-transparent inline-block leading-9 mb-8 after:accent-auto after:bg-teal-500 after:box-border after:caret-transparent after:text-zinc-50 after:block after:text-3xl after:not-italic after:normal-nums after:font-bold after:h-1 after:tracking-[normal] after:leading-9 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:w-6/12 after:mt-2 after:rounded-full after:border-separate after:font-inter">
          About Me
        </h2>
        <p className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent max-w-2xl mt-2">
          A dedicated HVAC professional committed to keeping your home or business comfortable year-round.
        </p>
      </div>
      <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mt-10 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
        <AboutImage />
        <AboutText />
      </div>
    </div>
  );
};
