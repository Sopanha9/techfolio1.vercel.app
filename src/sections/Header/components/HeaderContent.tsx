import { Logo } from "@/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const HeaderContent = () => {
  return (
    <div className="items-center box-border caret-transparent flex h-16 justify-between max-w-[1400px] w-full mx-auto p-4 md:px-8 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm">
      <div className="items-center box-border caret-transparent gap-x-6 flex gap-y-6 md:gap-x-10 md:gap-y-10">
        <Logo />
        <DesktopNav />
      </div>
      <MobileMenuButton />
      <HeaderActions />
    </div>
  );
};
