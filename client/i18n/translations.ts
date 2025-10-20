export type Language = "en" | "fr";

export type SectionId =
  | "home"
  | "about"
  | "experience"
  | "skills"
  | "certifications"
  | "achievements"
  | "languages"
  | "interests"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface MetricItem {
  label: string;
  description: string;
  icon: string;
  value?: number;
  unit?: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  timeframe: string;
  role: string;
  achievements: string[];
  metrics: MetricItem[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface AchievementItem {
  title: string;
  description: string;
  period?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface TranslationContent {
  language: Language;
  languageLabel: string;
  nav: NavItem[];
  switcher: {
    label: string;
    ariaLabel: string;
    options: Array<{ code: Language; shortLabel: string; fullLabel: string }>;
  };
  hero: {
    title: string;
    tagline: string;
    introSubtitle: string;
    secondaryTagline: string;
    summary: {
      primary: string;
      secondary: string;
    };
    ctas: {
      primary: string;
      secondary: string;
    };
  };
  about: {
    heading: string;
    subtitle: string;
    details: Array<{ label: string; value: string; href?: string }>;
    languagesLabel: string;
    languagesList: string;
    educationHeading: string;
    education: EducationItem[];
  };
  experience: {
    heading: string;
    subtitle: string;
    items: ExperienceItem[];
  };
  skills: {
    heading: string;
    subtitle: string;
    categories: SkillCategory[];
  };
  certifications: {
    heading: string;
    items: CertificationItem[];
  };
  achievements: {
    heading: string;
    items: AchievementItem[];
  };
  languagesSection: {
    heading: string;
    subtitle: string;
    languages: LanguageItem[];
  };
  interests: {
    heading: string;
    subtitle: string;
    items: string[];
  };
  contact: {
    heading: string;
    subtitle: string;
    description: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
      successMessage: string;
      errorMessage: string;
    };
    emailCta: string;
    linkedInCta: string;
    downloadCvCta: string;
  };
  footer: {
    text: string;
    creditText: string;
    creditName: string;
    creditLink: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    language: "en",
    languageLabel: "English",
    nav: [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills & Tools" },
      { id: "certifications", label: "Certifications" },
      { id: "achievements", label: "Achievements" },
      { id: "languages", label: "Languages" },
      { id: "interests", label: "Interests" },
      { id: "contact", label: "Contact" },
    ],
    switcher: {
      label: "Language",
      ariaLabel: "Switch language to French",
      options: [
        { code: "en", shortLabel: "EN", fullLabel: "English" },
        { code: "fr", shortLabel: "FR", fullLabel: "French" },
      ],
    },
    hero: {
      title: "Sreelakshmi K K",
      tagline:
        "Project Manager | Operations Coordinator | Team Leader | PMO Assistant",
      introSubtitle: "Project Manager Portfolio",
      secondaryTagline:
        "Chef de projet | Coordinatrice des opérations | Chef d’équipe | Assistante PMO",
      summary: {
        primary:
          "Project manager with over 5 years of experience in team management, administrative coordination, and operational process optimization. Skilled in improving performance through strategic planning and KPI-driven results.",
        secondary:
          "Manager polyvalente avec plus de 5 ans d’expérience en gestion d’équipe, coordination administrative et optimisation des processus. Spécialisée dans l’amélioration de la performance opérationnelle et le suivi d’indicateurs clés (KPI).",
      },
      ctas: {
        primary: "Let’s collaborate",
        secondary: "Download CV",
      },
    },
    about: {
      heading: "About",
      subtitle:
        "Project management and operations leadership rooted in Lyon, France.",
      details: [
        { label: "Location", value: "Lyon, France" },
        {
          label: "Email",
          value: "sreelakshmikk15@gmail.com",
          href: "mailto:sreelakshmikk15@gmail.com",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/sreelakshmi-k-krishna-2605b730a",
          href: "https://www.linkedin.com/in/sreelakshmi-k-krishna-2605b730a/",
        },
      ],
      languagesLabel: "Languages",
      languagesList: "English, French, Malayalam, Tamil, Hindi",
      educationHeading: "Education",
      education: [
        {
          degree: "M.S. in Project Management (Bac+5)",
          school: "ECEMA, Lyon, France",
          period: "2023–2024",
        },
        {
          degree:
            "M.A. in South Asian Studies & International Relations (Bac+5)",
          school: "Pondicherry University, India",
          period: "2020–2022",
        },
        {
          degree:
            "B.A. in English Literature, Communication & Journalism (Bac+3)",
          school: "Mahatma Gandhi University, India",
          period: "2017–2020",
        },
      ],
    },
    experience: {
      heading: "Experience",
      subtitle: "Key achievements and KPI-driven outcomes",
      items: [
        {
          company: "Big Fernand",
          location: "Lyon, France",
          timeframe: "07/2023 – 03/2025",
          role: "Operations & Team Coordinator",
          achievements: [
            "Reduced purchasing costs by 12% through supplier contract renegotiation.",
            "Supervised and trained a team of 12 people, ensuring smooth onboarding.",
            "Managed inventories and stock movements with precision and reliability.",
            "Monitored daily priorities and KPIs in store briefings to align teams.",
          ],
          metrics: [
            {
              label: "Cost optimization",
              description: "12% purchasing savings from renegotiated contracts.",
              icon: "TrendingDown",
              value: 12,
              unit: "%",
            },
            {
              label: "People coached",
              description: "Training program delivered to 12 team members.",
              icon: "Users",
            },
            {
              label: "Daily KPI cadence",
              description: "Structured briefings to track operational indicators.",
              icon: "BarChart3",
            },
          ],
        },
        {
          company: "Puthanpurakkal Timbers",
          location: "Kerala, India",
          timeframe: "01/2021 – 01/2023",
          role: "Procurement & Purchasing Manager",
          achievements: [
            "Achieved 12% yearly cost reduction via vendor negotiation.",
            "Digitalized purchasing workflow, improving efficiency by 25%.",
            "Coordinated logistics, finance, and production for better results.",
          ],
          metrics: [
            {
              label: "Annual savings",
              description: "12% cost reduction across procurement spend.",
              icon: "PiggyBank",
              value: 12,
              unit: "%",
            },
            {
              label: "Process efficiency",
              description: "25% faster purchasing cycles via digitalized workflows.",
              icon: "Timer",
              value: 25,
              unit: "%",
            },
            {
              label: "Cross-team alignment",
              description: "Logistics, finance, and production coordinated end-to-end.",
              icon: "Share2",
            },
          ],
        },
        {
          company: "Kerala Kaumudi",
          location: "Kerala, India",
          timeframe: "10/2019 – 01/2020",
          role: "Content & Journalism Coordinator",
          achievements: [
            "Managed editorial projects with tight deadlines across multiple teams.",
            "Organized teamwork and task prioritization for smooth delivery.",
            "Contributed to the optimization of editorial workflows and quality.",
          ],
          metrics: [
            {
              label: "Editorial delivery",
              description: "Consistent publication schedule with deadline discipline.",
              icon: "Clock3",
            },
            {
              label: "Team synergy",
              description: "Cross-functional collaboration improved newsroom flow.",
              icon: "Handshake",
            },
            {
              label: "Workflow refinement",
              description: "Enhanced editorial processes for clearer task ownership.",
              icon: "SlidersHorizontal",
            },
          ],
        },
      ],
    },
    skills: {
      heading: "Skills & Tools",
      subtitle: "Toolkit spanning operations, leadership, and analytics",
      categories: [
        {
          title: "Tools",
          items: ["Asana", "Trello", "Microsoft Office", "Python"],
        },
        {
          title: "Methodologies",
          items: [
            "Agile project delivery",
            "KPI tracking & reporting",
            "Team leadership",
            "Stock management",
            "Procurement",
            "Logistics optimization",
          ],
        },
        {
          title: "Soft Skills",
          items: [
            "Communication",
            "Coordination",
            "Organization",
            "Risk analysis",
            "General administration",
            "Interpersonal skills",
          ],
        },
      ],
    },
    certifications: {
      heading: "Certifications",
      items: [
        { title: "Google Project Management", issuer: "Google" },
        {
          title: "Diploma in Human Resource Management",
          issuer: "Aakaro Consulting",
        },
        { title: "Automation", issuer: "Kerala Government Polytechnic" },
        {
          title: "Certification in English Training",
          issuer: "British Council",
        },
      ],
    },
    achievements: {
      heading: "Achievements",
      items: [
        {
          title: "Team Leader, NSS National Service Scheme",
          period: "2017–2019",
          description: "Led community initiatives and volunteer coordination across India.",
        },
        {
          title: "Author",
          period: "2022",
          description:
            "Published “Relations maritimes entre l’Inde et le Sri Lanka”, exploring maritime relations between India and Sri Lanka.",
        },
      ],
    },
    languagesSection: {
      heading: "Languages",
      subtitle: "Multilingual communication across teams and regions",
      languages: [
        { name: "English", level: "Native / Bilingual" },
        { name: "French", level: "Professional Working Proficiency" },
        { name: "Malayalam", level: "Native / Bilingual" },
        { name: "Tamil", level: "Native / Bilingual" },
        { name: "Hindi", level: "Native / Bilingual" },
      ],
    },
    interests: {
      heading: "Interests",
      subtitle: "Inspiration outside the workplace",
      items: ["Vlogging", "Traveling", "Music", "Cooking"],
    },
    contact: {
      heading: "Contact",
      subtitle: "Let’s build your next project together",
      description:
        "Reach out for collaborations, PMO support, or operational mandates. I’ll respond within two business days.",
      form: {
        nameLabel: "Name",
        namePlaceholder: "Your full name",
        emailLabel: "Email",
        emailPlaceholder: "name@email.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project, timeline, and goals.",
        submitLabel: "Send message",
        successMessage: "Thank you! Your message has been sent.",
        errorMessage: "Something went wrong. Please try again later.",
      },
      emailCta: "Email Sreelakshmi",
      linkedInCta: "Connect on LinkedIn",
      downloadCvCta: "Download CV",
    },
    footer: {
      text: "© {YEAR} Sreelakshmi K K. All rights reserved.",
      creditText: "Made by",
      creditName: "Mohammed Hadi Abdulla",
      creditLink: "https://mohammedhadiabdulla.online",
    },
    seo: {
      title: "Sreelakshmi K K | Project Manager & Operations Coordinator in Lyon",
      description:
        "Discover the portfolio of Sreelakshmi K K, a Lyon-based project manager and operations coordinator driving KPI-focused results across teams.",
      keywords: [
        "Project Manager Lyon",
        "PMO",
        "Operations Coordinator France",
        "Gestion de projet",
        "Chef d’équipe Lyon",
      ],
      ogTitle: "Sreelakshmi K K — Project Manager & Operations Coordinator",
      ogDescription:
        "Bilingual project manager based in Lyon delivering strategic planning, KPI tracking, and operational excellence.",
    },
  },
  fr: {
    language: "fr",
    languageLabel: "Français",
    nav: [
      { id: "home", label: "Accueil" },
      { id: "about", label: "À propos" },
      { id: "experience", label: "Expérience" },
      { id: "skills", label: "Compétences & Outils" },
      { id: "certifications", label: "Certifications" },
      { id: "achievements", label: "Réalisations" },
      { id: "languages", label: "Langues" },
      { id: "interests", label: "Centres d’intérêt" },
      { id: "contact", label: "Contact" },
    ],
    switcher: {
      label: "Langue",
      ariaLabel: "Passer le site en anglais",
      options: [
        { code: "en", shortLabel: "EN", fullLabel: "Anglais" },
        { code: "fr", shortLabel: "FR", fullLabel: "Français" },
      ],
    },
    hero: {
      title: "Sreelakshmi K K",
      tagline:
        "Chef de projet | Coordinatrice des opérations | Chef d’équipe | Assistante PMO",
      introSubtitle: "Portfolio Cheffe de Projet",
      secondaryTagline:
        "Project Manager | Operations Coordinator | Team Leader | PMO Assistant",
      summary: {
        primary:
          "Manager polyvalente avec plus de 5 ans d’expérience en gestion d’équipe, coordination administrative et optimisation des processus. Spécialisée dans l’amélioration de la performance opérationnelle et le suivi d’indicateurs clés (KPI).",
        secondary:
          "Project manager with over 5 years of experience in team management, administrative coordination, and operational process optimization. Skilled in improving performance through strategic planning and KPI-driven results.",
      },
      ctas: {
        primary: "Collaborons ensemble",
        secondary: "Télécharger le CV",
      },
    },
    about: {
      heading: "À propos",
      subtitle:
        "Leadership en gestion de projet et opérations, basée à Lyon, France.",
      details: [
        { label: "Localisation", value: "Lyon, France" },
        {
          label: "Email",
          value: "sreelakshmikk15@gmail.com",
          href: "mailto:sreelakshmikk15@gmail.com",
        },
        {
          label: "LinkedIn",
          value: "linkedin.com/in/sreelakshmi-k-krishna-2605b730a",
          href: "https://www.linkedin.com/in/sreelakshmi-k-krishna-2605b730a/",
        },
      ],
      languagesLabel: "Langues parlées",
      languagesList: "Anglais, Français, Malayalam, Tamoul, Hindi",
      educationHeading: "Formation",
      education: [
        {
          degree: "Mastère en gestion de projet (Bac+5)",
          school: "ECEMA, Lyon, France",
          period: "2023–2024",
        },
        {
          degree:
            "Master en études sud-asiatiques et relations internationales (Bac+5)",
          school: "Université de Pondichéry, Inde",
          period: "2020–2022",
        },
        {
          degree:
            "Licence en littérature anglaise, communication & journalisme (Bac+3)",
          school: "Université Mahatma Gandhi, Inde",
          period: "2017–2020",
        },
      ],
    },
    experience: {
      heading: "Expérience",
      subtitle: "Réalisations clés et indicateurs de performance",
      items: [
        {
          company: "Big Fernand",
          location: "Lyon, France",
          timeframe: "07/2023 – 03/2025",
          role: "Coordinatrice des opérations et des équipes",
          achievements: [
            "Réduction des coûts d’achat de 12 % via la renégociation des contrats fournisseurs.",
            "Encadrement et formation d’une équipe de 12 personnes, avec un onboarding fluide.",
            "Gestion rigoureuse des inventaires et des mouvements de stock.",
            "Animation des briefings quotidiens et suivi des KPI opérationnels.",
          ],
          metrics: [
            {
              label: "Optimisation des coûts",
              description: "12 % d’économies d’achats grâce aux nouveaux contrats.",
              icon: "TrendingDown",
              value: 12,
              unit: "%",
            },
            {
              label: "Coaching d’équipe",
              description: "Programme de formation délivré à 12 collaborateurs.",
              icon: "Users",
            },
            {
              label: "Rituels KPI",
              description: "Briefings structurés pour piloter les indicateurs clés.",
              icon: "BarChart3",
            },
          ],
        },
        {
          company: "Puthanpurakkal Timbers",
          location: "Kerala, Inde",
          timeframe: "01/2021 – 01/2023",
          role: "Responsable achats et approvisionnements",
          achievements: [
            "Baisse des coûts annuels de 12 % grâce à la négociation fournisseurs.",
            "Digitalisation du processus d’achat, améliorant l’efficacité de 25 %.",
            "Coordination logistique, financière et production pour des résultats renforcés.",
          ],
          metrics: [
            {
              label: "Économies annuelles",
              description: "12 % de réduction des dépenses achats.",
              icon: "PiggyBank",
              value: 12,
              unit: "%",
            },
            {
              label: "Efficacité des processus",
              description: "Cycles d’achat 25 % plus rapides grâce aux outils digitaux.",
              icon: "Timer",
              value: 25,
              unit: "%",
            },
            {
              label: "Alignement transverse",
              description:
                "Collaboration renforcée entre logistique, finance et production.",
              icon: "Share2",
            },
          ],
        },
        {
          company: "Kerala Kaumudi",
          location: "Kerala, Inde",
          timeframe: "10/2019 – 01/2020",
          role: "Coordinatrice éditoriale et journalisme",
          achievements: [
            "Pilotage de projets éditoriaux à délais serrés.",
            "Organisation des équipes et priorisation des tâches quotidiennes.",
            "Contribution à l’optimisation des workflows éditoriaux.",
          ],
          metrics: [
            {
              label: "Livraison éditoriale",
              description: "Calendrier de publication respecté avec discipline.",
              icon: "Clock3",
            },
            {
              label: "Synergie d’équipe",
              description: "Collaboration transversale améliorée dans la rédaction.",
              icon: "Handshake",
            },
            {
              label: "Processus agiles",
              description: "Workflows clarifiés pour une meilleure qualité éditoriale.",
              icon: "SlidersHorizontal",
            },
          ],
        },
      ],
    },
    skills: {
      heading: "Compétences & Outils",
      subtitle: "Un éventail au service de l’opérationnel et du pilotage",
      categories: [
        {
          title: "Outils",
          items: ["Asana", "Trello", "Microsoft Office", "Python"],
        },
        {
          title: "Méthodologies",
          items: [
            "Gestion de projet agile",
            "Suivi et reporting des KPI",
            "Leadership d’équipe",
            "Gestion des stocks",
            "Approvisionnement",
            "Optimisation logistique",
          ],
        },
        {
          title: "Savoir-être",
          items: [
            "Communication",
            "Coordination",
            "Organisation",
            "Analyse des risques",
            "Administration générale",
            "Relations interpersonnelles",
          ],
        },
      ],
    },
    certifications: {
      heading: "Certifications",
      items: [
        { title: "Google Project Management", issuer: "Google" },
        {
          title: "Diplôme en gestion des ressources humaines",
          issuer: "Aakaro Consulting",
        },
        { title: "Automatisation", issuer: "Kerala Government Polytechnic" },
        {
          title: "Certification en formation d’anglais",
          issuer: "British Council",
        },
      ],
    },
    achievements: {
      heading: "Réalisations",
      items: [
        {
          title: "Cheffe d’équipe, NSS National Service Scheme",
          period: "2017–2019",
          description:
            "Pilotage d’initiatives communautaires et coordination des bénévoles en Inde.",
        },
        {
          title: "Autrice",
          period: "2022",
          description:
            "Publication de « Relations maritimes entre l’Inde et le Sri Lanka », étude des relations maritimes entre les deux pays.",
        },
      ],
    },
    languagesSection: {
      heading: "Langues",
      subtitle: "Communication multilingue au service des équipes",
      languages: [
        { name: "Anglais", level: "Langue maternelle / Bilingue" },
        { name: "Français", level: "Maîtrise professionnelle" },
        { name: "Malayalam", level: "Langue maternelle / Bilingue" },
        { name: "Tamoul", level: "Langue maternelle / Bilingue" },
        { name: "Hindi", level: "Langue maternelle / Bilingue" },
      ],
    },
    interests: {
      heading: "Centres d’intérêt",
      subtitle: "Sources d’inspiration personnelles",
      items: ["Vlog", "Voyages", "Musique", "Cuisine"],
    },
    contact: {
      heading: "Contact",
      subtitle: "Construisons votre prochain projet",
      description:
        "Contactez-moi pour un accompagnement PMO, une mission opérationnelle ou une collaboration. Réponse sous deux jours ouvrés.",
      form: {
        nameLabel: "Nom",
        namePlaceholder: "Votre nom complet",
        emailLabel: "Email",
        emailPlaceholder: "nom@email.com",
        messageLabel: "Message",
        messagePlaceholder:
          "Parlez-moi de votre projet, du calendrier et des objectifs.",
        submitLabel: "Envoyer",
        successMessage: "Merci ! Votre message a bien été envoyé.",
        errorMessage: "Une erreur est survenue. Veuillez réessayer plus tard.",
      },
      emailCta: "Envoyer un email",
      linkedInCta: "Se connecter sur LinkedIn",
      downloadCvCta: "Télécharger le CV",
    },
    footer: {
      text: "© {YEAR} Sreelakshmi K K. Tous droits réservés.",
      creditText: "Réalisé par",
      creditName: "Mohammed Hadi Abdulla",
      creditLink: "https://mohammedhadiabdulla.online",
    },
    seo: {
      title: "Sreelakshmi K K | Cheffe de projet et coordinatrice des opérations à Lyon",
      description:
        "Découvrez le portfolio de Sreelakshmi K K, cheffe de projet bilingue basée à Lyon, experte en pilotage KPI et optimisation opérationnelle.",
      keywords: [
        "Project Manager Lyon",
        "PMO",
        "Operations Coordinator France",
        "Gestion de projet",
        "Chef d’équipe Lyon",
      ],
      ogTitle: "Sreelakshmi K K — Cheffe de projet & coordinatrice des opérations",
      ogDescription:
        "Professionnelle bilingue basée à Lyon, spécialisée en planification stratégique et excellence opérationnelle.",
    },
  },
};
