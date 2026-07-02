import { FileX, Clock, EyeOff, Search, BarChart3, RefreshCw } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
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
      {/* Hero — Fase 2, sección 2.1 */}
      <Hero />

      {/* Problema → solución */}
      <section className="pb-xl-mobile md:pb-xl">
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

      {/* Servicios (resumen) */}
      <section className="bg-bone py-xl-mobile md:py-xl">
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
      <section className="py-xl-mobile md:py-xl">
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
