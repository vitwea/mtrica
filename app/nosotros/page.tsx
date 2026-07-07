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
        compact
      />

      {/* Historia — placeholders explícitos: rellenar con datos reales antes de publicar */}
      <section className="rounded-section border border-black/10 bg-white p-md shadow-card md:p-lg">
        <Container className="!px-0 max-w-2xl">
          <h2 className="text-h2CompactMobile text-black md:text-h2Compact">
            Por qué existe Mtrica
          </h2>
          <p className="mt-3 text-body text-graphite">
            [Tu nombre] fundó Mtrica después de ver una y otra vez el mismo
            problema en pymes de todo tipo: decisiones importantes tomadas
            con información incompleta, tarde, o repartida en veinte Excels
            distintos. [Añade aquí 2-3 frases reales sobre tu experiencia:
            de dónde vienes, con qué empresas has trabajado, o qué te llevó
            a especializarte en esto — cuanto más concreto, más confianza
            transmite.]
          </p>
          <p className="mt-3 text-body text-graphite">
            Mtrica trabaja con pymes de cualquier sector que ya tienen datos,
            pero no tienen tiempo ni equipo interno para convertirlos en
            decisiones. [Certificaciones o partnerships reales, si los hay —
            ej. partner de Microsoft, certificación en Power BI, etc.]
          </p>
        </Container>
      </section>

      {/* Metodología — mismo patrón que "Cómo trabajamos" de Inicio */}
      <section className="rounded-section border border-black/10 bg-bone p-md shadow-card md:p-lg">
        <Container className="!px-0">
          <div className="mb-md text-center">
            <h2 className="text-h2CompactMobile text-black md:text-h2Compact">
              Cómo trabajamos
            </h2>
          </div>
          <ProcessSteps steps={steps} />
        </Container>
      </section>

      {/* CTA final — mismo patrón compacto que Inicio/Servicios */}
      <section className="rounded-section border border-white/10 bg-navy-hover p-sm shadow-card md:p-md">
        <Container className="!px-0 text-center">
          <h2 className="text-h2CompactMobile text-white md:text-h2Compact">
            ¿Hablamos de tu proyecto?
          </h2>
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