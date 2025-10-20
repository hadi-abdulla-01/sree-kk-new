import { motion } from "framer-motion";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./SectionHeading";

export const InterestsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="interests" className="relative">
      <div className="mx-auto flex w-[min(90%,1100px)] flex-col gap-10 py-24">
        <div className="-ml-10 md:-ml-48">
          <SectionHeading
            title={t.interests.heading}
            subtitle={t.interests.subtitle}
            eyebrow={t.nav.find((item) => item.id === "interests")?.label}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {t.interests.items.map((item, idx) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.03 }}
              className="rounded-full border border-primary/20 bg-card/80 px-4 py-2 text-sm font-medium text-primary shadow-lg shadow-primary/10"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
