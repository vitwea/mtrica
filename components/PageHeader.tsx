type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

// Cabecera compacta para páginas internas — el hero foto/degradado grande
// se reserva solo para Inicio (Fase 3: "un único momento de mayor impacto visual").
export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-bone bg-bone/40 py-xl-mobile md:py-xl">
      <div className="mx-auto max-w-2xl px-6 text-center md:px-8">
        <p className="text-ui text-navy">{eyebrow}</p>
        <h1 className="mt-4 text-h2Mobile text-black md:text-h1">{title}</h1>
        <p className="mt-5 text-bodyLg text-graphite">{subtitle}</p>
      </div>
    </section>
  );
}
