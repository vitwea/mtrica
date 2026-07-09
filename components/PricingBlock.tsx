import Container from "./Container";
import Button from "./Button";

const tiers = [
  {
    name: "Diagnóstico",
    price: "Gratuito",
    description: "Breve sesión para ver qué datos tienes y qué podría mejorar.",
    cta: "Solicita consulta",
    href: "/contacto",
  },
  {
    name: "Implementación",
    price: "Desde 250 €",
    description: "Cada proyecto se adapta a tus necesidades.\nEl presupuesto final se define tras la consulta inicial",
    cta: "Solicitar presupuesto",
    href: "/contacto",
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

export default function PricingBlock() {
  return (
    <section className="rounded-section border border-black/10 bg-white p-sm shadow-card md:p-md">
      <Container className="!px-0">
        <h2 className="text-center text-h2CompactMobile text-black md:text-h2Compact">
          Servicios
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-card border bg-mist p-sm ${
                tier.featured ? "border-navy border-2" : "border-bone"
              }`}
            >
              {tier.featured && (
                <span className="mb-2 inline-block rounded-full bg-navy px-2.5 py-0.5 text-caption font-medium text-white">
                  Ideals para empezar
                </span>
              )}
              <p className="text-ui font-semibold text-black">{tier.name}</p>
              <p className="mt-0.5 text-h4 text-navy">{tier.price}</p>
              <p className="mt-1.5 text-caption text-graphite whitespace-pre-line">{tier.description}</p>
              <Button
                href={tier.href}
                variant={tier.featured ? "primary" : "secondary"}
                className="mt-3 !min-h-9 !w-full !rounded-full !py-1.5 !text-sm"
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