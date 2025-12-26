import { ProjectGrid } from "@/sections/ProjectsSection/components/ProjectGrid";

export const ProjectsContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[1400px] w-full mx-auto px-4">
      <div className="box-border caret-transparent">
        <h2 className="text-3xl font-bold box-border caret-transparent inline-block leading-9 mb-8 after:accent-auto after:bg-teal-500 after:box-border after:caret-transparent after:text-zinc-50 after:block after:text-3xl after:not-italic after:normal-nums after:font-bold after:h-1 after:tracking-[normal] after:leading-9 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:w-6/12 after:mt-2 after:rounded-full after:border-separate after:font-inter">
          Featured Projects
        </h2>
        <p className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent max-w-2xl mt-2">
          Explore some of my recent HVAC projects and service work.
        </p>
      </div>
      <ProjectGrid />
      <div className="box-border caret-transparent flex justify-center mt-10">
        <a
          href="/projects"
          className="text-sm font-medium items-center bg-teal-500 box-border caret-transparent flex h-10 justify-center leading-5 text-nowrap px-4 py-2 rounded-md hover:bg-teal-500/90"
        >
          View All Projects{" "}
          <img
            src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-2.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 text-nowrap w-4 ml-2"
          />
        </a>
      </div>
    </div>
  );
};
