import { SocialLinks } from "@/components/SocialLinks";

export const FooterBrand = () => {
  return (
    <div className="box-border caret-transparent col-end-auto col-start-auto md:col-end-[span_1] md:col-start-[span_1]">
      <a href="/" className="box-border caret-transparent inline-block">
        <span className="text-transparent text-2xl font-bold bg-clip-text bg-[linear-gradient(to_right,rgb(31,173,147),rgb(122,81,205),rgb(246,182,81))] box-border leading-8">
          Portfolio
        </span>
      </a>
      <p className="text-zinc-400 dark:text-zinc-400 text-sm box-border caret-transparent leading-5 mt-4">
        Professional HVAC services including AC installation, repair, and maintenance for residential and commercial properties.
      </p>
      <SocialLinks />
    </div>
  );
};
