import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const SkillsGrid = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();
  const { ref: ref3, isVisible: isVisible3 } = useScrollAnimation();
  
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mt-10 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <div 
        ref={ref1}
        className={`box-border caret-transparent transition-all duration-700 ${
          isVisible1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="bg-neutral-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent border border-zinc-800 rounded-lg border-solid">
          <div className="box-border caret-transparent p-6">
            <h3 className="text-xl font-bold box-border caret-transparent leading-7 mb-4">
              HVAC Expertise
            </h3>
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent flex justify-between mb-1">
                  <span className="box-border caret-transparent block">
                    AC Installation
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent block">
                    10/10
                  </span>
                </div>
                <div className="relative bg-zinc-800 dark:bg-zinc-700 box-border caret-transparent h-2 overflow-hidden rounded-full">
                  <div className="absolute bg-teal-500 box-border caret-transparent h-full w-full rounded-full left-0 top-0"></div>
                </div>
              </div>
              <div className="box-border caret-transparent mt-4">
                <div className="box-border caret-transparent flex justify-between mb-1">
                  <span className="box-border caret-transparent block">
                    Troubleshooting
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent block">
                    10/10
                  </span>
                </div>
                <div className="relative bg-zinc-800 dark:bg-zinc-700 box-border caret-transparent h-2 overflow-hidden rounded-full">
                  <div className="absolute bg-teal-500 box-border caret-transparent h-full w-full rounded-full left-0 top-0"></div>
                </div>
              </div>
              <div className="box-border caret-transparent mt-4">
                <div className="box-border caret-transparent flex justify-between mb-1">
                  <span className="box-border caret-transparent block">
                    Refrigeration
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent block">
                    9/10
                  </span>
                </div>
                <div className="relative bg-zinc-800 dark:bg-zinc-700 box-border caret-transparent h-2 overflow-hidden rounded-full">
                  <div className="absolute bg-teal-500 box-border caret-transparent h-full w-[90%] rounded-full left-0 top-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        ref={ref2}
        className={`box-border caret-transparent transition-all duration-700 delay-150 ${
          isVisible2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="bg-neutral-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent border border-zinc-800 rounded-lg border-solid">
          <div className="box-border caret-transparent p-6">
            <h3 className="text-xl font-bold box-border caret-transparent leading-7 mb-4">
              System Knowledge
            </h3>
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent flex justify-between mb-1">
                  <span className="box-border caret-transparent block">
                    Split Systems
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent block">
                    10/10
                  </span>
                </div>
                <div className="relative bg-zinc-800 dark:bg-zinc-700 box-border caret-transparent h-2 overflow-hidden rounded-full">
                  <div className="absolute bg-teal-500 box-border caret-transparent h-full w-full rounded-full left-0 top-0"></div>
                </div>
              </div>
              <div className="box-border caret-transparent mt-4">
                <div className="box-border caret-transparent flex justify-between mb-1">
                  <span className="box-border caret-transparent block">
                    Central AC
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent block">
                    10/10
                  </span>
                </div>
                <div className="relative bg-zinc-800 dark:bg-zinc-700 box-border caret-transparent h-2 overflow-hidden rounded-full">
                  <div className="absolute bg-teal-500 box-border caret-transparent h-full w-full rounded-full left-0 top-0"></div>
                </div>
              </div>
              <div className="box-border caret-transparent mt-4">
                <div className="box-border caret-transparent flex justify-between mb-1">
                  <span className="box-border caret-transparent block">
                    Heat Pumps
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent block">
                    9/10
                  </span>
                </div>
                <div className="relative bg-zinc-800 dark:bg-zinc-700 box-border caret-transparent h-2 overflow-hidden rounded-full">
                  <div className="absolute bg-teal-500 box-border caret-transparent h-full w-[90%] rounded-full left-0 top-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div 
        ref={ref3}
        className={`box-border caret-transparent transition-all duration-700 delay-300 ${
          isVisible3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="bg-neutral-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent border border-zinc-800 rounded-lg border-solid">
          <div className="box-border caret-transparent p-6">
            <h3 className="text-xl font-bold box-border caret-transparent leading-7 mb-4">
              Professional Skills
            </h3>
            <div className="box-border caret-transparent">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent flex justify-between mb-1">
                  <span className="box-border caret-transparent block">
                    Customer Service
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent block">
                    10/10
                  </span>
                </div>
                <div className="relative bg-zinc-800 dark:bg-zinc-700 box-border caret-transparent h-2 overflow-hidden rounded-full">
                  <div className="absolute bg-teal-500 box-border caret-transparent h-full w-full rounded-full left-0 top-0"></div>
                </div>
              </div>
              <div className="box-border caret-transparent mt-4">
                <div className="box-border caret-transparent flex justify-between mb-1">
                  <span className="box-border caret-transparent block">
                    Time Management
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent block">
                    9/10
                  </span>
                </div>
                <div className="relative bg-zinc-800 dark:bg-zinc-700 box-border caret-transparent h-2 overflow-hidden rounded-full">
                  <div className="absolute bg-teal-500 box-border caret-transparent h-full w-[90%] rounded-full left-0 top-0"></div>
                </div>
              </div>
              <div className="box-border caret-transparent mt-4">
                <div className="box-border caret-transparent flex justify-between mb-1">
                  <span className="box-border caret-transparent block">
                    Safety Compliance
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent block">
                    10/10
                  </span>
                </div>
                <div className="relative bg-zinc-800 dark:bg-zinc-700 box-border caret-transparent h-2 overflow-hidden rounded-full">
                  <div className="absolute bg-teal-500 box-border caret-transparent h-full w-full rounded-full left-0 top-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
