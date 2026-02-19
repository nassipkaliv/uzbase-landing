import { useCallback, useRef } from "react";

const MAX_ROTATION = 8; // degrees

export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const rafRef = useRef(0);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (0.5 - y) * MAX_ROTATION;
      const rotateY = (x - 0.5) * MAX_ROTATION;

      el.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    el.style.transform = "";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
