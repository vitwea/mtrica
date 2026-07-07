import Container from "./Container";
import Button from "./Button";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="rounded-section border border-white/10 bg-navy-hover shadow-card">
      <Container className="pt-5 pb-5 md:pt-8 md:pb-8">
        <div className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <h1 className="max-w-xl text-2xl font-semibold leading-tight text-white md:text-3xl md:leading-snug">
              <span className="underline decoration-accent/60 underline-offset-[6px]">
                Automatizamos
              </span>{" "}
              tus informes.
              <br />

              Diseñamos{" "}
              <span className="text-accent">dashboards en Power BI</span>.
              <br />

              Toma decisiones{" "}
              <span className="underline decoration-accent/60 underline-offset-[6px]">
                en minutos
              </span>.
            </h1>
            <p className="mt-5 max-w-lg text-bodyLg text-white/80">
              Si alguna vez has preguntado "¿cuál es el Excel bueno?", ya
              conoces el problema. Centralizamos toda tu información en un
              único panel para que dejes de buscar datos y empieces a tomar
              decisiones.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
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
          </div>
          <DashboardPreview />
        </div>
      </Container>
    </section>
  );
}