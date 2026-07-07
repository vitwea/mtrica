import Link from "next/link";
import { FileX, Clock, EyeOff, Search, BarChart3, GraduationCap, LifeBuoy } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonial from "@/components/Testimonial";
import Button from "@/components/Button";
import { projects } from "@/lib/projects";

// Fase 7: "Excels desconectados" se marca como el problema ancla —
// es el síntoma más reconocible en pymes y el caso de uso más directo de
// Power BI, así que es la única tarjeta con `fix` (la pista de solución).
// Las otras dos quedan sin decorar a propósito: el contraste hace el
// trabajo de jerarquía, no hace falta resaltar las tres.
const problems = [
  {
    icon: FileX,
    title: "Excels desconectados",
    description: "Cada área tiene su propia versión de la verdad.",
    featured: true,
    fix: "Un dashboard en Power BI conectado a tus datos reales lo elimina por completo.",
  },
  {
    icon: Clock,
    title: "Cierres a mano cada mes",
    description: "Horas copiando y pegando informes.",
  },
  {
    icon: EyeOff,
    title: "Decisiones a ciegas",
    description: "Sabes cómo fue el mes pasado, no cómo va este.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Vemos qué datos tienes y qué decisiones podrían mejorar.",
  },
  {
    icon: BarChart3,
    title: "Dashboards y automatización",
    description:
      "Construimos tus dashboards en Power BI y automatizamos los informes, conectados a tus datos reales.",
  },
  {
    icon: GraduationCap,
    title: "Formación",
    description: "Tu equipo aprende a usarlos con autonomía.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte continuo",
    description: "Evolucionamos los paneles a medida que cambia tu negocio.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — navy-950 + acento */}
      <Hero />

      {/* Problema → agitación */}
      <section className="rounded-section border border-black/10 bg-white p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0">
          <h2 className="mx-auto max-w-5xl text-center text-h3tMobile text-black md:text-h3">
            Casi siempre es el mismo problema y es {" "}
            <span className="underline decoration-accent/60 underline-offset-[6px]">
              el más fácil de resolver
            </span>
          </h2>

          <div className="mt-md grid grid-cols-1 gap-4 md:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className={`group rounded-card border p-md shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card ${
                  problem.featured
                    ? "border-accent/40 bg-mist"
                    : "border-bone bg-mist"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm transition-colors duration-200 group-hover:bg-navy">
                    <problem.icon
                      className="h-5 w-5 text-navy transition-colors duration-200 group-hover:text-white"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                  {problem.featured && (
                    <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
                      El más habitual
                    </span>
                  )}
                </div>
                <p className="text-h4 text-black">{problem.title}</p>
                <p className="mt-1.5 text-body text-graphite">
                  {problem.description}
                </p>
                {problem.fix && (
                  <p className="mt-3 border-t border-accent/15 pt-3 text-ui text-accent">
                    {problem.fix}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Cómo trabajamos — contenedor compacto (p-md/md:p-lg) */}
      <section
        id="como-trabajamos"
        className="scroll-mt-16 rounded-section border border-black/10 bg-white p-md shadow-card md:p-lg"
      >
        <Container className="!px-0">
          <div className="mb-md text-center">
          <h2 className="text-h3Mobile text-black md:text-h3">
            Cómo trabajamos contigo
          </h2>
          </div>
          <ProcessSteps steps={steps} />
          <p className="mt-6 text-center text-ui text-graphite">
            <Link
              href="/servicios"
              className="text-navy hover:underline underline-offset-4"
            >
              Ver el detalle de cada servicio →
            </Link>
          </p>
        </Container>
      </section>

      {/* Casos de éxito */}
      <section className="rounded-section border border-black/10 bg-white p-md shadow-card md:p-lg">
        <Container className="!px-0">
          <h2 className="text-center text-h3Mobile text-black md:text-h3">
            Casos de éxito
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-center text-ui text-graphite">
            Power BI real, aplicado a problemas reales de pymes como la tuya.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
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

          <p className="mt-5 text-center text-ui text-graphite">
            <Link
              href="/proyectos"
              className="text-navy hover:underline underline-offset-4"
            >
              Ver todos los casos de éxito →
            </Link>
          </p>
        </Container>
      </section>

      {/* Testimonio — comentado hasta tener uno real
      <section className="rounded-section border border-black/10 bg-bone p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0">
          <Testimonial
            quote="Por fin miramos un solo panel cada mañana en vez de perseguir cinco Excels distintos."
            author="Dirección general"
            role="Pyme de distribución"
          />
        </Container>
      </section>*/}

      {/* CTA final — compacto (contenedor, tipografía y botón reducidos) */}
      <section className="rounded-section border border-white/10 bg-navy-hover p-sm shadow-card md:p-md">
        <Container className="!px-0 text-center">
          <h2 className="text-h3Mobile text-white md:text-h3">
            ¿Listo para decidir con datos claros?
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-ui text-white/60">
            Empieza con un diagnóstico gratuito de tus datos. Sin compromiso.
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