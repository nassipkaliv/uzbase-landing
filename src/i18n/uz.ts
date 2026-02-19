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

  about: {
    overline: "Biz haqimizda",
    heading: "Biznes maqsadlarni foydalanuvchi ehtiyojlari bilan bog'laydigan tajriba loyihalaymiz",
    description:
      "Dizayn va dasturlashga strategik yondashuv — har bir qaror ma'lumotlarga asoslangan, mahsulotingiz nafaqat chiroyli ko'rinsin, balki biznesni oldinga sursin.",
    stats: [
      { value: "50+", label: "Loyihalar amalga oshirilgan" },
      { value: "98%", label: "Mijozlar mamnun" },
      { value: "2 hafta", label: "O'rtacha ishga tushirish" },
    ],
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
        title: "Marpla",
        url: "https://marpla.ru/",
        brief:
          "Wildberries sotuvchilari uchun analitika xizmati. Deshbordlar, SEO-modul va stavkalar tizimi bilan SaaS-platformani dizayn va dasturlash.",
        tags: ["UI/UX", "Dasturlash", "SaaS"],
        metrics: [
          { label: "Sotuvchilar", value: "1000+" },
          { label: "Modullar", value: "5" },
        ],
      },
      {
        title: "TopHeats",
        url: "https://topheats.ru/",
        brief:
          "Analitika va monitoring veb-ilovasi. To'liq tsikl — interfeys loyihalashdan deploygacha.",
        tags: ["UI/UX", "Dasturlash"],
        metrics: [
          { label: "Yuklash", value: "1.4s" },
          { label: "Lighthouse", value: "94" },
        ],
      },
      {
        title: "Meralit",
        url: "https://meralit.ru/",
        brief:
          "Sankt-Peterburgdagi qurilish kompaniyasi uchun korporativ sayt. Parallaks effektli minimalist dizayn.",
        tags: ["UI/UX", "Dasturlash"],
        metrics: [
          { label: "Konversiya", value: "+38%" },
          { label: "Lighthouse", value: "96" },
        ],
      },
    ],
  },

  process: {
    overline: "Jarayon",
    heading: "Qanday ishlaymiz",
    steps: [
      {
        title: "Strategiya",
        description:
          "Biznes, auditoriya va raqobatchilarni o'rganamiz. Brif tuzamiz, maqsadlarni belgilaymiz va muvaffaqiyat mezonlarini aniqlaymiz.",
      },
      {
        title: "Amalga oshirish",
        description:
          "Figma'da dizayn → React'da dasturlash. Birinchi haftadan staging-havola, haftalik demo va tuzatishlar.",
      },
      {
        title: "Ishga tushirish",
        description:
          "Deploy, analitika, kirishlarni topshirish. Ishga tushirgandan keyin 30 kun qo'llab-quvvatlash va o'sish rejasi.",
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
        name: "Aleksey Petrov",
        role: "CEO, Marpla",
        quote:
          "UZBASE boshqa ikki agentlik qila olmagan narsani qildi — tez ishlaydigan va konvertatsiya qiladigan SaaS-platforma. Birinchi oyda sotuvchilar soni ikki baravar oshdi.",
      },
      {
        name: "Dmitriy Sokolov",
        role: "Founder, TopHeats",
        quote:
          "Har bir bosqichda to'liq shaffoflik. Muddatidan oldin topshirdilar. Dizayn va kod sifati barcha kutganlarimizdan oshib tushdi.",
      },
      {
        name: "Andrey Vasilyev",
        role: "Direktor, Meralit",
        quote:
          "Bu shunchaki dizaynerlar emas — ular mahsulot jamoasi kabi o'ylashadi. Sayt premium ko'rinadi va har kuni arizalar olib keladi.",
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
