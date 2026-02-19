export type Locale = "ru" | "uz";

export interface ServiceItem {
  title: string;
  description: string;
}

export interface CaseItem {
  title: string;
  brief: string;
  url: string;
  tags: string[];
  metrics: { label: string; value: string }[];
}

export interface StepItem {
  title: string;
  description: string;
}

export interface TierItem {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Translations {
  nav: {
    links: {
      services: string;
      work: string;
      process: string;
      pricing: string;
      faq: string;
      contact: string;
    };
    cta: string;
  };

  hero: {
    headlineBefore: string;
    headlineAccent: string;
    headlineAfter: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustPoints: [string, string, string];
  };

  socialProof: {
    overline: string;
  };

  about: {
    overline: string;
    heading: string;
    description: string;
    stats: [StatItem, StatItem, StatItem];
  };

  services: {
    overline: string;
    heading: string;
    items: [ServiceItem, ServiceItem, ServiceItem, ServiceItem];
  };

  work: {
    overline: string;
    heading: string;
    viewCase: string;
    cases: [CaseItem, CaseItem, CaseItem];
  };

  process: {
    overline: string;
    heading: string;
    steps: [StepItem, StepItem, StepItem];
  };

  pricing: {
    overline: string;
    heading: string;
    subtext: string;
    mostPopular: string;
    tiers: [TierItem, TierItem, TierItem];
  };

  testimonials: {
    overline: string;
    heading: string;
    items: [TestimonialItem, TestimonialItem, TestimonialItem];
  };

  faq: {
    overline: string;
    heading: string;
    items: [FaqItem, FaqItem, FaqItem, FaqItem, FaqItem, FaqItem];
  };

  contact: {
    overline: string;
    heading: string;
    pitch: string;
    emailLabel: string;
    telegramLabel: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
    };
    toast: string;
  };

  footer: {
    tagline: string;
    copyright: string;
  };
}
