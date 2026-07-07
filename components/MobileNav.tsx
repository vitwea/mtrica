"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function MobileNav({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={`flex h-11 w-11 items-center justify-center ${
          light ? "text-white" : "text-black"
        }`}
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white p-6">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-black">Mtrica</span>
            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center text-black"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2.5 text-h4 ${
                    isActive ? "text-black" : "text-graphite"
                  }`}
                >
                  {isActive && <span className="h-2 w-2 rounded-full bg-accent" />}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Button href="/citas" variant="primary" className="mt-10">
            Reservar diagnóstico
          </Button>
        </div>
      )}
    </div>
  );
}