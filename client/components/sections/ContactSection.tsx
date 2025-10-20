import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "./SectionHeading";

export const ContactSection = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    const subject = encodeURIComponent("Portfolio inquiry");
    const mailto = `mailto:sreelakshmikk15@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailto, "_blank");
    toast.success(t.contact.form.successMessage);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="relative">
      <div className="mx-auto flex w-[min(90%,1100px)] flex-col gap-10 py-24">
        <div className="sm:-ml-4 md:-ml-48">
          <SectionHeading
            title={t.contact.heading}
            subtitle={t.contact.subtitle}
            eyebrow={t.nav.find((item) => item.id === "contact")?.label}
            action={
              <div className="ml-auto hidden gap-4 md:flex">
                <a
                  href="mailto:sreelakshmikk15@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
                >
                  <Mail className="h-4 w-4" /> {t.contact.emailCta}
                </a>
                <a
                  href="https://www.linkedin.com/in/sreelakshmi-k-krishna-2605b730a/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-xs font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                >
                  <Linkedin className="h-4 w-4" /> {t.contact.linkedInCta}
                </a>
              </div>
            }
          />
        </div>
        <div className="grid gap-8">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border border-border bg-card/70 p-6 shadow-lg shadow-primary/15 backdrop-blur"
          >
            <p className="text-sm text-foreground/70">
              {t.contact.description}
            </p>
            <div className="mt-6 grid gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                  {t.contact.form.nameLabel}
                </span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.contact.form.namePlaceholder}
                  className="rounded-2xl border border-primary/20 bg-card/80 px-4 py-3 text-sm outline-none transition focus:border-primary"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                  {t.contact.form.emailLabel}
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.contact.form.emailPlaceholder}
                  className="rounded-2xl border border-primary/20 bg-card/80 px-4 py-3 text-sm outline-none transition focus:border-primary"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                  {t.contact.form.messageLabel}
                </span>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.form.messagePlaceholder}
                  className="min-h-[140px] rounded-2xl border border-primary/20 bg-card/80 px-4 py-3 text-sm outline-none transition focus:border-primary"
                />
              </label>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
                >
                  {t.contact.form.submitLabel}
                </button>
                <a
                  href="\asset\cv.pdf.pdf"
                  download="Sreelakshmi_KK_CV.pdf"
                  className="rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                >
                  {t.contact.downloadCvCta}
                </a>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
