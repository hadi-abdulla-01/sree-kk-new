import { motion } from "framer-motion";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./SectionHeading";

export const CertificationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="relative">
      <div className="mx-auto flex w-[min(90%,1100px)] flex-col gap-10 py-24">
        <div className="sm:-ml-4 md:-ml-48">
          <SectionHeading
            title={t.certifications.heading}
            subtitle={undefined}
            eyebrow={t.nav.find((item) => item.id === "certifications")?.label}
          />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {t.certifications.items.map((item, idx) => (
            <motion.div
              key={`${item.title}-${item.issuer}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
              className="rounded-3xl border border-border bg-card/70 p-6 shadow-lg shadow-primary/15 backdrop-blur"
            >
              <p className="text-base font-semibold text-foreground">
                {item.title}
              </p>
              <p className="text-sm text-primary">{item.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
