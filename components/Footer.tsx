import Link from "next/link";
import Container from "./Container";
import LogoFull from "./LogoFull";

export default function Footer() {
  return (
    <footer className="rounded-section border border-black/10 bg-white shadow-card">
      <Container className="flex flex-col gap-3 py-xs md:py-sm">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row">
          <div className="max-w-xs">
            <LogoFull className="h-8 w-auto" />
            <p className="mt-1.5 text-[11px] text-graphite">
              Business Intelligence para pymes que quieren decidir con datos claros.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-medium uppercase tracking-wide text-graphite">
              Contacto rápido
            </p>
            <a href="mailto:hola@mtrica.com" className="text-[12px] text-graphite hover:text-black">
              hola@mtrica.com
            </a>
            <Link href="/citas" className="text-[12px] text-accent hover:text-accent-hover underline-offset-4 hover:underline">
              Reservar diagnóstico →
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 border-t border-black/8 pt-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[10px] text-graphite/60">
            © {new Date().getFullYear()} Mtrica. Todos los derechos reservados.
          </p>
          <p className="text-[10px] text-graphite/60">España · hola@mtrica.com</p>
        </div>
      </Container>
    </footer>
  );
}