import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterDivider } from "@/sections/Footer/components/FooterDivider";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent max-w-[1400px] w-full mx-auto px-4">
      <div className="box-border caret-transparent gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
        <FooterBrand />
        <FooterLinks />
      </div>
      <FooterDivider />
      <FooterBottom />
    </div>
  );
};
