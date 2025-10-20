import { useEffect } from "react";

import { useLanguage } from "@/context/language-context";

export const SEO = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = t.seo.title;
    document.documentElement.lang = language;

    const ensureMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    };

    ensureMeta('meta[name="description"]', {
      name: "description",
      content: t.seo.description,
    });
    ensureMeta('meta[name="keywords"]', {
      name: "keywords",
      content: t.seo.keywords.join(", "),
    });
    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: t.seo.ogTitle,
    });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: t.seo.ogDescription,
    });
    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: "/placeholder.svg",
    });
  }, [t, language]);

  return null;
};
