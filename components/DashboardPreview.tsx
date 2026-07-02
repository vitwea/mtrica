type DashboardPreviewProps = {
  // Ruta a una captura real (Power BI, etc.). Mientras no exista, se muestra
  // un mockup ilustrativo con la misma composición, para que el cambio a
  // contenido real no requiera tocar el layout del Hero ni de otras páginas.
  src?: string;
  alt?: string;
};

export default function DashboardPreview({
  src,
  alt = "Panel de control con métricas de ventas y stock",
}: DashboardPreviewProps) {
  if (src) {
    return (
      <div className="overflow-hidden rounded-card border border-bone">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full" />
      </div>
    );
  }

  return (
    <div className="rounded-card bg-navy p-5" role="img" aria-label={alt}>
      <div className="mb-3.5 flex gap-1.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
        <span className="h-2 w-2 rounded-full bg-white/25" />
      </div>

      <div className="mb-2.5 grid grid-cols-2 gap-2.5" aria-hidden="true">
        <div className="rounded-lg bg-white/10 p-3">
          <p className="text-caption text-white/60">Ventas del mes</p>
          <p className="mt-1 text-h4 text-white">48.200 €</p>
          <p className="mt-0.5 text-caption text-success-light">
            +12% vs anterior
          </p>
        </div>
        <div className="rounded-lg bg-white/10 p-3">
          <p className="text-caption text-white/60">Stock crítico</p>
          <p className="mt-1 text-h4 text-white">3 SKUs</p>
          <p className="mt-0.5 text-caption text-alert-light">Revisar hoy</p>
        </div>
      </div>

      <div className="rounded-lg bg-white/10 p-3" aria-hidden="true">
        <p className="mb-2.5 text-caption text-white/60">
          Previsión de demanda
        </p>
        <svg
          viewBox="0 0 260 70"
          className="h-[70px] w-full"
          preserveAspectRatio="none"
        >
          <polyline
            points="0,55 30,48 60,50 90,35 120,38 150,22 180,28 210,14 240,18 260,8"
            fill="none"
            stroke="#8FB8E8"
            strokeWidth="2"
          />
          <polyline
            points="0,60 30,58 60,54 90,50 120,44 150,40 180,32 210,28 240,20 260,15"
            fill="none"
            stroke="#5B6787"
            strokeWidth="1.5"
            strokeDasharray="3,3"
          />
        </svg>
      </div>
    </div>
  );
}
