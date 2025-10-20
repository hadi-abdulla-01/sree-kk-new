import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { useLanguage } from "@/context/language-context";
import { LanguageToggle } from "./LanguageToggle";
import type { SectionId } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const scrollToSection = (id: SectionId) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Header = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id: SectionId) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-6">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex w-full max-w-7xl items-center justify-between gap-4 rounded-full border border-white/20 bg-background/70 px-4 py-3 shadow-lg shadow-primary/10 backdrop-blur"
      >
        {/* Title */}
        <button
          type="button"
          onClick={() => handleNavigate("home")}
          className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.4em] text-primary transition-colors hover:text-primary/80"
        >
          {t.hero.title}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-end gap-2 lg:flex">
          {t.nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id as SectionId)}
              className="rounded-full px-4 py-2 text-xs font-medium text-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {item.label}
            </button>
          ))}
          <LanguageToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-3 w-full max-w-7xl overflow-hidden rounded-3xl border border-white/15 bg-background/95 shadow-2xl shadow-primary/20 backdrop-blur"
          >
            <div className="flex flex-col gap-1 p-4">
              {t.nav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigate(item.id as SectionId)}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-foreground/80 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-2 flex justify-center">
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
