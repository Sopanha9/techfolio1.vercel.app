import { ContactForm } from "@/sections/ContactSection/components/ContactForm";

export const ContactContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[1400px] w-full mx-auto px-4">
      <div className="box-border caret-transparent text-center">
        <h2 className="text-3xl font-bold box-border caret-transparent inline-block leading-9 mb-8 after:accent-auto after:bg-teal-500 after:box-border after:caret-transparent after:text-zinc-50 after:block after:text-3xl after:not-italic after:normal-nums after:font-bold after:h-1 after:tracking-[normal] after:leading-9 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:w-6/12 after:mt-2 after:rounded-full after:border-separate after:font-inter">
          Get In Touch
        </h2>
        <p className="text-zinc-400 dark:text-zinc-400 box-border caret-transparent max-w-2xl mt-2">
          Need AC repair, installation, or maintenance? Feel free to reach out for a free quote!
        </p>
      </div>
      <ContactForm />
    </div>
  );
};
