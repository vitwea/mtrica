import Container from "./Container";
import Button from "./Button";
import DashboardPreview from "./DashboardPreview";

// Hero — fondo navy-950 + acento, momento de mayor impacto de marca.
// Fase 8: el titular gana un énfasis en accent sobre "dashboards en Power
// BI" — ancla la categoría del servicio con un punto de color, en vez de
// quedar todo el bloque en blanco plano. El subtítulo pasa de describir el
// servicio a reflejar el síntoma más reconocible (Excels a mano), que es
// lo que realmente hace que alguien se detenga en el primer scroll. La
// microcopy de confianza pasa de una frase suelta a tres razones cortas,
// justo donde más pesa: junto al CTA principal.
export default function Hero() {
  return (
    <section className="rounded-section border border-white/10 bg-navy-hover shadow-card">

    <Container className="pt-4 pb-4 md:pt-8 md:pb-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/70">
            Power BI · Automatización · Para pymes
          </span>

        <h1 className="w-full mt-2 max-w-5xl text-[26px] font-semibold leading-tight text-white md:text-[40px] md:leading-snug">
          Automatizamos tus informes y creamos{" "}
          <span className="text-accent">dashboards en Power BI</span> para que decidas en minutos
        </h1>

        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-10">
          <div>
            <p className="max-w-lg text-bodyLg text-white/80 text-justify">
              Si todavía cierras el mes copiando datos entre Excels, sabes
              que algo falla. Te construimos el panel que lo evita, en
              semanas, no en trimestres.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                href="/citas"
                variant="primary"
                className="!bg-accent hover:!bg-accent-hover"
              >
                Analiza tu empresa gratis
              </Button>

              <Button
                href="#como-trabajamos"
                variant="secondary"
                className="!border-white/50 !text-white hover:!bg-white/10"
              >
                Cómo trabajamos
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[13px] text-white/60">
              <span className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 flex-shrink-0 text-accent/70" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Sin permanencia
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 flex-shrink-0 text-accent/70" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Resultados en semanas
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 flex-shrink-0 text-accent/70" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 10.5l3.5 3.5L16 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Datos siempre tuyos
              </span>
            </div>
          </div>

          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}
