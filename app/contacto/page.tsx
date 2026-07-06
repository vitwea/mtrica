import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Mtrica",
  description:
    "Cuéntanos tu problema con los datos. Te respondemos en menos de 24h, sin compromiso.",
};

export default function Contacto() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Cuéntanos tu problema con los datos"
        subtitle="Te respondemos en menos de 24h, sin compromiso."
        compact
      />

      {/* Fase 10: max-w + mx-auto en la propia sección (no en un
          Container interno) — así la tarjeta blanca en sí es estrecha
          y centrada, con el canvas visible a los lados. Es lo que le da
          la sensación de "flotar" en vez de ser una barra completa con
          contenido centrado dentro. */}
      <section className="mx-auto w-full max-w-lg rounded-section border border-black/10 bg-white p-lg shadow-card md:p-xl-mobile">
        <ContactForm />
      </section>
    </>
  );
}