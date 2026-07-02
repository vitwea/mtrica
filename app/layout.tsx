import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

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
      <body className={`${inter.variable} bg-[#F5F5F3] font-sans`}>
        <div className="mx-auto max-w-[1600px] p-3 md:p-5">
          <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white">
            <Nav />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
