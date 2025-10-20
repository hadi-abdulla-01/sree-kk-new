import { motion } from "framer-motion";
import type { ReactNode } from "react";

import type { SectionId } from "@/i18n/translations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: SectionId;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  action?: ReactNode;
}

export const SectionHeading = ({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  action,
}: SectionHeadingProps) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "mx-auto flex w-full max-w-4xl flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "right" && "items-end text-right",
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/70">
          {eyebrow}
        </span>
      )}
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            {title}
          </h2>
          {action}
        </div>
        {subtitle && (
          <p className="text-base leading-relaxed text-foreground/75 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};
