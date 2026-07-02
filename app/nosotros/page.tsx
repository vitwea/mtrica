import type { Metadata } from "next";
import { Search, BarChart3, GraduationCap, LifeBuoy } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ProcessSteps from "@/components/ProcessSteps";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Nosotros | Mtrica",
  description:
    "Conoce cómo trabaja Mtrica: metodología clara, sin jerga innecesaria, pensada para que las pymes decidan con datos claros.",
};

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
    description: "Tu equipo aprende a usarlos con autonomía, sin depender de nosotros.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte continuo",
    description: "Evolucionamos los paneles a medida que cambia tu negocio.",
  },
];

export default function Nosotros() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title="Claridad primero, tecnología después"
        subtitle="Mtrica existe para que decidir con datos deje de ser un lujo reservado a las grandes empresas."
      />

      {/* Historia — placeholders explícitos: rellenar con datos reales antes de publicar */}
      <section className="py-xl-mobile md:py-xl">
        <Container className="max-w-2xl">
          <h2 className="text-h3 text-black">Por qué existe Mtrica</h2>
          <p className="mt-4 text-bodyLg text-graphite">
            [Tu nombre] fundó Mtrica después de ver una y otra vez el mismo
            problema en pymes de todo tipo: decisiones importantes tomadas
            con información incompleta, tarde, o repartida en veinte Excels
            distintos. [Añade aquí 2-3 frases reales sobre tu experiencia:
            de dónde vienes, con qué empresas has trabajado, o qué te llevó
            a especializarte en esto — cuanto más concreto, más confianza
            transmite.]
          </p>
          <p className="mt-4 text-bodyLg text-graphite">
            Mtrica trabaja con pymes de cualquier sector que ya tienen datos,
            pero no tienen tiempo ni equipo interno para convertirlos en
            decisiones. [Certificaciones o partnerships reales, si los hay —
            ej. partner de Microsoft, certificación en Power BI, etc.]
          </p>
        </Container>
      </section>

      {/* Metodología */}
      <section className="bg-bone/40 py-xl-mobile md:py-xl">
        <Container className="mb-md text-center">
          <h2 className="text-h2Mobile text-black md:text-h2">Cómo trabajamos</h2>
        </Container>
        <ProcessSteps steps={steps} />
      </section>

      {/* CTA final */}
      <section className="bg-navy py-xl-mobile md:py-xl">
        <Container className="text-center">
          <h2 className="text-h2Mobile text-white md:text-h2">
            ¿Hablamos de tu proyecto?
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
