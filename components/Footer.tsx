import Link from "next/link";
import Container from "./Container";

// Footer — Fase 4: ahora es su propia tarjeta redondeada, igual que el Nav
// y cada sección de la home, en vez de vivir dentro del contenedor único.
export default function Footer() {
  return (
    <footer className="rounded-section border border-black/10 bg-white shadow-card">
      <Container className="grid grid-cols-2 gap-8 py-lg md:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-black">Mtrica</p>
          <p className="mt-2 text-ui text-graphite">
            Business Intelligence para pymes que quieren decidir con datos claros.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-caption font-medium uppercase tracking-wide text-graphite">
            Navegación
          </p>
          <Link href="/servicios" className="text-ui text-graphite hover:text-black">
            Servicios
          </Link>
          <Link href="/proyectos" className="text-ui text-graphite hover:text-black">
            Proyectos
          </Link>
          <Link href="/nosotros" className="text-ui text-graphite hover:text-black">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-ui text-graphite hover:text-black">
            Contacto
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-caption font-medium uppercase tracking-wide text-graphite">
            Contacto rápido
          </p>
          <a href="mailto:hola@mtrica.com" className="text-ui text-graphite hover:text-black">
            hola@mtrica.com
          </a>
          <Link href="/citas" className="text-ui text-navy hover:underline underline-offset-4">
            Reservar diagnóstico →
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-caption font-medium uppercase tracking-wide text-graphite">
            Legal
          </p>
          <Link href="/aviso-legal" className="text-ui text-graphite hover:text-black">
            Aviso legal
          </Link>
          <Link href="/privacidad" className="text-ui text-graphite hover:text-black">
            Privacidad
          </Link>
          <Link href="/cookies" className="text-ui text-graphite hover:text-black">
            Cookies
          </Link>
        </div>
      </Container>
    </footer>
  );
}
