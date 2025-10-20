import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./SectionHeading";

export const AchievementsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="achievements" className="relative">
      <div className="mx-auto flex w-[min(90%,1100px)] flex-col gap-10 py-24">
        <div className="sm:-ml-4 md:-ml-48">
          <SectionHeading
            title={t.achievements.heading}
            subtitle={undefined}
            eyebrow={t.nav.find((item) => item.id === "achievements")?.label}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {t.achievements.items.map((item, idx) => (
            <motion.div
              key={`${item.title}-${item.period ?? idx}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 shadow-lg shadow-primary/15 backdrop-blur"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card/40 via-transparent to-primary/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Trophy className="h-5 w-5" />
                </span>
                <div className="flex flex-col">
                  <p className="text-base font-semibold text-foreground">
                    {item.title}
                  </p>
                  {item.period && (
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                      {item.period}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
