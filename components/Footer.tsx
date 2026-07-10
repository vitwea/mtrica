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
          <div className="flex items-center justify-center gap-2 sm:justify-end">
            <p className="text-[9px] text-graphite/60">
              España · hola@mtrica.com
            </p>

            <a
              href="https://www.linkedin.com/company/mtrica"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Síguenos en LinkedIn"
              className="text-graphite/50 transition-colors hover:text-accent"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.940v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z"/>
              </svg>
            </a>
          </div>


        </div>

      </Container>
    </footer>
  );
}
