import { motion } from "framer-motion";
import { useMemo } from "react";

import { useLanguage } from "@/context/language-context";
import type { SectionId } from "@/i18n/translations";

const scrollTo = (id: SectionId) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const HeroSection = () => {
  const { t, language } = useLanguage();

  const highlights = useMemo(() => {
    if (language === "fr") {
      return [
        {
          value: "5+",
          label: "années d’impact",
          description: "Pilotage de projets, PMO et coordination opérationnelle.",
        },
        {
          value: "12",
          label: "collaborateurs formés",
          description: "Coaching, onboarding et animation quotidienne.",
        },
        {
          value: "KPIs",
          label: "au cœur des décisions",
          description: "Planification stratégique et suivi d’indicateurs clés.",
        },
      ];
    }
    return [
      {
        value: "5+",
        label: "years of impact",
        description: "Project management, PMO assistance, and operations leadership.",
      },
      {
        value: "12",
        label: "people coached",
        description: "Team onboarding, capability building, and daily alignment.",
      },
      {
        value: "KPIs",
        label: "driving priorities",
        description: "Strategic planning anchored in measurable results.",
      },
    ];
  }, [language]);

  const taglineSegments = t.hero.tagline.split("|").map((segment) => segment.trim());

  return (
    <section id="home" className="relative isolate">
      <div className="mx-auto grid w-[min(90%,1100px)] items-center gap-10 pb-24 pt-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.45em] text-primary/80">
                {taglineSegments.map((segment) => (
                  <span key={segment} className="rounded-full bg-primary/10 px-3 py-1">
                    {segment}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl lg:text-6xl">
                {t.hero.title}
              </h1>
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                {t.hero.summary.primary}
              </p>
              <p className="text-sm italic text-foreground/60 md:text-base">
                {t.hero.summary.secondary}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => scrollTo("contact")}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
              >
                {t.hero.ctas.primary}
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="\asset\cv.pdf.pdf"
                download="Sreelakshmi_KK_CV.pdf"
                className="rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
              >
                {t.hero.ctas.secondary}
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-lg shadow-primary/15 backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-card/40 via-transparent to-primary/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex flex-col gap-2">
                  <span className="text-3xl font-semibold text-primary">
                    {highlight.value}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-foreground/60">
                    {highlight.label}
                  </span>
                  <p className="text-sm text-foreground/70">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-full"
        >
          <div className="relative isolate flex h-full flex-col gap-6 overflow-hidden rounded-[3rem] border border-border bg-gradient-to-br from-card/70 via-card/40 to-primary/20 p-8 shadow-xl shadow-primary/25 backdrop-blur">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.4em] text-primary/70">
                {language === "fr" ? "Résumé" : "Profile snapshot"}
              </span>
              <p className="text-lg font-medium text-foreground/90">
                {language === "fr"
                  ? "Basée à Lyon, Sreelakshmi accompagne la transformation opérationnelle en gardant l’humain et les résultats au centre."
                  : "Based in Lyon, Sreelakshmi leads operational transformation while keeping teams and outcomes aligned."}
              </p>
            </div>
            <div className="grid gap-4 text-sm text-foreground/75">
              <div className="rounded-2xl bg-card/60 p-4 shadow-sm">
                <p className="font-semibold text-primary">
                  {language === "fr"
                    ? "Forces principales"
                    : "Core strengths"}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-4">
                  <li>
                    {language === "fr"
                      ? "Pilotage KPI et coordinationérationnelle"
                      : "KPI stewardship and operational coordination"}
                  </li>
                  <li>
                    {language === "fr"
                      ? "Gestion d’équipe, formation et onboarding"
                      : "Team leadership, training, and onboarding"}
                  </li>
                  <li>
                    {language === "fr"
                      ? "Optimisation des processus et maîtrise des coûts"
                      : "Process optimization and cost control"}
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-primary/20 p-4">
                <p className="font-semibold text-primary">
                  {language === "fr" ? "Disponibilité" : "Availability"}
                </p>
                <p className="mt-1 text-foreground/70">
                  {language === "fr"
                    ? "Ouverte aux missions à Lyon, en France et en Europe, en présentiel ou hybride."
                    : "Open to engagements in Lyon, across France, and Europe, onsite or hybrid."}
                </p>
              </div>
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.35em] text-primary/80">
                Lyon · France
              </span>
              <span className="rounded-full border border-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em] text-foreground/60">
                {language === "fr" ? "Bilingue EN/FR" : "Bilingual EN/FR"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
