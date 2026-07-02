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
  chartTitle: string;
  chartLegend: [string, string];
  bars: number[]; // 6 valores, 0-100
  line: number[]; // 6 valores, 0-100
};

const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"];

const views: View[] = [
  {
    label: "Ventas y stock",
    metrics: [
      { label: "Ventas del mes", value: "48.200 €", delta: "+12% vs anterior", tone: "success" },
      { label: "Stock crítico", value: "3 SKUs", delta: "Revisar hoy", tone: "alert" },
    ],
    chartTitle: "Ventas mensuales (€)",
    chartLegend: ["Real", "Previsión"],
    bars: [55, 48, 62, 58, 70, 82],
    line: [50, 52, 58, 63, 68, 78],
  },
  {
    label: "Automatización",
    metrics: [
      { label: "Informes generados", value: "128", delta: "+34% este mes", tone: "success" },
      { label: "Horas ahorradas", value: "22h", delta: "Esta semana", tone: "success" },
    ],
    chartTitle: "Informes automatizados",
    chartLegend: ["Generados", "Objetivo"],
    bars: [30, 42, 38, 55, 60, 74],
    line: [35, 38, 44, 50, 58, 68],
  },
  {
    label: "Soporte",
    metrics: [
      { label: "Incidencias abiertas", value: "1", delta: "Dentro de SLA", tone: "success" },
      { label: "Tiempo de respuesta", value: "4h", delta: "Objetivo: 24h", tone: "success" },
    ],
    chartTitle: "Incidencias resueltas",
    chartLegend: ["Resueltas", "Recibidas"],
    bars: [20, 28, 18, 24, 15, 10],
    line: [24, 30, 22, 26, 18, 14],
  },
];

const ROTATE_MS = 4500;
const CHART_W = 260;
const CHART_H = 90;
const BAR_GAP = 10;

function barPath(values: number[]) {
  const barWidth = (CHART_W - BAR_GAP * (values.length - 1)) / values.length;
  return values.map((v, i) => {
    const height = (v / 100) * CHART_H;
    const x = i * (barWidth + BAR_GAP);
    const y = CHART_H - height;
    return { x, y, width: barWidth, height };
  });
}

function linePoints(values: number[]) {
  const step = CHART_W / (values.length - 1);
  return values
    .map((v, i) => `${i * step},${CHART_H - (v / 100) * CHART_H}`)
    .join(" ");
}

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
  const bars = barPath(view.bars);

  return (
    <div>
      <div
        className="rounded-card bg-navy p-6"
        role="img"
        aria-label={`${alt} — vista: ${view.label}`}
      >
        <div className="mb-4 flex items-center justify-between" aria-hidden="true">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
          </div>
          <span className="text-caption text-white/40">{view.label}</span>
        </div>

        <div key={view.label} className={reducedMotion ? "" : "animate-fadein"}>
          <div className="mb-3 grid grid-cols-2 gap-3" aria-hidden="true">
            {view.metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg bg-white/10 p-3.5">
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

          <div className="rounded-lg bg-white/10 p-3.5" aria-hidden="true">
            <div className="mb-2.5 flex items-center justify-between">
              <p className="text-caption text-white/60">{view.chartTitle}</p>
              <div className="flex items-center gap-2.5">
                <span className="flex items-center gap-1 text-caption text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8FB8E8]" />
                  {view.chartLegend[0]}
                </span>
                <span className="flex items-center gap-1 text-caption text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5B6787]" />
                  {view.chartLegend[1]}
                </span>
              </div>
            </div>

            <svg
              viewBox={`0 0 ${CHART_W} ${CHART_H}`}
              className="h-[90px] w-full"
              preserveAspectRatio="none"
            >
              {bars.map((bar, i) => (
                <rect
                  key={i}
                  x={bar.x}
                  y={bar.y}
                  width={bar.width}
                  height={bar.height}
                  rx="2"
                  fill="#8FB8E8"
                  fillOpacity="0.35"
                />
              ))}
              <polyline
                points={linePoints(view.line)}
                fill="none"
                stroke="#8FB8E8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="mt-1.5 flex justify-between">
              {months.map((m) => (
                <span key={m} className="text-caption text-white/35">
                  {m}
                </span>
              ))}
            </div>
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
