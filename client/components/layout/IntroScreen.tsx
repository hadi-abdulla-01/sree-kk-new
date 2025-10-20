import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import { useLanguage } from "@/context/language-context";
import TextPressure from "../ui/TextPressure";

export const IntroScreen = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Define the animation range based on scroll position
  // It will start zooming between 0 and 300px of scroll
  // and fade out completely by 400px.
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const opacity = useTransform(scrollY, [0, 300, 400], [1, 1, 0]);

  // Disable pointer events after the animation so it doesn't block the page.
  const pointerEvents = useTransform(scrollY, (latest) =>
    latest > 400 ? "none" : "auto",
  );

  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    // This will fire once when the opacity animation completes.
    const unsubscribe = opacity.on("change", (latest) => {
      if (latest === 0 && !introFinished) {
        // Scroll the main content to the top.
        const mainElement = document.querySelector("main");
        if (mainElement) {
          mainElement.scrollIntoView({ behavior: "auto" });
        }
        setIntroFinished(true);
      }
    });

    return () => unsubscribe();
  }, [opacity, introFinished]);

  return (
    <motion.div
      style={{ scale, opacity, pointerEvents }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="w-full max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <TextPressure text={t.hero.title} textColor="hsl(var(--foreground))" minFontSize={40} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-4"
        >
          <TextPressure text={t.hero.introSubtitle} textColor="hsl(var(--primary))" minFontSize={20} weight={false} italic={false} />
        </motion.div>
      </div>
    </motion.div>
  );
};