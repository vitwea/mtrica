"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export default function MobileNav({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false);

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
            <Link href="/servicios" onClick={() => setOpen(false)} className="text-h4 text-black">
              Servicios
            </Link>
            <Link href="/proyectos" onClick={() => setOpen(false)} className="text-h4 text-black">
              Proyectos
            </Link>
            <Link href="/nosotros" onClick={() => setOpen(false)} className="text-h4 text-black">
              Nosotros
            </Link>
            <Link href="/contacto" onClick={() => setOpen(false)} className="text-h4 text-black">
              Contacto
            </Link>
          </nav>

          <Button href="/citas" variant="primary" className="mt-10">
            Reservar diagnóstico
          </Button>
        </div>
      )}
    </div>
  );
}