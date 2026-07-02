import Image from "next/image";
import Button from "./Button";

// Portada minimalista: foto a pantalla completa con un único eslogan breve
// centrado. El nav va en la barra blanca aparte (componente Nav), no superpuesto.
export default function Hero() {
  return (
    <section className="relative flex min-h-[560px] items-center justify-center overflow-hidden md:min-h-[75vh]">
      <Image
        src="/hero.jpg"
        alt="Escritorio de trabajo con cuadernos, gafas y una taza de café"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/45"
      />

      <div className="relative z-10 max-w-xl px-6 text-center">
        <h1 className="text-h1Mobile text-white md:text-h1">
          Decide con datos,<br />
          no con intuición.
        </h1>
      </div>
    </section>
  );
}
