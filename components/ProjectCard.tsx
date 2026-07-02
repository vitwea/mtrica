import { BarChart3 } from "lucide-react";

type ProjectCardProps = {
  sector: string;
  title: string;
  result: string;
  href: string;
};

// Nota: la miniatura usa un placeholder de icono hasta tener capturas reales
// de dashboards de clientes (ver Fase 2, sección 2.3).
export default function ProjectCard({
  sector,
  title,
  result,
  href,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-card border border-bone bg-white">
      <div className="flex h-36 items-center justify-center bg-bone">
        <BarChart3 className="h-9 w-9 text-graphite" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="p-md">
        <span className="inline-block rounded-full bg-bone px-3 py-1 text-caption font-medium text-graphite">
          {sector}
        </span>
        <h3 className="mt-3.5 text-h4 text-black">{title}</h3>
        <p className="mt-1.5 text-ui text-navy">{result}</p>
        <a
          href={href}
          className="mt-3.5 inline-block text-ui text-navy hover:underline underline-offset-4"
        >
          Ver caso completo →
        </a>
      </div>
    </div>
  );
}
