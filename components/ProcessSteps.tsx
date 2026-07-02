import { LucideIcon } from "lucide-react";
import Container from "./Container";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// ProcessSteps — Fase 4 (v2): franja única con divisores en vez de 4
// tarjetas sueltas. Antes era visualmente idéntico a ServiceCard (icono +
// título + texto en una tarjeta con borde), lo que lo hacía parecer una
// simple repetición de "Cómo te ayudamos". Ahora se lee como una secuencia
// conectada (1 → 2 → 3 → 4), no como opciones intercambiables.
export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <Container>
      <div className="grid grid-cols-1 divide-y divide-bone rounded-card border border-bone bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="p-md">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50">
                <step.icon className="h-5 w-5 text-navy" strokeWidth={1.75} aria-hidden="true" />
              </div>
              <span className="text-h3 font-semibold text-bone">
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
