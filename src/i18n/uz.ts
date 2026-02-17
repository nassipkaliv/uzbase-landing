import type { Translations } from "./types";

export const uz: Translations = {
  nav: {
    links: {
      services: "Xizmatlar",
      work: "Keyslar",
      process: "Jarayon",
      pricing: "Narxlar",
      faq: "FAQ",
      contact: "Aloqa",
    },
    cta: "Loyihani muhokama qilish",
  },

  hero: {
    headlineBefore: "Natija beradigan raqamli mahsulotlar ",
    headlineAccent: "yaratamiz",
    headlineAfter: "",
    subtext:
      "Biz — dizayn va dasturlash studiyasi. Biznesga o'ylab ishlangan saytlar, kuchli brending va ishlaydigan texnologiyalar orqali o'sishga yordam beramiz.",
    ctaPrimary: "Loyihani muhokama qilish",
    ctaSecondary: "Keyslarni ko'rish",
    trustPoints: [
      "2–4 haftada ishga tushirish",
      "React / Next.js / Tailwind",
      "Belgilangan narx",
    ],
  },

  socialProof: {
    overline: "Ambitsiyali kompaniyalar bizga ishonadi",
  },

  services: {
    overline: "Xizmatlar",
    heading: "Raqamli o'sish uchun kerak bo'lgan hamma narsa",
    items: [
      {
        title: "UI/UX Dizayn",
        description:
          "Foydalanuvchilarga tushunarli va konversiya keltiradigan interfeyslar loyihalaymiz. Tadqiqot, vayrfreymlar, Figma'da tayyor maketlar.",
      },
      {
        title: "Veb-dasturlash",
        description:
          "React va Next.js da tez va adaptiv saytlar. Toza kod, SEO-optimallashtirish, mukammal Lighthouse ball.",
      },
      {
        title: "Brending va aydentika",
        description:
          "Brendingizning vizual tilini yaratamiz — logotip, rang tizimi, tipografiya, jamoa uchun qo'llanma.",
      },
      {
        title: "Qo'llab-quvvatlash va rivojlantirish",
        description:
          "Ishga tushirgandan keyin tashlab ketmaymiz. Analitika, A/B-testlar, yaxshilashlar va biznes o'sishi bilan kengaytirish.",
      },
    ],
  },

  work: {
    overline: "Keyslar",
    heading: "Biz faxrlanadigan loyihalar",
    viewCase: "Keysni ko'rish →",
    cases: [
      {
        title: "Vertex AI Platform",
        brief:
          "AI-startap uchun landing va dizayn tizimi. Konversiya va yuklash tezligiga e'tibor.",
        tags: ["UI/UX", "Dasturlash"],
        metrics: [
          { label: "Konversiya", value: "+42%" },
          { label: "Yuklash", value: "1.2s" },
        ],
      },
      {
        title: "NovaPay Fintech",
        brief:
          "Fintech kompaniya uchun to'liq rebrending va korporativ sayt. Logotipdan kodgacha.",
        tags: ["Brending", "UI/UX", "Dasturlash"],
        metrics: [
          { label: "Rad etish", value: "−34%" },
          { label: "Ro'yxatdan o'tish", value: "+28%" },
        ],
      },
      {
        title: "GreenField App",
        brief:
          "AgriTech platforma uchun marketing sayti. Minimalist dizayn, maksimal konversiya.",
        tags: ["UI/UX", "Dasturlash"],
        metrics: [
          { label: "Lidlar", value: "3×" },
          { label: "Lighthouse", value: "97" },
        ],
      },
    ],
  },

  process: {
    overline: "Jarayon",
    heading: "Ishga tushirishgacha to'rt qadam",
    steps: [
      {
        title: "Tanishuv",
        description:
          "30 daqiqalik qo'ng'iroq. Vazifa, maqsadlar va auditoriyani tushunib olamiz. Siz brif va tijorat taklifi olasiz.",
      },
      {
        title: "Dizayn",
        description:
          "Vayrfreymlar → UI-konsept → Figma'da yakuniy maketlar. Har bir bosqichni ko'rasiz va tasdiqiaysiz.",
      },
      {
        title: "Dasturlash",
        description:
          "React da pixel-perfect verstka. Birinchi haftadan staging-havola. Haftalik demo-ko'rsatuvlar.",
      },
      {
        title: "Ishga tushirish",
        description:
          "Deploy, analitika sozlash, kirishlarni topshirish. Ishga tushirgandan keyin 30 kun bepul qo'llab-quvvatlash.",
      },
    ],
  },

  pricing: {
    overline: "Tariflar",
    heading: "Shaffof narxlar, kutilmagan xarajatlarsiz",
    subtext:
      "Aniq narx — bepul konsultatsiyadan keyin. Soatlar uchun emas, natija uchun to'laysiz.",
    mostPopular: "Mashhur tanlov",
    tiers: [
      {
        name: "Landing",
        price: "$2,500 dan",
        description: "Konvertatsiya qiladigan bir sahifali sayt.",
        features: [
          "5 tagacha ekran",
          "Figma'da dizayn",
          "Adaptiv (mobil + desktop)",
          "Asosiy SEO",
          "1 bosqich tuzatish",
        ],
        cta: "Tanlash",
      },
      {
        name: "Korporativ sayt",
        price: "$5,000 dan",
        description:
          "O'sayotgan kompaniya uchun ko'p sahifali sayt.",
        features: [
          "15 tagacha sahifa",
          "UX-tadqiqot",
          "CMS integratsiya",
          "Tezlik optimallashtirish",
          "Analitika va treking",
          "2 bosqich tuzatish",
        ],
        cta: "Loyihani muhokama qilish",
      },
      {
        name: "Kalit topshiriq",
        price: "So'rov bo'yicha",
        description:
          "Veb-ilovalar, murakkab platformalar va uzoq muddatli hamkorlik.",
        features: [
          "Hajm bo'yicha cheklovsiz",
          "To'liq brending",
          "Maxsus animatsiyalar",
          "Ustuvor qo'llab-quvvatlash",
          "Ajratilgan menejer",
        ],
        cta: "Bog'lanish",
      },
    ],
  },

  testimonials: {
    overline: "Fikrlar",
    heading: "Mijozlar nima deydi",
    items: [
      {
        name: "Amir Karimov",
        role: "CEO, Vertex AI",
        quote:
          "UZBASE boshqa ikki agentlik qila olmagan narsani qildi — tezkor yuklanadigan va konvertatsiya qiladigan sayt. Birinchi oyda konversiya 42% ga oshdi.",
      },
      {
        name: "Lena Myuller",
        role: "Head of Marketing, NovaPay",
        quote:
          "Har bir bosqichda to'liq shaffoflik. Muddatidan oldin topshirdilar. Dizayn va kod sifati barcha kutganlarimizdan oshib tushdi.",
      },
      {
        name: "Devid Chen",
        role: "Founder, GreenField",
        quote:
          "Bu shunchaki dizaynerlar emas — ular mahsulot jamoasi kabi o'ylashadi. Har bir qaror ma'lumotlar va sog'lom fikr bilan asoslangan.",
      },
    ],
  },

  faq: {
    overline: "FAQ",
    heading: "Ko'p beriladigan savollarga javoblar",
    items: [
      {
        question: "Loyiham qancha vaqt oladi?",
        answer:
          "Landing — 2–3 hafta. Ko'p sahifali sayt — 4–6 hafta. Aniq muddatlarni konsultatsiyada muhokama qilamiz va shartnomada belgilaymiz.",
      },
      {
        question: "Narxga nima kiradi?",
        answer:
          "Dizayn, dasturlash, adaptiv, asosiy SEO va tuzatish bosqichlari. Hosting va domen alohida to'lanadi. Hammasini tijorat taklifida belgilaymiz — yashirin to'lovlarsiz.",
      },
      {
        question: "Boshqa mamlakatlardan mijozlar bilan ishlaysizmi?",
        answer:
          "Ha. Mijozlarimizning aksariyati MDH va xorijdan. Telegram, Notion va haftalik qo'ng'iroqlar orqali masofaviy ishlaymiz.",
      },
      {
        question: "Qanday texnologiyalar ishlatiladi?",
        answer:
          "React, Next.js, TypeScript, Tailwind CSS. Kontent uchun — Sanity yoki Strapi. Texnologiyani vazifaga qarab tanlaymiz.",
      },
      {
        question: "Jarayonda taraqqiyotni ko'rish mumkinmi?",
        answer:
          "Albatta. Birinchi haftadan staging-havola, haftalik hisobotlar va har bir bosqichda demo-qo'ng'iroqlar.",
      },
      {
        question: "Ishga tushirgandan keyin nima bo'ladi?",
        answer:
          "30 kun bepul qo'llab-quvvatlash. Keyin — xizmat ko'rsatish paketlari: analitika, yaxshilashlar, A/B-testlar va kengaytirish.",
      },
    ],
  },

  contact: {
    overline: "Aloqa",
    heading: "Keling, ajoyib narsa yarataylik",
    pitch:
      "Loyihangiz haqida ayting — biz 24 soat ichida dastlabki baho va harakat rejasi bilan javob beramiz.",
    emailLabel: "hello@uzbase.io",
    telegramLabel: "@uzbase",
    form: {
      nameLabel: "Ism",
      namePlaceholder: "Ismingiz",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Loyiha haqida",
      messagePlaceholder: "Nima yaratmoqchisiz, aytib bering…",
      submit: "Ariza yuborish",
    },
    toast: "Ariza yuborildi! Tez orada siz bilan bog'lanamiz.",
  },

  footer: {
    tagline: "Raqamli mahsulotlar dizayni va dasturlash",
    copyright: "\u00A9 2026 UZBASE. Barcha huquqlar himoyalangan.",
  },
};
