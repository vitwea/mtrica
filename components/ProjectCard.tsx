import { BarChart3 } from "lucide-react";

type ProjectCardProps = {
  sector: string;
  title: string;
  result: string;
  href: string;
};

// Fase 6 (auditoría): la tarjeta vivía en bg-white dentro de una sección
// bg-white — invisible salvo por el borde. Pasa a bg-mist (regla de oro:
// sección white → tarjeta mist). La miniatura suma una retícula sutil para
// no ser un bloque plano, y la métrica —el dato más fuerte de la sección—
// pasa de 14px a 22px en accent para que se lea como el resultado, no como
// un detalle más.
export default function ProjectCard({
  sector,
  title,
  result,
  href,
}: ProjectCardProps) {
  const [percentage, ...resultRest] = result.split(" ");
  const resultDescription = resultRest.join(" ");

  return (
    <div className="overflow-hidden rounded-card border border-bone bg-mist shadow-sm">
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-navy-950">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(255,255,255,0.5) 24px, rgba(255,255,255,0.5) 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(255,255,255,0.5) 24px, rgba(255,255,255,0.5) 25px)",
          }}
          aria-hidden="true"
        />
        <BarChart3 className="relative h-9 w-9 text-accent/70" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="p-md">
        <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy">
          {sector}
        </span>
        <h3 className="mt-3.5 text-h4 text-black">{title}</h3>
        <p className="mt-2 text-[22px] font-bold leading-none text-accent">{percentage}</p>
        <p className="mt-1 text-ui text-graphite">{resultDescription}</p>
        <a
          href={href}
          className="mt-3.5 inline-block text-ui font-medium text-navy hover:underline underline-offset-4"
        >
          Ver caso completo →
        </a>
      </div>
    </div>
  );
}
