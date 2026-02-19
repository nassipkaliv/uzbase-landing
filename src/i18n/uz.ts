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
      "Biz — dizayn va dasturlash studiyasi. Saytlar, mobil ilovalar, Telegram botlar, desktop dasturlar — g'oyadan ishga tushirishgacha to'liq tsikl.",
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
        title: "Veb-saytlar",
        description:
          "Landinglar, korporativ saytlar, onlayn do'konlar. Adaptiv dizayn, SEO-optimallashtirish, yuqori yuklash tezligi.",
      },
      {
        title: "Telegram botlar",
        description:
          "Biznes jarayonlarni avtomatlashtirish, buyurtma qabul qilish, CRM integratsiya. Qulay interfeys bilan har qanday murakkablikdagi botlar.",
      },
      {
        title: "Mobil dasturlash",
        description:
          "iOS va Android uchun nativ va krossplatforma ilovalar. G'oyadan App Store va Google Play'da nashr qilishgacha.",
      },
      {
        title: "Desktop ilovalar",
        description:
          "Windows, macOS va Linux uchun dasturlar. Zamonaviy UI va yuqori samaradorlikka ega ish stoli ilovalari.",
      },
      {
        title: "UI/UX Dizayn",
        description:
          "Foydalanuvchilarga tushunarli va konversiya keltiradigan interfeyslar loyihalaymiz. Tadqiqot, vayrfreymlar, Figma'da maketlar.",
      },
      {
        title: "Takomillashtirish va qo'llab-quvvatlash",
        description:
          "Mavjud mahsulotlaringizni rivojlantiramiz va qo'llab-quvvatlaymiz. Refaktoring, yangi funksional, xatolarni tuzatish, texnik yordam.",
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
        image: "/img/works/marplaLanding.png",
        brief: "Wildberries sotuvchilari uchun SaaS analitika platformasi",
        tags: ["SaaS", "React"],
      },
      {
        title: "Bonne Clinique",
        url: "#",
        image: "/img/works/bnImage.png",
        brief: "Ko'p tarmoqli sog'liqni saqlash va go'zallik markazi",
        tags: ["Korporativ", "Tibbiyot"],
      },
      {
        title: "Byuro 1:36",
        url: "#",
        image: "/img/works/buroLanding.png",
        brief: "Sovg'alar, korporativ sovg'alar va POS-materiallar",
        tags: ["Landing", "E-commerce"],
      },
      {
        title: "LPMS",
        url: "#",
        image: "/img/works/lpmsLanding.png",
        brief: "Past bosim ostida shakllantirish — sanoat B2B",
        tags: ["Korporativ", "B2B"],
      },
      {
        title: "Robert AI",
        url: "#",
        image: "/img/works/airobertLanding.png",
        brief: "Blokcheynda AI video yaratish platformasi",
        tags: ["Web3", "AI"],
      },
      {
        title: "ProDent",
        url: "#",
        image: "/img/works/proDentLanding.png",
        brief: "Stomatologiya klinikasi sayti",
        tags: ["Tibbiyot", "Landing"],
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
      {
        question: "Shoshilinch buyurtmalar qabul qilasizmi?",
        answer:
          "Ha, biz shoshilinch loyihalar bilan ishlaymiz. Agar bir hafta ichida ishga tushirish kerak bo'lsa — hajm, ustuvorliklar va jamoani dedlayningizga moslashtiramiz. Shoshilinch buyurtmalar narxi murakkablikka qarab 30% dan boshlab ustama bilan hisoblanadi.",
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
