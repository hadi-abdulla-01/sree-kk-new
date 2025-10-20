import { motion } from "framer-motion";

import { useLanguage } from "@/context/language-context";
import { cn } from "@/lib/utils";

export const LanguageToggle = () => {
  const { language, setLanguage, toggleLanguage, t } = useLanguage();

  return (
    <div className="flex items-center gap-3">
      <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-foreground/60 md:block">
        {t.switcher.label}
      </span>
      <div className="relative flex items-center gap-1 rounded-full border border-primary/10 bg-background/60 px-1 py-1 shadow-sm backdrop-blur">
        {t.switcher.options.map((option) => {
          const isActive = option.code === language;
          return (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              onDoubleClick={toggleLanguage}
              className={cn(
                "relative flex min-w-[48px] items-center justify-center rounded-full px-3 py-1 text-xs font-semibold transition-all",
                isActive
                  ? "text-primary"
                  : "text-foreground/60 hover:text-primary",
              )}
              aria-label={`${t.switcher.label}: ${option.fullLabel}`}
            >
              {isActive && (
                <motion.span
                  layoutId="language-pill"
                  className="absolute inset-0 rounded-full bg-primary/10"
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                />
              )}
              <span className="relative z-10">{option.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
