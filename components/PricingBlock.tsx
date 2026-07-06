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

// Fase 9: la sección pasa a tarjeta flotante bone (mismo criterio que
// "Cómo trabajamos" en Inicio). Los tiers internos no cambian — ya
// seguían el token correcto (rounded-card + border-bone + bg-white).
export default function PricingBlock() {
  return (
    <section className="rounded-section border border-black/10 bg-bone p-lg shadow-card md:p-xl-mobile">
      <Container className="!px-0">
        <h2 className="text-center text-h2Mobile text-black md:text-h2">
          Precios
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-body text-graphite">
          El presupuesto cerrado se define tras la consulta inicial.
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