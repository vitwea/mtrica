type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  compact?: boolean;
};

export default function PageHeader({ eyebrow, title, subtitle, compact = false }: PageHeaderProps) {
  return (
    <section className="rounded-section border border-white/10 bg-navy-hover shadow-card">
      <div className={`mx-auto max-w-8xl px-6 text-center md:px-8 ${
        compact ? "pt-5 pb-5 md:pt-8 md:pb-8" : "pt-8 pb-8 md:pt-12 md:pb-12"
      }`}>
        <p className="text-ui text-accent">{eyebrow}</p>
        <h1 className={`text-white ${compact ? "mt-3 text-h1PageCompactMobile md:text-h1PageCompact" : "mt-4 text-h2Mobile md:text-h1"}`}>
          {title}
        </h1>
        <p className={`text-white/70 ${compact ? "mt-3" : "mt-5"}`}>{subtitle}</p>
      </div>
    </section>
  );
}