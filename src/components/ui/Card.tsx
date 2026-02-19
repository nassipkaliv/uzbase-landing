import type { ReactNode } from "react";
import { useTilt } from "../../hooks/useTilt";

interface CardProps {
  children: ReactNode;
  className?: string;
  highlighted?: boolean;
  tilt?: boolean;
}

export function Card({ children, className = "", highlighted = false, tilt = true }: CardProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>();

  return (
    <div
      ref={tilt ? ref : undefined}
      onMouseMove={tilt ? onMouseMove : undefined}
      onMouseLeave={tilt ? onMouseLeave : undefined}
      className={[
        "rounded-xl border p-6 lg:p-8 transition-all duration-300",
        highlighted
          ? "bg-surface border-accent/20 glow-accent-sm"
          : "bg-surface border-border/[0.06] hover:border-accent/15 hover:glow-accent-sm",
        className,
      ].join(" ")}
      style={{ willChange: tilt ? "transform" : undefined }}
    >
      {children}
    </div>
  );
}
