import Link from "next/link";
import { FileX, Clock, EyeOff, Search, BarChart3, GraduationCap, LifeBuoy } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import ProcessSteps from "@/components/ProcessSteps";
import Testimonial from "@/components/Testimonial";
import Button from "@/components/Button";

const problems = [
  {
    icon: FileX,
    title: "Excels desconectados",
    description: "Cada área tiene su propia versión de la verdad.",
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

// Antes había dos secciones separadas ("Cómo trabajamos" y "Cómo te
// ayudamos") que repetían contenido casi literal (p.ej. "Diagnóstico" en
// las dos). Se fusionan en un único proceso de 4 pasos que ya incorpora
// los servicios (dashboards + automatización van juntos en el paso 2), con
// un enlace a /servicios para quien quiera el detalle de cada uno.
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
      {/* Hero — Fase 4: propuesta de valor + doble CTA + carrusel de dashboard */}
      <Hero />

      {/* Problema → agitación */}
      <section className="rounded-section border border-black/10 bg-white p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0">
          <p className="text-center text-ui text-graphite">
            Pymes de retail, servicios y distribución ya deciden con datos
            claros
          </p>
          <div className="mt-md grid grid-cols-1 gap-4 md:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-card border border-bone bg-white p-md"
              >
                <problem.icon
                  className="h-6 w-6 text-navy"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="mt-3 text-h4 text-black">{problem.title}</p>
                <p className="mt-1.5 text-body text-graphite">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Cómo trabajamos — fusiona proceso + servicios (antes eran dos
          secciones separadas y repetían contenido) */}
      <section
        id="como-trabajamos"
        className="scroll-mt-16 rounded-section border border-black/10 bg-bone/40 p-lg shadow-card md:p-xl-mobile"
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

      {/* Caso de éxito destacado */}
      <section className="rounded-section border border-black/10 bg-bone p-lg shadow-card md:p-xl-mobile">
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

      {/* Testimonio — primera prueba social real de la home (Fase 4).
          Sustituir por una cita real del cliente piloto antes de publicar. */}
      <section className="rounded-section border border-black/10 bg-canvas p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0">
          <Testimonial
            quote="Por fin miramos un solo panel cada mañana en vez de perseguir cinco Excels distintos."
            author="Dirección general"
            role="Pyme de distribución"
          />
        </Container>
      </section>

      {/* CTA final */}
      <section className="rounded-section border border-black/10 bg-navy p-lg shadow-card md:p-xl-mobile">
        <Container className="!px-0 text-center">
          <h2 className="text-h2Mobile text-white md:text-h2">
            ¿Listo para decidir con datos claros?
          </h2>
          <Button
            href="/citas"
            variant="primary"
            className="mt-6 !bg-white !text-navy hover:!bg-white/90"
          >
            Solicitar diagnóstico gratuito
          </Button>
        </Container>
      </section>
    </>
  );
}
