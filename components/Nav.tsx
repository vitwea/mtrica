import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import MobileNav from "./MobileNav";

// Nav — Fase 4: se quita "Nosotros" del menú (feedback: la gente quiere ver
// resultados, no una página institucional). "Casos" se añadirá aquí cuando
// haya al menos 3 proyectos reales publicados (ver README, Fase 4).
export default function Nav() {
  return (
    <header className="border-b border-bone px-[20px]">
      <div className="flex items-center justify-between py-5 px-2px">
        <Link href="/" className="text-3xl font-bold text-black">
          mtrica
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
