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
    openGraph: {
      title: project.title,
      description: project.resultHeadline,
      type: "article",
    },
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

        <span className="mt-4 inline-block rounded-full bg-navy/10 px-3 py-1 text-caption font-semibold uppercase tracking-wide text-navy">
          {project.sector}
        </span>
        <h1 className="mt-2 text-h2CompactMobile text-black md:text-h2Compact">{project.title}</h1>
        <p className="mt-2 text-body text-graphite">{project.clientProfile}</p>
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
      <section className="rounded-section border border-white/10 bg-navy-hover p-md shadow-card md:p-lg">
        <Container className="!px-0 max-w-4xl text-center">
          <h2 className="text-h2CompactMobile text-white md:text-h2Compact">
            Explora el panel interactivo
          </h2>
          <p className="mx-auto mt-2 text-body text-white/60">
            Interactúa con los filtros igual que lo haría el cliente — es el mismo Power BI, en directo.
          </p>

          <div className="mt-6">
            <PowerBIEmbed embedUrl={project.powerBiEmbedUrl} title={project.title} />
          </div>

          <p className="mt-4 text-caption text-white/40">
            Datos de muestra por confidencialidad del cliente.
          </p>
        </Container>
      </section>

      {/* CTA final */}
      <section className="rounded-section border border-white/10 bg-navy-hover p-sm shadow-card md:p-md">
        <Container className="!px-0 text-center">
          <h2 className="text-[20px] font-bold leading-snug text-white md:text-[26px]">
            ¿Quieres un panel así para tu negocio?
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-ui text-white/60">
            Empieza con un diagnóstico gratuito — vemos qué datos tienes y qué
            dashboard tendría más impacto para ti.
          </p>
          <Button
            href="/citas"
            variant="primary"
            className="mt-4 !min-h-[40px] !rounded-full !bg-accent !px-5 !py-2 !text-[13px] !font-semibold hover:!bg-accent-hover"
          >
            Solicitar diagnóstico gratuito
          </Button>
        </Container>
      </section>
    </>
  );
}