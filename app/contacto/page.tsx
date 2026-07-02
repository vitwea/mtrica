import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Mtrica",
  description:
    "Cuéntanos tu problema con los datos. Te respondemos en menos de 24h, sin compromiso.",
};

export default function Contacto() {
  return (
    <section className="py-xl-mobile md:py-xl">
      <Container className="max-w-3xl">
        <div className="text-center">
          <p className="text-ui text-navy">Contacto</p>
          <h1 className="mt-4 text-h2Mobile text-black md:text-h2">
            Cuéntanos tu problema con los datos
          </h1>
          <p className="mx-auto mt-3 max-w-md text-body text-graphite">
            Te respondemos en menos de 24h, sin compromiso.
          </p>
        </div>

        <div className="mt-lg grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr]">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-ui font-medium text-black">Email directo</p>
              <a
                href="mailto:hola@mtrica.com"
                className="mt-1 inline-block text-body text-navy hover:underline underline-offset-4"
              >
                hola@mtrica.com
              </a>
            </div>

            <div className="rounded-card border border-bone bg-bone/40 p-md">
              <p className="text-ui font-medium text-black">
                ¿Prefieres reservar directamente?
              </p>
              <p className="mt-1.5 text-body text-graphite">
                Salta el formulario y elige tú mismo un hueco de 30 minutos
                para el diagnóstico gratuito.
              </p>
              <Link
                href="/citas"
                className="mt-3 inline-block text-ui font-medium text-navy hover:underline underline-offset-4"
              >
                Ir a Citas →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
