interface SectionHeadingProps {
  overline: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  overline,
  heading,
  subtext,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignment} mb-12 lg:mb-16`}>
      <p data-reveal className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
        {overline}
      </p>
      <h2 data-reveal className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {heading}
      </h2>
      {subtext && (
        <p data-reveal className="mt-4 text-muted text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  );
}
