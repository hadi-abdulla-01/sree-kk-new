import type { ReactNode } from "react";

import { Header } from "./Header";
import { IntroScreen } from "./IntroScreen";
import { Footer } from "./Footer";
import { InteractiveGradient } from "@/components/visuals/InteractiveGradient";

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dark relative min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/5 text-foreground">
      <IntroScreen />
      <InteractiveGradient />
      <Header />
      <main className="relative z-10">
        {/* This spacer div matches the scroll distance of the intro animation */}
        <div className="h-[400px]" />
        <div className="pt-40">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
