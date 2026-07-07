import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="rounded-section border border-black/10 bg-white shadow-card">
      <Container className="!max-w-none flex flex-col gap-2 py-xs md:py-sm">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="text-ui font-bold text-black">Mtrica</span>
            <span className="text-[11px] text-graphite/60">
              Business Intelligence para pymes
            </span>
          </div>

          <div className="flex items-center gap-5">
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