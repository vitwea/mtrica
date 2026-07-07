import { LucideIcon, Check, Clock } from "lucide-react";
import Button from "./Button";

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
      className="group scroll-mt-24 flex flex-col rounded-card border border-bone bg-white p-md shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-card md:p-lg"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy shadow-sm transition-colors duration-200 group-hover:bg-navy-hover">
          <Icon className="h-5 w-5 text-white" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <h2 className="text-h4 text-black">{title}</h2>
      </div>

      <p className="mt-3 text-body text-graphite">{problem}</p>

      <ul className="mt-4 flex flex-col gap-2.5">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-ui text-graphite">
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-navy/8">
              <Check className="h-3 w-3 text-navy" strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        {timeframe && (
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-navy/8 px-3 py-1 text-caption font-medium text-navy">
            <Clock className="h-3 w-3" strokeWidth={2} aria-hidden="true" />
            {timeframe}
          </span>
        )}

        <Button
          href={ctaHref}
          variant="secondary"
          className="!min-h-[40px] !w-full !rounded-full !px-5 !py-2 !text-[13px] !font-semibold"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}