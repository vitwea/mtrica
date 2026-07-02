import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

// Botones — Fase 3, sección 4. Área táctil mínima 44px de alto (accesibilidad móvil).
const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-hover px-7 py-3.5 rounded-card",
  secondary:
    "bg-transparent text-navy border border-navy hover:bg-navy/5 px-7 py-3.5 rounded-card",
  text: "text-navy hover:underline underline-offset-4 px-0 py-0",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-[44px] items-center justify-center text-ui font-medium transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
