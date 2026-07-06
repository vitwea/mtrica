import { LucideIcon, Check } from "lucide-react";

type ServiceDetailProps = {
  id: string;
  icon: LucideIcon;
  title: string;
  problem: string;
  includes: string[];
  timeframe?: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function ServiceDetail({
  id,
  icon: Icon,
  title,
  problem,
  includes,
  timeframe,
  ctaLabel,
  ctaHref,
}: ServiceDetailProps) {
  return (
    <div
      id={id}
      className="scroll-mt-24 flex flex-col rounded-card border border-bone bg-mist p-md md:p-lg"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
          <Icon className="h-5 w-5 text-navy" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <h2 className="text-h4 text-black">{title}</h2>
      </div>

      <p className="mt-3 text-body text-graphite">{problem}</p>

      <ul className="mt-4 flex flex-col gap-2">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-ui text-graphite">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy" strokeWidth={2} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        {timeframe && (
          <p className="mb-3 text-caption text-graphite/70">{timeframe}</p>
        )}

        <a
          href={ctaHref}
          className="text-ui font-medium text-navy hover:underline underline-offset-4"
        >
          {ctaLabel} →
        </a>
      </div>
    </div>
  );
}
