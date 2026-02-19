import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { AccordionItem } from "../ui/AccordionItem";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { useTranslation } from "../../i18n/LanguageContext";

export function FAQ() {
  const ref = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section id="faq" className="py-20 lg:py-28 spotlight-bottom">
      <Container>
        <div ref={ref} className="reveal">
          <SectionHeading
            overline={t.faq.overline}
            heading={t.faq.heading}
          />
          <div className="max-w-2xl mx-auto">
            {t.faq.items.map((item, index) => (
              <div key={index} data-reveal>
                <AccordionItem
                  question={item.question}
                  answer={item.answer}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
