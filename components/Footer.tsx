import Container from "./Container";

export default function Footer() {
  return (
    <footer className="rounded-section border border-black/10 bg-white shadow-card">
      <Container className="!max-w-none py-[6px]">

        <div className="grid grid-cols-1 items-center gap-1 pt-1 text-center sm:grid-cols-3 sm:text-left">

          {/* Izquierda */}
          <p className="text-[11px] font-medium text-black sm:text-left">
            Mtrica — <span className="text-graphite/70">Business Intelligence para pymes</span>
          </p>

          {/* Centro */}
          <p className="text-[9px] text-graphite/50 text-center">
            © {new Date().getFullYear()} Mtrica. Todos los derechos reservados.
          </p>

          {/* Derecha */}
          <p className="text-[9px] text-graphite/60 sm:text-right">
            España · hola@mtrica.com
          </p>

        </div>

      </Container>
    </footer>
  );
}
