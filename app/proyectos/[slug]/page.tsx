import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import PowerBIEmbed from "@/components/PowerBIEmbed";
import { projects } from "@/lib/projects";
import ProjectStoryline from "@/components/ProjectStoryline";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Casos de éxito Mtrica`,
    description: project.problem,
  };
}

export default async function ProyectoDetalle({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();


  return (
    <>
      {/* Cabecera del caso */}
        <section className="rounded-section border border-black/10 bg-white py-sm px-md shadow-card md:py-md md:px-lg">
          <Container className="!px-0 max-w-3xl">
            <Link
              href="/proyectos"
              className="flex items-center gap-1.5 text-ui text-graphite hover:text-black"
            >
              <ArrowLeft className="h-4 w-4" />
              Todos los casos de éxito
            </Link>

            <span className="mt-4 inline-block rounded-full bg-navy/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy">
              {project.sector}
            </span>
            <h1 className="mt-2 text-h4Mobile text-black md:text-h3">{project.title}</h1>
            <p className="mt-2 text-bodyMd text-graphite">{project.clientProfile}</p>
          </Container>
        </section>


    {/* Problema → Solución → Impacto, storyline horizontal */}
<section className="py-sm md:py-md">
  <Container className="!px-0 max-w-6xl">
    <ProjectStoryline
      problem={project.problem}
      solution={project.solution}
      impact={project.impact}
    />
  </Container>
</section>

      {/* Panel interactivo */}
      <section className="rounded-section border border-white/10 bg-navy-950 p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0 max-w-4xl text-center">
          <h2 className="text-h3 text-white md:text-h2">Explora el panel interactivo</h2>
          <p className="mx-auto mt-2 text-body text-white/60">
            Interactúa con los filtros igual que lo haría el cliente — es el mismo Power BI, en directo.
          </p>

          <div className="mt-8">
            <PowerBIEmbed embedUrl={project.powerBiEmbedUrl} title={project.title} />
          </div>

          <p className="mt-4 text-caption text-white/40">
            Datos de muestra por confidencialidad del cliente.
          </p>
        </Container>
      </section>

      {/* CTA final */}
      <section className="rounded-section border border-white/10 bg-navy-hover p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0 text-center">
          <h2 className="text-h2Mobile text-white md:text-h2">
            ¿Quieres resolver algo parecido en tu empresa?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-bodyLg text-white/60">
            El diagnóstico gratuito te dice, en 30 minutos, si tu caso encaja
            y por dónde empezar.
          </p>
          <Button
            href="/citas"
            variant="primary"
            className="mt-6 !min-h-[52px] !bg-accent !px-8 !py-3.5 !text-[15px] !font-semibold !shadow-lg !shadow-accent/25 hover:!bg-accent-hover"
          >
            Solicitar diagnóstico gratuito
          </Button>
        </Container>
      </section>
    </>
  );
}