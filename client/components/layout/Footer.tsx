import { motion } from "framer-motion";

import { useLanguage } from "@/context/language-context";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative mt-24 border-t border-primary/20 bg-background/70 py-10 text-sm text-foreground/70 backdrop-blur">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto flex w-[min(90%,1100px)] flex-col items-center justify-between gap-4 text-center md:flex-row"
      >
        <div>
          <p>
            {t.footer.text.replace("{YEAR}", new Date().getFullYear().toString())}
          </p>
          <p className="mt-1">
            {t.footer.creditText}{" "}
            <a
              href={t.footer.creditLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary/80 transition-colors hover:text-primary"
            >
              {t.footer.creditName}
            </a>
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-foreground/50">
          <span>Lyon • {new Date().getFullYear()}</span>
        </div>
      </motion.div>
    </footer>
  );
};
