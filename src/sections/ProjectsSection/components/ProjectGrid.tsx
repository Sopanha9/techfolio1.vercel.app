import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ProjectGrid = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation();
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation();
  const { ref: ref3, isVisible: isVisible3 } = useScrollAnimation();
  
  return (
    <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 mt-10 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <div 
        ref={ref1}
        className={`box-border caret-transparent flex transition-all duration-700 ${
          isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="relative bg-neutral-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col h-full border border-zinc-800 overflow-hidden rounded-lg border-solid">
          <div className="relative box-border caret-transparent h-48 w-full">
            <img
              alt="Smart Home Automation System"
              src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/pexels-photo-1643383.jpeg"
              className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-t-lg inset-0"
            />
          </div>
          <div className="box-border caret-transparent grow p-6">
            <h3 className="text-xl font-bold box-border caret-transparent leading-7 mb-2">
              Commercial HVAC Installation
            </h3>
            <p className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent mb-4">
              Complete installation of a 50-ton commercial HVAC system for a 20,000 sq ft office building, including ductwork design and smart thermostat integration.
            </p>
            <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Commercial
              </div>
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Installation
              </div>
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Smart Controls
              </div>
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Energy Efficient
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2 pb-6 px-6">
            <a
              href="#"
              className="text-sm font-medium items-center bg-zinc-950 box-border caret-transparent flex h-9 justify-center leading-5 text-nowrap border border-zinc-800 px-3 rounded-md border-solid hover:text-zinc-950 hover:bg-amber-300"
            >
              <img
                src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 text-nowrap w-4 mr-2"
              />
              Demo
            </a>
            <a
              href="#"
              className="text-sm font-medium items-center bg-zinc-950 box-border caret-transparent flex h-9 justify-center leading-5 text-nowrap border border-zinc-800 px-3 rounded-md border-solid hover:text-zinc-950 hover:bg-amber-300"
            >
              <img
                src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-5.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 text-nowrap w-4 mr-2"
              />
              Repo
            </a>
          </div>
        </div>
      </div>
      <div 
        ref={ref2}
        className={`box-border caret-transparent flex transition-all duration-700 delay-150 ${
          isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="relative bg-neutral-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col h-full border border-zinc-800 overflow-hidden rounded-lg border-solid">
          <div className="relative box-border caret-transparent h-48 w-full">
            <img
              alt="Structural Analysis Software"
              src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/pexels-photo-1036657.jpeg"
              className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-t-lg inset-0"
            />
          </div>
          <div className="box-border caret-transparent grow p-6">
            <h3 className="text-xl font-bold box-border caret-transparent leading-7 mb-2">
              Emergency AC Repair
            </h3>
            <p className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent mb-4">
              Diagnosed and repaired a refrigerant leak in a residential split system, replaced compressor, and restored cooling within 4 hours during peak summer.
            </p>
            <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Emergency Service
              </div>
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Repair
              </div>
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Refrigerant
              </div>
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Fast Response
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2 pb-6 px-6">
            <a
              href="#"
              className="text-sm font-medium items-center bg-zinc-950 box-border caret-transparent flex h-9 justify-center leading-5 text-nowrap border border-zinc-800 px-3 rounded-md border-solid hover:text-zinc-950 hover:bg-amber-300"
            >
              <img
                src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 text-nowrap w-4 mr-2"
              />
              Demo
            </a>
            <a
              href="#"
              className="text-sm font-medium items-center bg-zinc-950 box-border caret-transparent flex h-9 justify-center leading-5 text-nowrap border border-zinc-800 px-3 rounded-md border-solid hover:text-zinc-950 hover:bg-amber-300"
            >
              <img
                src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-5.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 text-nowrap w-4 mr-2"
              />
              Repo
            </a>
          </div>
        </div>
      </div>
      <div 
        ref={ref3}
        className={`box-border caret-transparent flex transition-all duration-700 delay-300 ${
          isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="relative bg-neutral-900 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px] box-border caret-transparent flex flex-col h-full border border-zinc-800 overflow-hidden rounded-lg border-solid">
          <div className="relative box-border caret-transparent h-48 w-full">
            <img
              alt="Renewable Energy Monitoring"
              src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/pexels-photo-356036.jpeg"
              className="absolute text-transparent box-border h-full max-w-full object-cover w-full rounded-t-lg inset-0"
            />
          </div>
          <div className="box-border caret-transparent grow p-6">
            <h3 className="text-xl font-bold box-border caret-transparent leading-7 mb-2">
              Preventive Maintenance Program
            </h3>
            <p className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent mb-4">
              Implemented comprehensive maintenance program for 15 residential units, reducing energy costs by 25% and extending equipment lifespan.
            </p>
            <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Maintenance
              </div>
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Energy Savings
              </div>
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Residential
              </div>
              <div className="text-xs font-semibold items-center bg-violet-600 box-border caret-transparent flex leading-4 border px-2.5 py-0.5 rounded-full border-solid border-transparent">
                Cost Reduction
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2 pb-6 px-6">
            <a
              href="#"
              className="text-sm font-medium items-center bg-zinc-950 box-border caret-transparent flex h-9 justify-center leading-5 text-nowrap border border-zinc-800 px-3 rounded-md border-solid hover:text-zinc-950 hover:bg-amber-300"
            >
              <img
                src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-4.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 text-nowrap w-4 mr-2"
              />
              Demo
            </a>
            <a
              href="#"
              className="text-sm font-medium items-center bg-zinc-950 box-border caret-transparent flex h-9 justify-center leading-5 text-nowrap border border-zinc-800 px-3 rounded-md border-solid hover:text-zinc-950 hover:bg-amber-300"
            >
              <img
                src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-5.svg"
                alt="Icon"
                className="box-border caret-transparent h-4 text-nowrap w-4 mr-2"
              />
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
