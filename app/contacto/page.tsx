import type { Metadata } from "next";
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

        <div className="mt-lg flex justify-center">
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
