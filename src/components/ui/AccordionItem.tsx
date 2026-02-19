import { useState, useRef, useEffect, useCallback } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    updateHeight();
  }, [updateHeight]);

  return (
    <div className="border-b border-border/[0.06]">
      <button
        type="button"
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-lg"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className="text-foreground font-medium text-base lg:text-lg pr-4 group-hover:text-accent transition-colors duration-200">
          {question}
        </span>
        <span
          className={`text-accent text-xl flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        style={{ maxHeight: isOpen ? height : 0 }}
        className="overflow-hidden transition-all duration-300 ease-out"
      >
        <div ref={contentRef} className="pb-5 text-muted leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
