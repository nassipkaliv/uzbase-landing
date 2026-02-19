import { useEffect, useRef, useCallback } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  const observe = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the container itself
            entry.target.classList.add("visible");

            // Stagger-animate all [data-reveal] children
            const children = entry.target.querySelectorAll("[data-reveal]");
            children.forEach((child, i) => {
              const el = child as HTMLElement;
              el.style.transitionDelay = `${i * 80}ms`;
              el.classList.add("visible");
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return observe();
  }, [observe]);

  return ref;
}
