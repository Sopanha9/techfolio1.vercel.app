import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutText = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`box-border caret-transparent flex flex-col justify-center transition-all duration-700 delay-200 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      <h3 className="text-2xl font-bold box-border caret-transparent leading-8 mb-4">
        Certified HVAC Specialist
      </h3>
      <p className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent mb-6">
        I&#39;m a certified AC technician with extensive experience in residential and commercial HVAC systems. My expertise includes installation, troubleshooting, repair, and preventive maintenance of all major AC brands and models.
      </p>
      <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(2,minmax(0px,1fr))] gap-y-4 mb-6">
        <div className="relative bg-neutral-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent border border-zinc-800 overflow-hidden rounded-lg border-solid">
          <div className="box-border caret-transparent p-4">
            <h4 className="font-semibold box-border caret-transparent">
              Certification
            </h4>
            <p className="text-zinc-400 dark:text-zinc-400 text-sm box-border caret-transparent leading-5">
              EPA Universal Certified
            </p>
          </div>
        </div>
        <div className="relative bg-neutral-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent border border-zinc-800 overflow-hidden rounded-lg border-solid">
          <div className="box-border caret-transparent p-4">
            <h4 className="font-semibold box-border caret-transparent">
              Experience
            </h4>
            <p className="text-zinc-400 dark:text-zinc-400 text-sm box-border caret-transparent leading-5">
              10+ Years
            </p>
          </div>
        </div>
        <div className="relative bg-neutral-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent border border-zinc-800 overflow-hidden rounded-lg border-solid">
          <div className="box-border caret-transparent p-4">
            <h4 className="font-semibold box-border caret-transparent">
              Installations
            </h4>
            <p className="text-zinc-400 dark:text-zinc-400 text-sm box-border caret-transparent leading-5">
              500+ Completed
            </p>
          </div>
        </div>
        <div className="relative bg-neutral-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent border border-zinc-800 overflow-hidden rounded-lg border-solid">
          <div className="box-border caret-transparent p-4">
            <h4 className="font-semibold box-border caret-transparent">
              Satisfaction
            </h4>
            <p className="text-zinc-400 dark:text-zinc-400 text-sm box-border caret-transparent leading-5">
              98% Rating
            </p>
          </div>
        </div>
      </div>
      <a
        href="/about"
        className="text-sm font-medium items-center bg-teal-500 box-border caret-transparent flex h-10 justify-center leading-5 text-nowrap px-4 py-2 rounded-md hover:bg-teal-500/90"
      >
        Learn More{" "}
        <img
          src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-2.svg"
          alt="Icon"
          className="box-border caret-transparent h-4 text-nowrap w-4 ml-2"
        />
      </a>
    </div>
  );
};
