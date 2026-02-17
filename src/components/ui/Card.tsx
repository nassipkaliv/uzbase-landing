import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  highlighted?: boolean;
}

export function Card({ children, className = "", highlighted = false }: CardProps) {
  return (
    <div
      className={[
        "rounded-xl border p-6 lg:p-8 transition-all duration-300",
        highlighted
          ? "bg-surface border-accent/20 glow-accent-sm"
          : "bg-surface border-white/[0.06] hover:border-accent/15 hover:shadow-[0_0_30px_rgba(0,229,255,0.04)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
