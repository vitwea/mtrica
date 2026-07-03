import Link from "next/link";
import { FileX, Clock, EyeOff, Search, BarChart3, GraduationCap, LifeBuoy } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonial from "@/components/Testimonial";
import Button from "@/components/Button";

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

      {/* Problema → agitación. Fase 7: cabecera pasa de pregunta genérica
          a afirmación ("ya sé que te pasa esto"), y una de las tres
          tarjetas se convierte en ancla con pista de solución. */}
      <section className="rounded-section border border-black/10 bg-white p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0">
          <h2 className="mx-auto max-w-5xl text-center text-h2Mobile text-black md:text-h2">
            Casi siempre es el mismo problema<br />y es el más fácil de resolver
          </h2>

          <div className="mt-md grid grid-cols-1 gap-4 md:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className={`rounded-card border p-md ${
                  problem.featured
                    ? "border-accent/40 bg-mist"
                    : "border-bone bg-mist"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
                    <problem.icon
                      className="h-5 w-5 text-navy"
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

      {/* Cómo trabajamos — tarjetas internas ya en white sobre bone, correcto */}
      <section
        id="como-trabajamos"
        className="scroll-mt-16 rounded-section border border-black/10 bg-bone p-lg shadow-card md:p-xl-mobile"
      >
        <Container className="!px-0">
          <div className="mb-md text-center">
            <h2 className="text-h2Mobile text-black md:text-h2">
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

       {/* Caso de éxito destacado — white; tarjeta en mist (ver ProjectCard.tsx) */}
      <section className="rounded-section border border-black/10 bg-white p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0">
          <h2 className="text-center text-h2Mobile text-black md:text-h2">
            Caso de éxito
          </h2>
          <div className="mx-auto mt-md max-w-md">
            <ProjectCard
              sector="Retail"
              title="Control de ventas y stock en tiempo real"
              result="+30% precisión en previsión de demanda"
              href="/proyectos/pyme-retail-dashboard-ventas"
            />
          </div>
        </Container>
      </section>

      {/* Testimonio — bone; comillas, escala y avatar en Testimonial.tsx 
      <section className="rounded-section border border-black/10 bg-bone p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0">
          <Testimonial
            quote="Por fin miramos un solo panel cada mañana en vez de perseguir cinco Excels distintos."
            author="Dirección general"
            role="Pyme de distribución"
          />
        </Container>
      </section>*/}

      {/* CTA final — navy-hover, cierra el bookend con el hero (mismo padding p-lg/md:p-xl-mobile) */}
      <section className="rounded-section border border-white/10 bg-navy-hover p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0 text-center">
          <h2 className="text-[32px] font-bold leading-tight text-white md:text-[48px]">
            ¿Listo para decidir con datos claros?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-bodyLg text-white/60">
            Empieza con un diagnóstico gratuito de tus datos. Sin compromiso.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <Button
              href="/citas"
              variant="primary"
              className="!min-h-[52px] !bg-accent !px-8 !py-3.5 !text-[15px] !font-semibold !shadow-lg !shadow-accent/25 hover:!bg-accent-hover"
            >
              Solicitar diagnóstico gratuito
            </Button>
            <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12px] text-white/40">
              <span>Sin compromiso</span>
              <span>Respuesta en 24h</span>
              <span>100% gratuito</span>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
