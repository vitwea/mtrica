import Container from "./Container";
import Button from "./Button";
import DashboardPreview from "./DashboardPreview";

const stats = [
  { value: "+12", label: "pymes asesoradas" },
  { value: "+300h", label: "ahorradas al año en informes" },
];

// Hero — Fase 4 (v3): formato partido sobre fondo bone (en vez de blanco
// puro, que quedaba plano) con borde inferior reforzado para marcar la
// transición a la siguiente sección con más claridad que el border-bone
// por defecto, que se pierde sobre fondos claros.
export default function Hero() {
  return (
    <section className="border-b border-black/10 bg-bone/40">
      <Container className="grid grid-cols-1 items-center gap-10 py-xl-mobile md:grid-cols-2 md:gap-14 md:py-xl">
        <div>
          <p className="text-ui font-medium uppercase tracking-wide text-navy">
            Business intelligence para pymes
          </p>

          <h1 className="mt-4 text-h1Mobile text-black md:text-h1">
            Convierte los datos de tu empresa en decisiones, no en hojas de
            cálculo
          </h1>

          <p className="mt-5 max-w-md text-bodyLg text-graphite">
            Dashboards a medida y automatización de informes para pymes que
            quieren dejar de improvisar cada mes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/citas" variant="primary">
              Solicitar diagnóstico gratuito
            </Button>
            <Button href="/proyectos" variant="secondary">
              Ver casos de éxito
            </Button>
          </div>

          <div className="mt-10 flex gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-h4 text-black">{stat.value}</p>
                <p className="mt-0.5 text-caption text-graphite">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <DashboardPreview />
      </Container>
    </section>
  );
}
