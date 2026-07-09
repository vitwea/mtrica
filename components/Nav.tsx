"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="rounded-section border border-black/10 bg-white px-6 shadow-card md:px-8">
      <div className="flex items-center justify-between py-2">
        <Link href="/" aria-label="Mtrica — inicio" className="transition-opacity hover:opacity-80">
          <Logo className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-1 text-ui transition-colors ${
                  isActive ? "text-black" : "text-graphite hover:text-black"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-accent transition-all duration-200 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
          <Button
            href="/contacto"
            variant="secondary"
            className="!min-h-9 !rounded-full !border-navy !px-4 !py-1.5 !text-sm hover:!bg-navy hover:!text-white"
          >
            Solicitar consulta
          </Button>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}