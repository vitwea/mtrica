import { LucideIcon, Check } from "lucide-react";
import Container from "./Container";
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
  alt?: boolean; // fondo alterno (gris hueso) para separar secciones sin líneas
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
  alt = false,
}: ServiceDetailProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-lg ${alt ? "bg-bone/40" : "bg-white"}`}>
      <Container className="max-w-3xl">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-card bg-white border border-bone">
            <Icon className="h-6 w-6 text-navy" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h2 className="text-h3 text-black">{title}</h2>
            <p className="mt-2 text-bodyLg text-graphite">{problem}</p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-body text-graphite">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-navy" strokeWidth={2} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button href={ctaHref} variant="secondary">
                {ctaLabel}
              </Button>
              {timeframe && (
                <span className="text-ui text-graphite">{timeframe}</span>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
