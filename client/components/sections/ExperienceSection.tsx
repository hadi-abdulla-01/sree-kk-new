import { AnimatePresence, motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./SectionHeading";
import type { MetricItem } from "@/i18n/translations";

const getIconComponent = (name: string): LucideIcon => {
  const icon = (Icons as Record<string, LucideIcon>)[name];
  return icon ?? Icons.Circle;
};

const MetricBadge = ({ metric }: { metric: MetricItem }) => {
  const Icon = getIconComponent(metric.icon);
  const hasProgress = typeof metric.value === "number" && metric.value >= 0;
  const progressWidth = hasProgress ? Math.min(metric.value ?? 0, 100) : 0;

  return (
    <motion.div
      layout
      className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-4 shadow-sm shadow-primary/10 backdrop-blur"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-card/40 via-transparent to-primary/10 opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">
              {metric.label}
            </span>
            <span className="text-xs text-foreground/60">
              {metric.description}
            </span>
          </div>
        </div>
        {hasProgress && (
          <div className="h-1.5 w-full rounded-full bg-primary/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progressWidth}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-primary/60"
            />
          </div>
        )}
        {hasProgress && metric.unit && (
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
            {progressWidth}
            {metric.unit}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative">
      <div className="mx-auto flex w-[min(95%,1100px)] flex-col gap-12 py-24">
        
        {/* 👇 Move heading slightly left */}
        <div className="-ml-10 md:-ml-48">
          <SectionHeading
            title={t.experience.heading}
            subtitle={t.experience.subtitle}
            eyebrow={t.nav.find((item) => item.id === "experience")?.label}
          />
        </div>

        <div className="flex flex-col gap-12">
          {t.experience.items.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card/70 p-10 shadow-xl shadow-primary/15 backdrop-blur"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-card/30 via-transparent to-primary/15"
                aria-hidden
              />
              <div className="relative flex flex-col gap-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">
                      {item.timeframe} • {item.location}
                    </span>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-base font-medium text-primary">
                      {item.company}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    KPI • Impact
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                  <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/65 p-6 shadow-inner">
                    <span className="text-sm font-semibold text-primary">
                      {item.company}
                    </span>
                    <ul className="space-y-3 text-sm text-foreground/80">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-2">
                          <Icons.Check className="mt-0.5 h-4 w-4 text-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <AnimatePresence initial={false}>
                      {item.metrics.map((metric) => (
                        <MetricBadge key={metric.label} metric={metric} />
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
