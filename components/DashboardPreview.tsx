"use client";

import { useEffect, useState } from "react";

type DashboardPreviewProps = {
  // Ruta a una captura real (Power BI, etc.). Mientras no exista, se rota
  // entre varias vistas ilustrativas — al pasar `src` se muestra fija y
  // deja de rotar, sin tocar el resto del layout del Hero.
  src?: string;
  alt?: string;
};

type Metric = {
  label: string;
  value: string;
  delta: string;
  tone: "success" | "alert";
};

type View = {
  label: string;
  metrics: [Metric, Metric];
  chartLabel: string;
};

const views: View[] = [
  {
    label: "Ventas y stock",
    metrics: [
      { label: "Ventas del mes", value: "48.200 €", delta: "+12% vs anterior", tone: "success" },
      { label: "Stock crítico", value: "3 SKUs", delta: "Revisar hoy", tone: "alert" },
    ],
    chartLabel: "Previsión de demanda",
  },
  {
    label: "Automatización",
    metrics: [
      { label: "Informes generados", value: "128", delta: "+34% este mes", tone: "success" },
      { label: "Horas ahorradas", value: "22h", delta: "Esta semana", tone: "success" },
    ],
    chartLabel: "Informes automatizados / semana",
  },
  {
    label: "Soporte",
    metrics: [
      { label: "Incidencias abiertas", value: "1", delta: "Dentro de SLA", tone: "success" },
      { label: "Tiempo de respuesta", value: "4h", delta: "Objetivo: 24h", tone: "success" },
    ],
    chartLabel: "Incidencias resueltas / mes",
  },
];

const ROTATE_MS = 4000;

export default function DashboardPreview({
  src,
  alt = "Panel de control con métricas de ventas y stock",
}: DashboardPreviewProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
  }, []);

  useEffect(() => {
    if (src || reducedMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % views.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [src, reducedMotion]);

  if (src) {
    return (
      <div className="overflow-hidden rounded-card border border-bone">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full" />
      </div>
    );
  }

  const view = views[index];

  return (
    <div>
      <div
        className="rounded-card bg-navy p-5"
        role="img"
        aria-label={`${alt} — vista: ${view.label}`}
      >
        <div className="mb-3.5 flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
        </div>

        <div key={view.label} className={reducedMotion ? "" : "animate-fadein"}>
          <div className="mb-2.5 grid grid-cols-2 gap-2.5" aria-hidden="true">
            {view.metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg bg-white/10 p-3">
                <p className="text-caption text-white/60">{metric.label}</p>
                <p className="mt-1 text-h4 text-white">{metric.value}</p>
                <p
                  className={`mt-0.5 text-caption ${
                    metric.tone === "success" ? "text-success-light" : "text-alert-light"
                  }`}
                >
                  {metric.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-white/10 p-3" aria-hidden="true">
            <p className="mb-2.5 text-caption text-white/60">{view.chartLabel}</p>
            <svg viewBox="0 0 260 70" className="h-[70px] w-full" preserveAspectRatio="none">
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
      </div>

      <div className="mt-3 flex justify-center gap-1.5" role="tablist" aria-label="Vistas del dashboard">
        {views.map((v, i) => (
          <button
            key={v.label}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={v.label}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-5 bg-navy" : "w-1.5 bg-bone"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
