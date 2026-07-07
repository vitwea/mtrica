import { LucideIcon } from "lucide-react";
import Container from "./Container";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <Container>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="group relative rounded-card border border-black/10 bg-mist p-md pt-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Badge de número — insignia sólida superpuesta al borde superior */}
            <div className="absolute -top-4 left-md flex h-8 w-8 items-center justify-center rounded-full bg-navy text-[13px] font-bold text-white shadow-md ring-4 ring-accent/15">
              {i + 1}
            </div>

            {/* Conector horizontal entre steps (solo desktop) */}
            {i < steps.length - 1 && (
              <div className="absolute right-0 top-1/2 z-10 hidden md:flex items-center translate-x-[50%] -translate-y-1/2">
                <div className="h-2 w-2 rounded-full bg-black/20"></div>
                <div className="h-px w-8 bg-black/10 ml-2"></div>
              </div>
            )}

            {/* Conector vertical entre steps apilados (solo mobile/tablet) */}
            {i < steps.length - 1 && (
              <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 translate-y-[calc(100%+4px)] flex-col items-center md:hidden">
                <div className="h-4 w-px bg-black/10"></div>
                <div className="h-2 w-2 rounded-full bg-black/20"></div>
              </div>
            )}

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white transition-colors duration-200 group-hover:bg-navy">
              <step.icon
                className="h-5 w-5 text-navy transition-colors duration-200 group-hover:text-white"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </div>

            <p className="mt-3 text-h4 text-black">{step.title}</p>
            <p className="mt-1.5 text-body text-graphite">{step.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}