import Link from "next/link";
import Container from "./Container";

// Footer — tarjeta redondeada propia, igual que el Nav y cada sección de
// la home.
// Fase 6 (auditoría): se añade barra inferior con copyright y
// localización — señal básica de confianza (empresa real, no anónima)
// que faltaba por completo. "Reservar diagnóstico" mantiene el acento
// (Fase 5): es el único enlace de conversión del footer.
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
          <Link href="/citas" className="text-ui text-accent hover:text-accent-hover underline-offset-4 hover:underline">
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

        <div className="col-span-2 mt-2 flex flex-col items-center gap-2 border-t border-black/8 pt-6 text-center sm:flex-row sm:justify-between sm:text-left md:col-span-4">
          <p className="text-[12px] text-graphite/60">
            © {new Date().getFullYear()} Mtrica. Todos los derechos reservados.
          </p>
          <p className="text-[12px] text-graphite/60">España · hola@mtrica.com</p>
        </div>
      </Container>
    </footer>
  );
}
