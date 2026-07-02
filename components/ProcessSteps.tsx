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
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step, i) => (
          <div key={step.title} className="rounded-card border border-bone bg-white p-md">
            <span className="text-caption font-medium text-navy">
              {String(i + 1).padStart(2, "0")}
            </span>
            <step.icon className="mt-2 h-6 w-6 text-navy" strokeWidth={1.75} aria-hidden="true" />
            <p className="mt-3 text-h4 text-black">{step.title}</p>
            <p className="mt-1.5 text-body text-graphite">{step.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
