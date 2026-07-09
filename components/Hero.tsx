import Container from "./Container";
import Button from "./Button";
import DashboardPreview from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="rounded-section border border-white/10 bg-navy-hover shadow-card">
      <Container className="pt-5 pb-5 md:pt-8 md:pb-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">
          <div className="text-center md:text-left">
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
            <p className="mx-auto mt-5 max-w-lg text-bodyLg text-white/80 md:mx-0">
              Si alguna vez has preguntado "¿cuál es el Excel bueno?", ya
              conoces el problema. Centralizamos tus datos en un único
              panel para que dejes de buscar información y empieces a
              tomar decisiones.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:items-start md:justify-start">
              <Button
                href="/contacto"
                variant="primary"
                className="!bg-accent hover:!bg-accent-hover"
              >
                Analiza tu empresa
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

          <div className="hidden md:block">
            <DashboardPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}