export const supportedLocales = ["en", "es"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "en";

export function isSupportedLocale(value: string): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function getLocaleFromPathname(pathname: string | null): Locale {
  const firstSegment = pathname?.split("/").filter(Boolean)[0];

  return firstSegment && isSupportedLocale(firstSegment)
    ? firstSegment
    : defaultLocale;
}

export function localizePath(pathname: string | null, locale: Locale) {
  const path = pathname || "/";
  const withoutLocale = path.replace(/^\/(?:es)(?=\/|$)/, "") || "/";
  const suffix = withoutLocale === "/" ? "" : withoutLocale.replace(/^\/#/, "#");

  return locale === defaultLocale
    ? withoutLocale
    : `/${locale}${suffix}`;
}

export const messages = {
  en: {
    metadata: {
      title: "Gibwork | Find talent, find work",
      description:
        "Gibwork connects people and teams through reviewable tasks, open-source bounties, and wallet-based payouts.",
    },
    language: {
      label: "Language",
      english: "English",
      spanish: "Español",
    },
    nav: {
      about: "About",
      testimonial: "Testimonials",
      faq: "FAQ",
      docs: "Docs",
      openApp: "Open app",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    hero: {
      badge: "Introducing gibwork",
      heading: "Find talent, find work",
      description:
        "Whether you are searching for your next gig or seeking skilled people, our platform connects you with the right match.",
      cta: "Get started for free",
      poweredBy: "powered by",
    },
    partners: {
      eyebrow: "Brands that trust us",
      heading: "Partners we have collaborated with",
      description:
        "Gibwork is powered by a dedicated team of innovators and professionals committed to connecting talent with opportunities. Our team combines expertise in technology, design, and user experience to build and manage the platform, ensuring it serves the needs of both job seekers and employers. We strive to create a seamless experience that empowers users to find work or the right talent efficiently.",
    },
    work: {
      helpTab: "Looking for help",
      workTab: "Looking for work",
      helpHeading: "Get help from an expert",
      helpDescription:
        "Create work for others to complete and get the support you need to achieve your goals.",
      bountyTitle: "Open-source bounty",
      bountyDescription: "Incentivize a pull request made from a GitHub issue.",
      taskTitle: "Simple task",
      taskDescription: "Small tasks achievable in a few hours.",
      servicesTitle: "Services",
      servicesDescription: "Offer your skills and connect with users for custom services.",
      workHeading: "Get paid for your expertise",
      workDescription:
        "Discover work opportunities you can do, complete the work, and build your track record.",
      examples: {
        landing: "Design Gibwork's new landing page",
        zircon: "Create developer challenges for Zircon",
        slug: "Use slug- to share a set of links on X or Reddit",
      },
    },
    testimonials: {
      eyebrow: "Testimonials",
      heading: "Hear what our users have to say",
      description:
        "From freelancers finding their next gig to companies discovering top talent.",
    },
    cta: {
      heading: "Start exploring",
      description:
        "Check out Gibwork and create or complete your very first piece of work.",
      button: "Get started",
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          question: "How do I create work on Gibwork?",
          answer:
            "Under the earnings display on the app home page, use the Create buttons for open-source bounties and tasks. They guide you through creating and posting work on the platform.",
        },
        {
          question: "What is the difference between a bounty and a task?",
          answer:
            "A bounty is a GitHub issue with a monetary reward. A task is a specific, often smaller job that needs to be completed.",
        },
        {
          question: "How do I get paid for completed work?",
          answer:
            "Once your work is approved by the creator, the funds are released to your non-custodial wallet.",
        },
        {
          question: "What payment methods does Gibwork support?",
          answer:
            "Payments are made through wallets, with the approved reward sent directly to your wallet as crypto or stablecoins.",
        },
      ],
    },
    footer: {
      heading: "Join our community",
      description:
        "Meet like-minded people and find work opportunities easily.",
      quickLinks: "Quick links",
      resources: "Resources",
      privacy: "Privacy policy",
      madeBy: "Made with ♥ by Gibwork",
    },
  },
  es: {
    metadata: {
      title: "Gibwork | Encuentra talento, encuentra trabajo",
      description:
        "Gibwork conecta a personas y equipos mediante tareas verificables, bounties de código abierto y pagos a cartera.",
    },
    language: {
      label: "Idioma",
      english: "English",
      spanish: "Español",
    },
    nav: {
      about: "Acerca de",
      testimonial: "Testimonios",
      faq: "Preguntas frecuentes",
      docs: "Documentación",
      openApp: "Abrir app",
      openMenu: "Abrir menú de navegación",
      closeMenu: "Cerrar menú de navegación",
    },
    hero: {
      badge: "Conoce Gibwork",
      heading: "Encuentra talento, encuentra trabajo",
      description:
        "Tanto si buscas tu próximo proyecto como si necesitas personas con experiencia, nuestra plataforma te conecta con la opción adecuada.",
      cta: "Comienza gratis",
      poweredBy: "impulsado por",
    },
    partners: {
      eyebrow: "Marcas que confían en nosotros",
      heading: "Socios con los que hemos colaborado",
      description:
        "Gibwork cuenta con un equipo de innovadores y profesionales dedicado a conectar talento con oportunidades. Combinamos experiencia en tecnología, diseño y experiencia de usuario para crear y operar la plataforma, atendiendo a quienes buscan trabajo y a quienes necesitan colaboradores. Queremos que encontrar trabajo o talento sea sencillo y eficiente.",
    },
    work: {
      helpTab: "Busco ayuda",
      workTab: "Busco trabajo",
      helpHeading: "Recibe ayuda de una persona experta",
      helpDescription:
        "Crea trabajo para que otras personas lo completen y recibe el apoyo que necesitas para alcanzar tus objetivos.",
      bountyTitle: "Bounty de código abierto",
      bountyDescription: "Incentiva un pull request vinculado a una incidencia de GitHub.",
      taskTitle: "Tarea sencilla",
      taskDescription: "Tareas pequeñas que se pueden completar en pocas horas.",
      servicesTitle: "Servicios",
      servicesDescription: "Ofrece tus habilidades y conéctate con personas que necesiten servicios a medida.",
      workHeading: "Cobra por tu experiencia",
      workDescription:
        "Descubre oportunidades que puedes realizar, completa el trabajo y construye tu trayectoria.",
      examples: {
        landing: "Diseña la nueva landing page de Gibwork",
        zircon: "Crea retos para desarrolladores de Zircon",
        slug: "Usa slug- para compartir un conjunto de enlaces en X o Reddit",
      },
    },
    testimonials: {
      eyebrow: "Testimonios",
      heading: "Lo que dicen nuestras personas usuarias",
      description:
        "Desde freelancers que encuentran su próximo proyecto hasta empresas que descubren talento destacado.",
    },
    cta: {
      heading: "Empieza a explorar",
      description:
        "Conoce Gibwork y crea o completa tu primer trabajo.",
      button: "Comenzar",
    },
    faq: {
      heading: "Preguntas frecuentes",
      items: [
        {
          question: "¿Cómo creo trabajo en Gibwork?",
          answer:
            "En la página de inicio de la app, debajo del resumen de ganancias, usa los botones Crear para bounties de código abierto y tareas. Te guiarán para crear y publicar trabajo en la plataforma.",
        },
        {
          question: "¿Cuál es la diferencia entre un bounty y una tarea?",
          answer:
            "Un bounty es una incidencia de GitHub con una recompensa monetaria. Una tarea es un trabajo específico, normalmente más pequeño, que debe completarse.",
        },
        {
          question: "¿Cómo recibo el pago por un trabajo completado?",
          answer:
            "Cuando la persona creadora aprueba tu trabajo, los fondos se liberan a tu cartera sin custodia.",
        },
        {
          question: "¿Qué métodos de pago admite Gibwork?",
          answer:
            "Los pagos se realizan mediante carteras: la recompensa aprobada se envía directamente a tu cartera como criptoactivos o stablecoins.",
        },
      ],
    },
    footer: {
      heading: "Únete a nuestra comunidad",
      description:
        "Conecta con personas afines y encuentra oportunidades de trabajo fácilmente.",
      quickLinks: "Enlaces rápidos",
      resources: "Recursos",
      privacy: "Política de privacidad",
      madeBy: "Hecho con ♥ por Gibwork",
    },
  },
} as const;

export function metadataForLocale(locale: Locale) {
  const copy = messages[locale].metadata;
  const canonicalPath = locale === defaultLocale ? "/" : `/${locale}`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/",
        es: "/es",
        "x-default": "/",
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: canonicalPath,
      locale: locale === "es" ? "es_MX" : "en_US",
      images: ["https://cdn.gib.work/metadata/default.png"],
    },
  };
}
