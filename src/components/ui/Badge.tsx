interface BadgeProps {
  children: string;
  variant?: "default" | "accent";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "border-accent/20 text-accent bg-accent/5"
      : "border-border/10 text-muted bg-overlay/[0.03]";

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${styles}`}
    >
      {children}
    </span>
  );
}
