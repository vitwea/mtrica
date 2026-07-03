import Link from "next/link";
import Button from "./Button";
import MobileNav from "./MobileNav";

// Nav — tarjeta redondeada propia, sin sticky.
// Fase 6 (auditoría): logo baja de text-4xl (36px, leía como un H1) a
// 22px — proporción correcta frente a los links de 14px. El CTA pasa a
// rounded-full: resuelve la incoherencia de radio entre el header
// (rounded-section, 24px) y el botón (antes rounded-card, 12px) haciendo
// del botón un elemento deliberadamente distinto, no un radio a medio camino.
export default function Nav() {
  return (
    <header className="rounded-section border border-black/10 bg-white px-5 shadow-card md:px-8">
      <div className="flex items-center justify-between py-5">
        <Link href="/" className="text-[22px] font-bold tracking-tight text-black">
          Mtrica
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link href="/servicios" className="text-ui text-graphite hover:text-black">
            Servicios
          </Link>
          <Link href="/contacto" className="text-ui text-graphite hover:text-black">
            Contacto
          </Link>
          <Button
            href="/citas"
            className="!min-h-[40px] !rounded-full !px-5 !py-2"
          >
            Solicitar consultoría
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
