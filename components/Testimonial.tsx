type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
};

// Fase 6 (auditoría): comillas decorativas pasan de texto a SVG en
// navy/20 (antes accent/30 — demasiado débil para decorar, demasiado
// visible para pasar desapercibida). Cita sube a 22-26px para tener peso
// real. Se añade avatar con iniciales — no es una foto inventada, es un
// recurso de diseño honesto mientras no haya foto real del cliente.
export default function Testimonial({ quote, author, role }: TestimonialProps) {
  const initials = author
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="mx-auto max-w-2xl text-center">
      <svg
        className="mx-auto mb-6 h-8 w-8 text-navy/20"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm16 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
      </svg>

      <blockquote className="text-[22px] font-medium italic leading-relaxed text-black md:text-[26px]">
        "{quote}"
      </blockquote>

      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy/20">
          <span className="text-sm font-bold text-navy">{initials}</span>
        </div>
        <div className="text-left">
          <p className="text-[13px] font-semibold text-black">{author}</p>
          <cite className="text-[12px] not-italic text-graphite">{role}</cite>
        </div>
      </div>
    </div>
  );
}
