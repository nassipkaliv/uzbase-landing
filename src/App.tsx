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
import { CursorGlow } from "./components/ui/CursorGlow";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider defaultLocale="ru">
        <div className="min-h-screen bg-midnight dot-grid">
          <CursorGlow />
          <Navbar />
          <main>
            <Hero />
            <SocialProof />
            <About />
            <Services />
            <hr className="divider-subtle mx-auto max-w-2xl" />
            <Work />
            <Process />
            <Pricing />
            <Testimonials />
            <FAQ />
            <hr className="divider-subtle mx-auto max-w-2xl" />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
