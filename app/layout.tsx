import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mtrica — Business Intelligence para pymes",
  description:
    "Convertimos los datos dispersos de tu empresa en un panel claro que puedes mirar cada mañana. Diagnóstico de datos gratuito para pymes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* Fase 4: cada "apartado" (Nav, cada sección, Footer) es ahora su
          propia tarjeta redondeada con espacio de por medio, en vez de un
          único bloque blanco continuo — así el contraste con el canvas se
          nota en cada tarjeta, no solo en el borde exterior. */}
      <body className={`${inter.variable} bg-canvas font-sans`}>
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 p-3 md:gap-5 md:p-5">
          <Nav />
          <main className="flex flex-col gap-4 md:gap-5">{children}</main>
          <Footer />
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
