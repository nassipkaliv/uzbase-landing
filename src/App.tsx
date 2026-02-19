import { ThemeProvider } from "./theme/ThemeContext";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { SocialProof } from "./components/sections/SocialProof";
import { About } from "./components/sections/About";
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
    <ThemeProvider>
      <LanguageProvider defaultLocale="ru">
        <div className="min-h-screen bg-midnight dot-grid">
          <Navbar />
          <main>
            <Hero />
            <SocialProof />
            <About />
            <hr className="divider-glow mx-auto max-w-3xl" />
            <Services />
            <Work />
            <hr className="divider-subtle mx-auto max-w-2xl" />
            <Process />
            <Pricing />
            <hr className="divider-subtle mx-auto max-w-2xl" />
            <Testimonials />
            <FAQ />
            <hr className="divider-glow mx-auto max-w-3xl" />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
