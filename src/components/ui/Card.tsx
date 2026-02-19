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
          : "bg-surface border-border/[0.06] hover:border-accent/15 hover:glow-accent-sm",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
