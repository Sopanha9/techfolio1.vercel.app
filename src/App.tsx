import { Header } from "@/sections/Header";
import { Main } from "@/components/Main";
import { Footer } from "@/sections/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const App = () => {
  return (
    <ThemeProvider>
      <body className="text-zinc-950 dark:text-zinc-50 text-base not-italic normal-nums font-normal accent-auto bg-white dark:bg-zinc-950 box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-inter transition-colors">
      <div className="relative box-border caret-transparent flex flex-col min-h-[1000px]">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="absolute box-border caret-transparent block"></div>
    </body>
    </ThemeProvider>
  );
};
