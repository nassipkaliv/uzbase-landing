import { LanguageProvider } from "./i18n/LanguageContext";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { SocialProof } from "./components/sections/SocialProof";
import { Services } from "./components/sections/Services";
import { Work } from "./components/sections/Work";
import { Process } from "./components/sections/Process";
import { Pricing } from "./components/sections/Pricing";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <LanguageProvider defaultLocale="ru">
      <div className="min-h-screen bg-midnight">
        <Navbar />
        <main>
          <Hero />
          <SocialProof />
          <Services />
          <Work />
          <Process />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
