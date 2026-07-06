"use client";

import { useEffect, useId, useState } from "react";

type DashboardPreviewProps = {
  src?: string;
  alt?: string;
};

type Metric = {
  label: string;
  value: string;
  delta: string;
  tone: "success" | "alert";
};

type ChartView = {
  kind: "chart";
  label: string;
  metrics: [Metric, Metric];
  chartTitle: string;
  chartLegend: [string, string];
  bars: number[];
  line: number[];
};

type TableView = {
  kind: "table";
  label: string;
  metrics: [Metric, Metric];
  tableTitle: string;
  rows: { label: string; value: string; percent: number }[];
};

type DonutView = {
  kind: "donut";
  label: string;
  metrics: [Metric, Metric];
  donutTitle: string;
  centerValue: string;
  centerLabel: string;
  segments: { label: string; value: number; color: string }[];
};

type View = ChartView | TableView | DonutView;

const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"];

const views: View[] = [
  {
    kind: "chart",
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
    kind: "table",
    label: "Automatización",
    metrics: [
      { label: "Informes generados", value: "128", delta: "+34% este mes", tone: "success" },
      { label: "Horas ahorradas", value: "22h", delta: "Esta semana", tone: "success" },
    ],
    tableTitle: "Informes automatizados por área",
    rows: [
      { label: "Ventas", value: "92%", percent: 92 },
      { label: "Stock", value: "78%", percent: 78 },
      { label: "Finanzas", value: "65%", percent: 65 },
    ],
  },
  {
    kind: "donut",
    label: "Soporte",
    metrics: [
      { label: "Incidencias abiertas", value: "1", delta: "Dentro de SLA", tone: "success" },
      { label: "Tiempo de respuesta", value: "4h", delta: "Objetivo: 24h", tone: "success" },
    ],
    donutTitle: "Incidencias del mes",
    centerValue: "87%",
    centerLabel: "Resueltas",
    segments: [
      { label: "Resueltas", value: 87, color: "#8FB8E8" },
      { label: "Abiertas", value: 13, color: "#5B6787" },
    ],
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
  return values.map((v, i) => ({
    x: i * step,
    y: CHART_H - (v / 100) * CHART_H,
  }));
}

// Fase 11: dashboard ilustrativo → dashboard que se LEE como real.
// Chrome de ventana (puntos mac + nombre de archivo .pbix), 3 tipos de
// widget distintos por vista (combo bar+línea, tabla de progreso, donut)
// en vez de un único gráfico repetido, y detalles que solo tiene una
// herramienta de verdad: gridlines, área degradada, punto destacado en
// el último dato. El prop `src` sigue intacto para sustituir por
// capturas reales de Power BI en cuanto existan.
export default function DashboardPreview({
  src,
  alt = "Panel de control con métricas de ventas y stock",
}: DashboardPreviewProps) {
  const uid = useId();
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
      <div className="overflow-hidden rounded-card bg-navy-card shadow-2xl shadow-black/40">
        <div
          className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3"
          aria-hidden="true"
        >
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
            </div>
            <span className="text-caption text-white/40">panel-mtrica.pbix</span>
          </div>
          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/50">
            {view.label}
          </span>
        </div>

        <div key={view.label} className={`p-5 ${reducedMotion ? "" : "animate-fadein"}`}>
          <div className="mb-4 grid grid-cols-2 gap-3" aria-hidden="true">
            {view.metrics.map((metric) => (
              <div key={metric.label} className="rounded-lg bg-white/[0.06] p-3.5">
                <p className="text-caption text-white/50">{metric.label}</p>
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

          {view.kind === "chart" && <ChartBlock view={view} uid={uid} />}
          {view.kind === "table" && <TableBlock view={view} />}
          {view.kind === "donut" && <DonutBlock view={view} />}
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
              i === index ? "w-5 bg-white" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ChartBlock({ view, uid }: { view: ChartView; uid: string }) {
  const bars = barPath(view.bars);
  const points = linePoints(view.line);
  const lastPoint = points[points.length - 1];
  const linePath = points.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPath = `M${points[0].x},${CHART_H} L${points
    .map((p) => `${p.x},${p.y}`)
    .join(" L")} L${lastPoint.x},${CHART_H} Z`;
  const gridFractions = [0, 0.25, 0.5, 0.75, 1];

  return (
    <div className="rounded-lg bg-white/[0.06] p-3.5" aria-hidden="true">
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

      <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="h-[90px] w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`grad-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8FB8E8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8FB8E8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {gridFractions.map((f) => (
          <line
            key={f}
            x1={0}
            x2={CHART_W}
            y1={CHART_H * (1 - f)}
            y2={CHART_H * (1 - f)}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}

        {bars.map((bar, i) => (
          <rect
            key={i}
            x={bar.x}
            y={bar.y}
            width={bar.width}
            height={bar.height}
            rx="3"
            fill="#8FB8E8"
            fillOpacity={i === bars.length - 1 ? 0.55 : 0.25}
          />
        ))}

        <path d={areaPath} fill={`url(#grad-${uid})`} />
        <polyline
          points={linePath}
          fill="none"
          stroke="#8FB8E8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={lastPoint.x} cy={lastPoint.y} r="3" fill="#0F1526" stroke="#8FB8E8" strokeWidth="2" />
      </svg>

      <div className="mt-1.5 flex justify-between">
        {months.map((m) => (
          <span key={m} className="text-caption text-white/35">
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

function TableBlock({ view }: { view: TableView }) {
  return (
    <div className="rounded-lg bg-white/[0.06] p-3.5" aria-hidden="true">
      <p className="mb-3 text-caption text-white/60">{view.tableTitle}</p>
      <div className="flex flex-col gap-3">
        {view.rows.map((row) => (
          <div key={row.label}>
            <div className="mb-1 flex items-center justify-between text-caption text-white/60">
              <span>{row.label}</span>
              <span className="font-medium text-white/80">{row.value}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-[#8FB8E8]" style={{ width: `${row.percent}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DonutBlock({ view }: { view: DonutView }) {
  const r = 34;
  const circumference = 2 * Math.PI * r;
  let offsetAcc = 0;

  return (
    <div className="rounded-lg bg-white/[0.06] p-3.5" aria-hidden="true">
      <p className="mb-3 text-caption text-white/60">{view.donutTitle}</p>
      <div className="flex items-center gap-5">
        <div className="relative h-[90px] w-[90px] flex-shrink-0">
          <svg viewBox="0 0 90 90" className="h-[90px] w-[90px] -rotate-90">
            {view.segments.map((seg) => {
              const dash = (seg.value / 100) * circumference;
              const el = (
                <circle
                  key={seg.label}
                  cx="45"
                  cy="45"
                  r={r}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth="10"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  strokeDashoffset={-offsetAcc}
                  strokeLinecap="round"
                />
              );
              offsetAcc += dash;
              return el;
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-h4 font-bold text-white">{view.centerValue}</span>
            <span className="text-[10px] text-white/50">{view.centerLabel}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {view.segments.map((seg) => (
            <span key={seg.label} className="flex items-center gap-2 text-caption text-white/60">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: seg.color }} />
              {seg.label} <span className="font-medium text-white/80">{seg.value}%</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}