import { motion } from "framer-motion";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./SectionHeading";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative" id="about">
      <div className="mx-auto flex w-[min(90%,1100px)] flex-col gap-10 py-24">
        <div className="-ml-10 md:-ml-48">
          <SectionHeading
            title={t.about.heading}
            subtitle={t.about.subtitle}
            eyebrow={t.nav.find((item) => item.id === "about")?.label}
          />
        </div>
        <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl border border-border bg-card p-6 shadow-md shadow-primary/10 backdrop-blur">
              <dl className="grid gap-4">
                {t.about.details.map((detail) => (
                  <div key={detail.label} className="flex flex-col gap-1">
                    <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                      {detail.label}
                    </dt>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noreferrer" : undefined}
                        className="text-base font-medium text-foreground transition hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <dd className="text-base font-medium text-foreground">
                        {detail.value}
                      </dd>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    {t.about.languagesLabel}
                  </dt>
                  <dd className="text-base font-medium text-foreground">
                    {t.about.languagesList}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-3xl border border-primary/15 bg-primary/5 p-6 shadow-inner shadow-primary/10">
              <p className="text-sm leading-relaxed text-foreground/70">
                {t.hero.summary.primary}
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-3xl border border-border bg-card p-6 shadow-lg shadow-primary/10 backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-primary">
              {t.about.educationHeading}
            </h3>
            <ul className="mt-6 space-y-6">
              {t.about.education.map((item) => (
                <li key={item.degree} className="relative pl-6">
                  <span className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  <div className="rounded-2xl bg-card/70 p-4 shadow-sm">
                    <p className="text-base font-semibold text-foreground">
                      {item.degree}
                    </p>
                    <p className="text-sm text-foreground/70">{item.school}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">
                      {item.period}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
