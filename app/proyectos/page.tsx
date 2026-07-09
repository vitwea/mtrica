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

      <section className="py-sm md:py-md">
        <Container className="!max-w-none">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                index={index}
                sector={project.sector}
                title={project.title}
                result={project.resultHeadline}
                href={`/proyectos/${project.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="rounded-section border border-white/10 bg-navy-hover p-sm shadow-card md:p-md">
        <Container className="!px-0 text-center">
          <h2 className="text-h2CompactMobile text-white md:text-h2Compact">
            ¿Quieres un panel así para tu negocio?
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-ui text-white/60">
            Empieza con un diagnóstico gratuito — vemos qué datos tienes y qué
            dashboard tendría más impacto para ti.
          </p>
          <Button
            href="/contacto"
            variant="primary"
            className="mt-4 !min-h-[40px] !rounded-full !bg-accent !px-5 !py-2 !text-[13px] !font-semibold hover:!bg-accent-hover"
          >
            Solicitar consulta
          </Button>
        </Container>
      </section>
    </>
  );
}