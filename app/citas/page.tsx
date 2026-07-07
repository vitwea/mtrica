import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Reserva tu diagnóstico gratuito | Mtrica",
  description:
    "Reserva 30 minutos sin compromiso. Vemos qué datos tienes y qué dashboard tendría más impacto para tu negocio.",
};

export default function Citas() {
  return (
    <>
      <PageHeader
        eyebrow="Diagnóstico gratuito"
        title="Reserva tu sesión de 30 minutos"
        subtitle="Sin compromiso. Elige el hueco que mejor te venga y hablamos de tus datos."
        compact
      />

      <div className="w-full p-md md:p-lg">
        <div className="h-[580px] w-full [&_iframe]:!w-full [&_iframe]:!h-full [&_iframe]:!min-w-full">
          <CalEmbed />
        </div>
      </div>
    </>
  );
}
