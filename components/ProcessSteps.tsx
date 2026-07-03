import { LucideIcon } from "lucide-react";
import Container from "./Container";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// ProcessSteps — franja única con divisores, se lee como secuencia
// conectada (1 → 2 → 3 → 4).
// Fase 6 (auditoría): numeral fantasma sube de text-accent/10 (invisible,
// parecía un bug de CSS) a text-accent/20 y de text-h3 a text-[40px] para
// que se note como recurso tipográfico deliberado. Divisor divide-bone
// (casi invisible sobre blanco) → divide-black/8.
export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <Container>
      <div className="grid grid-cols-1 divide-y divide-black/8 rounded-card border border-bone bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="p-md">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50">
                <step.icon className="h-5 w-5 text-navy" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <span className="text-[40px] font-bold leading-none tabular-nums text-accent/20">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-3 text-h4 text-black">{step.title}</p>
            <p className="mt-1.5 text-body text-graphite">{step.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
