import Container from "./Container";
import Button from "./Button";
import DashboardPreview from "./DashboardPreview";

// Hero — Fase 4 (v6): titular a todo lo ancho arriba, y debajo el bloque se
// parte en dos columnas — texto de apoyo + CTAs a la izquierda, carrusel del
// dashboard a la derecha.
export default function Hero() {
  return (
    <section className="rounded-section border border-black/20 bg-bone shadow-card">

      <Container className="py-lg md:py-xl-mobile">
        <div className="text-center">
          <span className="inline-block rounded-full bg-navy-50 px-4 py-1.5 text-ui font-semibold uppercase tracking-wide text-navy">
            Power BI · Automatización de informes · Para pymes
          </span>

          <h1 className="mx-auto mt-4 text-h1Mobile text-black md:text-h2">
            Automatizamos tus informes y creamos dashboards en Power BI para
            que decidas en minutos
          </h1>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-10">
          <div>
            <p className="text-bodyLg text-graphite">
              Convertimos los datos dispersos de tu empresa —ventas, stock,
              clientes— en un panel claro que puedes mirar cada mañana.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/citas" variant="primary">
                Analiza tu empresa gratis
              </Button>
              <Button href="#como-trabajamos" variant="secondary">
                Cómo trabajamos
              </Button>
            </div>

            <p className="mt-8 max-w-sm text-ui text-graphite">
              Sin departamentos ni proyectos de seis meses: trabajas
              directamente con quien construye tu dashboard, listo en
              semanas.
            </p>
          </div>

          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
