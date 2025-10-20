import { motion } from "framer-motion";
import { Languages } from "lucide-react";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./SectionHeading";

export const LanguagesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="languages" className="relative">
      <div className="mx-auto flex w-[min(90%,1100px)] flex-col gap-10 py-24">
        <div className="sm:-ml-4 md:-ml-48">
          <SectionHeading
            title={t.languagesSection.heading}
            subtitle={t.languagesSection.subtitle}
            eyebrow={t.nav.find((item) => item.id === "languages")?.label}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {t.languagesSection.languages.map((lang, idx) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              className="flex items-center justify-between rounded-3xl border border-border bg-card p-5 shadow-lg shadow-primary/15 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Languages className="h-5 w-5" />
                </span>
                <p className="text-base font-semibold text-foreground">
                  {lang.name}
                </p>
              </div>
              <p className="text-sm text-foreground/70">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
