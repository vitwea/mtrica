import type { Metadata } from "next";
import { Search, BarChart3, RefreshCw, GraduationCap, LifeBuoy } from "lucide-react";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import ServiceDetail from "@/components/ServiceDetail";
import PricingBlock from "@/components/PricingBlock";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Servicios de Business Intelligence para pymes | Mtrica",
  description:
    "Diagnóstico de datos, dashboards en Power BI, automatización de informes, formación y soporte continuo. Servicios de BI pensados para pymes españolas.",
};

const services = [
  {
    id: "diagnostico",
    icon: Search,
    title: "Diagnóstico de datos",
    problem:
      "No sabes qué datos tienes realmente ni qué decisiones podrías mejorar con ellos.",
    includes: [
      "Auditoría de tus fuentes de datos actuales (ERP, CRM, Excel)",
      "Informe corto con oportunidades priorizadas",
      "Recomendación clara de por dónde empezar",
    ],
    timeframe: "Entrega en 1 semana",
    ctaLabel: "Empezar con un diagnóstico",
    ctaHref: "/citas",
  },
  {
    id: "dashboards",
    icon: BarChart3,
    title: "Implementación de dashboards",
    problem:
      "Decides con informes desactualizados, hechos a mano y que nadie termina de mirar.",
    includes: [
      "2-3 dashboards a medida en Power BI",
      "Conexión a tus fuentes de datos reales",
      "Formación básica para tu equipo",
    ],
    timeframe: "Primer dashboard funcional en 4-6 semanas",
    ctaLabel: "Solicitar diagnóstico gratuito",
    ctaHref: "/citas",
  },
  {
    id: "automatizacion",
    icon: RefreshCw,
    title: "Automatización e integración de datos",
    problem:
      "Tu equipo pierde horas cada mes copiando y pegando informes entre sistemas.",
    includes: [
      "Conexión automática de ERP, CRM y Excel",
      "Eliminación de procesos manuales repetitivos",
      "Datos actualizados sin intervención humana",
    ],
    ctaLabel: "Consultar sin compromiso",
    ctaHref: "/contacto",
  },
  {
    id: "mantenimiento",
    icon: LifeBuoy,
    title: "Mantenimiento y soporte continuo",
    problem:
      "Tu negocio cambia y los dashboards se quedan desfasados si nadie los mantiene.",
    includes: [
      "Evolución continua de tus paneles",
      "Bolsa de horas mensual o retainer",
      "Prioridad de respuesta ante incidencias",
    ],
    ctaLabel: "Hablar sobre soporte continuo",
    ctaHref: "/contacto",
  },
];

export default function Servicios() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        title="Un servicio para cada punto donde estás perdiendo visibilidad"
        subtitle="Empieza por donde tenga más sentido para tu negocio — no hace falta contratar todo a la vez."
      />

      {services.map((service, i) => (
        <ServiceDetail key={service.id} {...service} alt={i % 2 === 1} />
      ))}

      <PricingBlock />

      <section className="bg-navy py-xl-mobile md:py-xl">
        <Container className="text-center">
          <h2 className="text-h2Mobile text-white md:text-h2">
            ¿No sabes por cuál empezar?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-body text-white/80">
            El diagnóstico gratuito de 30 minutos te lo deja claro, sin
            compromiso.
          </p>
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
