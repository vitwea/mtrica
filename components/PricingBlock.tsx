import Container from "./Container";
import Button from "./Button";

const tiers = [
  {
    name: "Diagnóstico",
    price: "Gratuito",
    description: "Breve sesión para ver qué datos tienes y qué podría mejorar.",
    cta: "Reservar consulta",
    href: "/citas",
  },
  {
    name: "Implementación",
    price: "Desde 250 €",
    description: "Dashboards a medida, conectados a tus fuentes de datos.",
    cta: "Solicitar presupuesto",
    href: "/citas",
    featured: true,
  },
  {
    name: "Mantenimiento",
    price: "Desde 50 €/mes",
    description: "Evolución continua de tus paneles y soporte prioritario.",
    cta: "Consultar",
    href: "/contacto",
  },
];

// Precios orientativos (Fase 2, sección 2.2): pre-cualifican al visitante antes
// de una llamada. Cifras de ejemplo — ajustar con datos reales del negocio.
export default function PricingBlock() {
  return (
    <section className="bg-bone/40 py-xl-mobile md:py-xl">
      <Container>
        <h2 className="text-center text-h2Mobile text-black md:text-h2">
          Precios
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-body text-graphite">
          El presupuesto cerrado se define tras el diagnóstico gratuito, según
          el alcance real de tu proyecto.
        </p>

        <div className="mt-md grid grid-cols-1 gap-4 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-card border bg-white p-md ${
                tier.featured ? "border-navy border-2" : "border-bone"
              }`}
            >
              {tier.featured && (
                <span className="mb-3 inline-block rounded-full bg-navy px-3 py-1 text-caption font-medium text-white">
                  Más solicitado
                </span>
              )}
              <p className="text-h4 text-black">{tier.name}</p>
              <p className="mt-1 text-h3 text-navy">{tier.price}</p>
              <p className="mt-2.5 text-body text-graphite">{tier.description}</p>
              <Button
                href={tier.href}
                variant={tier.featured ? "primary" : "secondary"}
                className="mt-5 w-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
