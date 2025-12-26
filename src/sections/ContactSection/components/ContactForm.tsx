import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`box-border caret-transparent max-w-md mt-10 mx-auto transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <form className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <input
            placeholder="Your Name"
            value=""
            name="name"
            className="text-sm bg-zinc-950 box-border caret-transparent flex h-10 leading-5 w-full border border-zinc-800 px-3 py-2 rounded-md border-solid"
          />
        </div>
        <div className="box-border caret-transparent mt-4">
          <input
            placeholder="Your Email"
            type="email"
            value=""
            name="email"
            className="text-sm bg-zinc-950 box-border caret-transparent flex h-10 leading-5 w-full border border-zinc-800 px-3 py-2 rounded-md border-solid"
          />
        </div>
        <div className="box-border caret-transparent mt-4">
          <textarea
            name="message"
            placeholder="Your Message"
            className="text-sm bg-zinc-950 box-border caret-transparent flex leading-5 min-h-[150px] resize-y w-full border-zinc-800 px-3 py-2 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-sm font-medium items-center bg-teal-500 caret-transparent inline-flex h-10 justify-center leading-5 text-center text-nowrap w-full mt-4 px-4 py-2 rounded-md hover:bg-teal-500/90"
        >
          Send Message{" "}
          <img
            src="https://c.animaapp.com/mjmaf55ueYpD0u/assets/icon-6.svg"
            alt="Icon"
            className="box-border caret-transparent h-4 text-nowrap w-4 ml-2"
          />
        </button>
      </form>
    </div>
  );
};
