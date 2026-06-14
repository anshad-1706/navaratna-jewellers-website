interface SectionHeadingProps {
  title: string;
  action?: { label: string; href: string };
  centered?: boolean;
  subtitle?: string;
}

export function SectionHeading({ title, action, centered, subtitle }: SectionHeadingProps) {
  return (
    <div
      className={`mb-8 flex items-end justify-between gap-4 ${
        centered ? "flex-col items-center text-center" : ""
      }`}
    >
      <div className={centered ? "" : ""}>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">{title}</h2>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="h-0.5 w-10 bg-gold" />
          <span className="h-0.5 w-4 bg-gold/50" />
        </div>
        {subtitle && <p className="mt-3 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action && (
        <a
          href={action.href}
          className="shrink-0 text-xs sm:text-sm tracking-[0.15em] uppercase text-gold hover:text-foreground transition-colors border-b border-gold/40 pb-0.5"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}
