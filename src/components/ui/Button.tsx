import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
};

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type AsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type ButtonProps = AsButton | AsAnchor;

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-midnight font-semibold hover:bg-accent-hover glow-accent-sm hover:glow-accent transition-all duration-200",
  outline:
    "border border-white/10 text-[#F5F5F7] hover:border-accent/40 hover:text-accent transition-all duration-200",
  ghost:
    "text-accent hover:text-accent-hover transition-colors duration-200",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md" } = props;

  const className = [
    "inline-flex items-center justify-center rounded-lg font-medium",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight",
    "disabled:opacity-50 disabled:pointer-events-none",
    "cursor-pointer",
    sizeClasses[size],
    variantClasses[variant],
    props.className ?? "",
  ].join(" ");

  if (props.as === "a") {
    const { as: _, variant: _v, size: _s, ...anchorProps } = props as AsAnchor;
    return <a {...anchorProps} className={className} />;
  }

  const { as: _, variant: _v, size: _s, ...buttonProps } = props as AsButton;
  return <button type="button" {...buttonProps} className={className} />;
}
