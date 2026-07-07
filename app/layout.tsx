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

// Fase 6 (auditoría, punto D): gap exterior sube a md:gap-6 — con md:gap-5
// el canvas beige entre tarjetas no tenía espacio suficiente para "respirar"
// como fondo diferenciador.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} bg-canvas font-sans`}>
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 p-3 md:gap-6 md:p-5">
          <Nav />
          <main className="flex flex-col gap-4 md:gap-6">{children}</main>
          <Footer />
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
