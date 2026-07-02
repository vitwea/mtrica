import {
  FileX,
  Clock,
  EyeOff,
  Search,
  BarChart3,
  RefreshCw,
  GraduationCap,
  LifeBuoy,
} from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
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

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Vemos qué datos tienes y qué decisiones podrían mejorar.",
  },
  {
    icon: BarChart3,
    title: "Implementación",
    description: "Construimos los dashboards conectados a tus datos reales.",
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

const services = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Qué datos tienes y qué decisiones podrían mejorar.",
    href: "/servicios#diagnostico",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description: "Tu negocio en un panel claro, actualizado solo.",
    href: "/servicios#dashboards",
  },
  {
    icon: RefreshCw,
    title: "Automatización",
    description: "Sin copiar y pegar informes nunca más.",
    href: "/servicios#automatizacion",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — Fase 4: propuesta de valor + doble CTA + franja de confianza */}
      <Hero />

      {/* Problema → agitación */}
      <section className="py-xl-mobile md:py-xl">
        <Container>
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

      {/* Cómo trabajamos — antes solo visible en /nosotros; sube a Inicio
          para reducir fricción antes del CTA (Fase 4) */}
      <section className="bg-bone/40 py-xl-mobile md:py-xl">
        <Container className="mb-md text-center">
          <h2 className="text-h2Mobile text-black md:text-h2">
            Cómo trabajamos
          </h2>
        </Container>
        <ProcessSteps steps={steps} />
      </section>

      {/* Servicios (resumen) */}
      <section className="py-xl-mobile md:py-xl">
        <Container>
          <h2 className="text-center text-h2Mobile text-black md:text-h2">
            Cómo te ayudamos
          </h2>
          <div className="mt-md grid grid-cols-1 gap-4 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Caso de éxito destacado */}
      <section className="bg-bone py-xl-mobile md:py-xl">
        <Container>
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
      <section className="py-xl-mobile md:py-xl">
        <Container>
          <Testimonial
            quote="Por fin miramos un solo panel cada mañana en vez de perseguir cinco Excels distintos."
            author="Dirección general"
            role="Pyme de distribución"
          />
        </Container>
      </section>

      {/* CTA final */}
      <section className="bg-navy py-xl-mobile md:py-xl">
        <Container className="text-center">
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
