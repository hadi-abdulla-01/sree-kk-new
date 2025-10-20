import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./SectionHeading";

export const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative">
      <div className="mx-auto flex w-[min(90%,1100px)] flex-col gap-10 py-24">
        <div className="-ml-10 md:-ml-48">
          <SectionHeading
            title={t.skills.heading}
            subtitle={t.skills.subtitle}
            eyebrow={t.nav.find((item) => item.id === "skills")?.label}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {t.skills.categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card/70 p-6 shadow-lg shadow-primary/15 backdrop-blur"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card/40 via-transparent to-primary/15 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/70">
                      {category.title}
                    </span>
                    <span className="text-xs text-foreground/60">
                      {idx === 0
                        ? "Preferred toolkit"
                        : idx === 1
                          ? "Operating models"
                          : "Human strengths"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
