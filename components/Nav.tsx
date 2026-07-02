import Link from "next/link";
import Button from "./Button";
import MobileNav from "./MobileNav";

// Nav — Fase 4: tarjeta redondeada propia, sin sticky (se probó y se
// descartó: el botón "volver arriba" cubre esa necesidad sin fijar la barra).
// "Nosotros" queda fuera del menú (feedback: la gente quiere ver resultados,
// no una página institucional). "Casos" se añadirá aquí cuando haya al menos
// 3 proyectos reales (README).
export default function Nav() {
  return (
    <header className="rounded-section border border-black/10 bg-white px-5 shadow-card md:px-8">
      <div className="flex items-center justify-between py-5">
        <Link href="/" className="text-4xl font-bold text-black">
          Mtrica
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/servicios" className="text-ui text-graphite hover:text-black">
            Servicios
          </Link>
          <Link href="/contacto" className="text-ui text-graphite hover:text-black">
            Contacto
          </Link>
          <Button href="/citas" className="px-4 py-2.5">
            Solicitar consultoría
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
