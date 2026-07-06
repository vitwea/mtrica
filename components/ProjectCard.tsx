import { BarChart3 } from "lucide-react";

type ProjectCardProps = {
  sector: string;
  title: string;
  result: string;
  href: string;
};

export default function ProjectCard({
  sector,
  title,
  result,
  href,
}: ProjectCardProps) {
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
        <BarChart3
          className="relative h-9 w-9 text-accent/70"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <div className="p-md">
        <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy">
          {sector}
        </span>

        <h3 className="mt-3.5 text-h4 text-black">{title}</h3>

        <p className="mt-2 text-[17px] font-bold leading-snug text-accent">
          {result}
        </p>

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
