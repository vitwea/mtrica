import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Casos de éxito en Business Intelligence | Mtrica",
  description:
    "Proyectos reales de Power BI y automatización de datos para pymes españolas — con dashboards interactivos que puedes explorar tú mismo.",
};

export default function Proyectos() {
  return (
    <>
      <PageHeader
        eyebrow="Casos de éxito"
        title="Power BI real, no capturas de pantalla"
        subtitle="Explora los paneles tal y como los ve el cliente — filtra, navega y comprueba lo que puede hacer un dashboard bien construido."
        compact
      />

      <section className="py-2 md:py-3">
        <Container className="!max-w-none">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                sector={project.sector}
                title={project.title}
                result={project.resultHeadline}
                href={`/proyectos/${project.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="rounded-section border border-white/10 bg-navy-hover p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0 text-center">
          <h2 className="text-h2Mobile text-white md:text-h2">
            ¿Quieres un panel así para tu negocio?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-bodyLg text-white/60">
            Empieza con un diagnóstico gratuito — vemos qué datos tienes y qué
            dashboard tendría más impacto para ti.
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