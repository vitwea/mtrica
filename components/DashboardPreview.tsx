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

type AreaView = {
  kind: "area";
  label: string;
  metrics: [Metric, Metric];
  chartTitle: string;
  line: number[];
  color: string;
};

type TableView = {
  kind: "table";
  label: string;
  metrics: [Metric, Metric];
  tableTitle: string;
  rows: { label: string; value: string; percent: number }[];
  color: string;
};

type DonutView = {
  kind: "donut";
  label: string;
  metrics: [Metric, Metric];
  donutTitle: string;
  centerValue: string;
  centerLabel: string;
  segments: { label: string; value: number; color: string }[];
  color: string;
};

type KpiView = {
  kind: "kpi";
  label: string;
  metrics: [Metric, Metric];
  kpiTitle: string;
  kpis: { label: string; value: string }[];
  color: string;
};

type View = AreaView | TableView | DonutView | KpiView;

const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"];

const views: View[] = [
  {
    kind: "area",
    label: "Ventas y stock",
    metrics: [
      { label: "Ventas del mes", value: "48.200 €", delta: "+12% vs anterior", tone: "success" },
      { label: "Stock crítico", value: "3 SKUs", delta: "Revisar hoy", tone: "alert" },
    ],
    chartTitle: "Ventas mensuales (€)",
    line: [50, 52, 58, 63, 68, 78],
    color: "#8FB8E8",
  },
  {
    kind: "table",
    label: "Automatización",
    metrics: [
      { label: "Informes generados", value: "134", delta: "+41% este mes", tone: "success" },
      { label: "Horas ahorradas", value: "26h", delta: "Esta semana", tone: "success" },
    ],
    tableTitle: "Informes automatizados por área",
    rows: [
      { label: "Ventas", value: "94%", percent: 94 },
      { label: "Stock", value: "81%", percent: 81 },
      { label: "Finanzas", value: "70%", percent: 70 },
    ],
    color: "#7BC49B",
  },
  {
    kind: "donut",
    label: "Soporte",
    metrics: [
      { label: "Incidencias abiertas", value: "1", delta: "Dentro de SLA", tone: "success" },
      { label: "Tiempo de respuesta", value: "3h", delta: "Objetivo: 24h", tone: "success" },
    ],
    donutTitle: "Incidencias del mes",
    centerValue: "91%",
    centerLabel: "Resueltas",
    segments: [
      { label: "Resueltas", value: 91, color: "#4C5FFF" },
      { label: "Abiertas", value: 9, color: "#3A3F5C" },
    ],
    color: "#4C5FFF",
  },
  {
    kind: "kpi",
    label: "Mantenimiento",
    metrics: [
      { label: "Paneles activos", value: "5", delta: "En 3 áreas", tone: "success" },
      { label: "Próxima revisión", value: "12 días", delta: "Programada", tone: "success" },
    ],
    kpiTitle: "Estado del servicio",
    kpis: [
      { label: "Uptime del panel", value: "99,8%" },
      { label: "Bolsa de horas usada", value: "6/10h" },
    ],
    color: "#8FB8E8",
  },
];

const ROTATE_MS = 4500;
const CHART_W = 260;
const CHART_H = 90;

function linePoints(values: number[]) {
  const step = CHART_W / (values.length - 1);
  return values.map((v, i) => ({
    x: i * step,
    y: CHART_H - (v / 100) * CHART_H,
  }));
}

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
    <div className="group relative">
      <div
        className="absolute -inset-8 -z-10 rounded-full bg-accent/25 opacity-60 blur-3xl motion-reduce:hidden"
        aria-hidden="true"
      />

      <div className="overflow-hidden rounded-card border border-white/[0.08] bg-navy-card shadow-2xl shadow-black/60 transition-transform duration-500 ease-out [transform:perspective(1200px)_rotateY(-4deg)_rotateX(1.5deg)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_rotateX(0deg)] motion-reduce:[transform:none]">
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
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/50">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-light opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success-light" />
            </span>
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

          {view.kind === "area" && <AreaBlock view={view} uid={uid} />}
          {view.kind === "table" && <TableBlock view={view} />}
          {view.kind === "donut" && <DonutBlock view={view} />}
          {view.kind === "kpi" && <KpiBlock view={view} />}
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

function AreaBlock({ view, uid }: { view: AreaView; uid: string }) {
  const points = linePoints(view.line);
  const lastPoint = points[points.length - 1];
  const linePath = points.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPath = `M${points[0].x},${CHART_H} L${points
    .map((p) => `${p.x},${p.y}`)
    .join(" L")} L${lastPoint.x},${CHART_H} Z`;
  const gridFractions = [0, 0.25, 0.5, 0.75, 1];

  return (
    <div className="rounded-lg bg-white/[0.06] p-3.5" aria-hidden="true">
      <p className="mb-2.5 text-caption text-white/60">{view.chartTitle}</p>

      <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="h-[90px] w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`grad-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={view.color} stopOpacity="0.4" />
            <stop offset="100%" stopColor={view.color} stopOpacity="0" />
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

        <path d={areaPath} fill={`url(#grad-${uid})`} />
        <polyline
          points={linePath}
          fill="none"
          stroke={view.color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={i === points.length - 1 ? 4 : 2.5} fill={i === points.length - 1 ? "#0F1526" : view.color} stroke={i === points.length - 1 ? view.color : "none"} strokeWidth="2" />
        ))}
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
              <div
                className="h-full rounded-full"
                style={{ width: `${row.percent}%`, backgroundColor: view.color }}
              />
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

function KpiBlock({ view }: { view: KpiView }) {
  return (
    <div className="rounded-lg bg-white/[0.06] p-3.5" aria-hidden="true">
      <p className="mb-3 text-caption text-white/60">{view.kpiTitle}</p>
      <div className="grid grid-cols-2 gap-3">
        {view.kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-lg bg-white/[0.05] px-3 py-3.5 text-center">
            <p className="text-h3 leading-none text-white">{kpi.value}</p>
            <p className="mt-2 text-caption text-white/50">{kpi.label}</p>
            <div className="mx-auto mt-2.5 h-[3px] w-8 rounded-full" style={{ backgroundColor: view.color }} />
          </div>
        ))}
      </div>
    </div>
  );
}