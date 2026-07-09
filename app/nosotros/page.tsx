import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Nosotros | Mtrica",
  description:
    "Conoce cómo trabaja Mtrica: metodología clara, sin jerga innecesaria, pensada para que las pymes decidan con datos claros.",
};

const differentiators = [
  {
    title: "Acceso directo",
    description: "Hablas con quien construye tu dashboard, sin departamentos intermedios.",
  },
  {
    title: "Semanas, no meses",
    description: "Primeros resultados funcionales rápido, no un proyecto interminable.",
  },
  {
    title: "Orientado a resultados",
    description: "Cada dashboard responde a una decisión de negocio concreta.",
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

      {/* Historia + diferenciadores, dos columnas */}
      <section className="rounded-section border border-black/10 bg-white p-md shadow-card md:p-lg">
        <Container className="!px-0">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.3fr_1fr] md:gap-10">
            <div>
              <h2 className="text-h2CompactMobile text-black md:text-h2Compact">
                Por qué existe Mtrica
              </h2>
              <p className="mt-3 text-body text-graphite">
                Creamos Mtrica al ver, una y otra vez, el mismo problema en
                pymes de sectores muy distintos: decisiones importantes
                tomadas con información incompleta, repartida en Excels que
                nadie termina de actualizar, o directamente a ciegas hasta
                que el problema ya era demasiado grande para resolverlo a
                tiempo.
              </p>
              <p className="mt-3 text-body text-graphite">
                Nos especializamos en Power BI y automatización de datos
                porque son las herramientas que de verdad marcan la
                diferencia para una pyme: no hace falta un equipo de datos
                interno ni un proyecto de meses para empezar a decidir con
                información clara — hace falta un dashboard bien
                construido, conectado a los datos que ya tienes.
              </p>
            </div>

            <div className="rounded-card border border-bone bg-mist p-md">
              <p className="text-caption font-medium uppercase tracking-wide text-graphite">
                Trabajamos distinto
              </p>
              <div className="mt-3 flex flex-col">
                {differentiators.map((item, i) => (
                  <div
                    key={item.title}
                    className={`flex gap-3 py-3.5 ${i > 0 ? "border-t border-black/8" : ""}`}
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-ui font-semibold text-black">{item.title}</p>
                      <p className="mt-0.5 text-caption text-graphite">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="rounded-section border border-white/10 bg-navy-hover p-sm shadow-card md:p-md">
        <Container className="!px-0 text-center">
          <h2 className="text-h2CompactMobile text-white md:text-h2Compact">
            ¿Hablamos de tu proyecto?
          </h2>
          <Button
            href="/contacto"
            variant="primary"
            className="mt-4 !min-h-9 !rounded-full !bg-accent !px-5 !py-2 !text-sm !font-semibold hover:!bg-accent-hover"
          >
            Solicitar consulta
          </Button>
        </Container>
      </section>
    </>
  );
}