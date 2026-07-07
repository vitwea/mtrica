import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import BackToTop from "@/components/BackToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const title = "Mtrica — Business Intelligence para pymes";
const description =
  "Dashboards en Power BI para pymes que quieren decidir con datos claros. Diagnóstico gratuito.";
  
export const metadata: Metadata = {
  metadataBase: new URL("https://mtrica.com"),
  title: {
    default: title,
    template: "%s | Mtrica",
  },
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Mtrica",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-canvas font-sans`}>
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 p-3 md:gap-6 md:p-5">
          <Nav />
          <main className="flex flex-col gap-4 md:gap-6">{children}</main>
          <Footer />
        </div>
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}