import Link from "next/link";

type ProjectCardProps = {
  sector: string;
  title: string;
  result: string;
  href: string;
  slug: string;
  index: number;
};

const CHART_COLORS = ["#4C5FFF", "#8FB8E8", "#7BC49B"];
const CHART_KINDS = ["bars", "line", "donut", "table", "kpi"] as const;

function hashStr(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

function BarsPreview({ hash, color }: { hash: number; color: string }) {
  const bars = Array.from({ length: 6 }, (_, i) => 35 + ((hash >> (i * 4)) & 0xf) * 4);
  const barWidth = 30;
  const gap = 8;
  const chartH = 60;
  return (
    <svg viewBox={`0 0 ${bars.length * (barWidth + gap)} ${chartH}`} className="h-full w-full" preserveAspectRatio="none">
      {bars.map((v, i) => {
        const height = (v / 100) * chartH;
        return (
          <rect key={i} x={i * (barWidth + gap)} y={chartH - height} width={barWidth} height={height} rx="3" fill={color} fillOpacity={i === bars.length - 1 ? 0.9 : 0.4} />
        );
      })}
    </svg>
  );
}

function LinePreview({ hash, color }: { hash: number; color: string }) {
  const points = Array.from({ length: 6 }, (_, i) => 20 + ((hash >> (i * 4)) & 0xf) * 4);
  const w = 260;
  const h = 60;
  const step = w / (points.length - 1);
  const coords = points.map((v, i) => ({ x: i * step, y: h - (v / 100) * h }));
  const linePath = coords.map((p) => `${p.x},${p.y}`).join(" ");
  const areaPath = `M${coords[0].x},${h} L${coords.map((p) => `${p.x},${p.y}`).join(" L")} L${coords[coords.length - 1].x},${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-full w-full" preserveAspectRatio="none">
      <path d={areaPath} fill={color} fillOpacity={0.15} />
      <polyline points={linePath} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={coords[coords.length - 1].x} cy={coords[coords.length - 1].y} r="3.5" fill="#0F1526" stroke={color} strokeWidth="2" />
    </svg>
  );
}

function DonutPreview({ hash, color }: { hash: number; color: string }) {
  const pct = 55 + (hash % 35);
  const r = 30;
  const circumference = 2 * Math.PI * r;
  const dash = (pct / 100) * circumference;
  return (
    <div className="flex h-full items-center justify-center gap-4">
      <svg viewBox="0 0 76 76" className="h-[70px] w-[70px] -rotate-90">
        <circle cx="38" cy="38" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="9" />
        <circle cx="38" cy="38" r={r} fill="none" stroke={color} strokeWidth="9" strokeDasharray={`${dash} ${circumference - dash}`} strokeLinecap="round" />
      </svg>
      <span className="text-h4 font-bold text-white">{pct}%</span>
    </div>
  );
}

function TablePreview({ hash, color }: { hash: number; color: string }) {
  const rows = Array.from({ length: 3 }, (_, i) => 45 + ((hash >> (i * 5)) & 0x1f) * 2);
  return (
    <div className="flex w-full flex-col justify-center gap-2.5 px-1">
      {rows.map((v, i) => (
        <div key={i} className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full" style={{ width: `${v}%`, backgroundColor: color, opacity: i === rows.length - 1 ? 1 : 0.5 }} />
        </div>
      ))}
    </div>
  );
}

function KpiPreview({ hash, color }: { hash: number; color: string }) {
  const valA = 20 + (hash % 60);
  const valB = 15 + ((hash >> 6) % 30);
  return (
    <div className="grid w-full grid-cols-2 gap-3 px-1">
      {[valA, valB].map((v, i) => (
        <div key={i} className="rounded-lg bg-white/[0.06] px-3 py-3 text-center">
          <p className="text-h4 font-bold text-white">
            {v}
            {i === 0 ? "%" : "h"}
          </p>
          <div className="mx-auto mt-1.5 h-[3px] w-8 rounded-full" style={{ backgroundColor: color }} />
        </div>
      ))}
    </div>
  );
}

export default function ProjectCard({
  sector,
  title,
  result,
  href,
  slug,
  index,
}: ProjectCardProps) {
  const colorHash = hashStr(slug);
  const color = CHART_COLORS[colorHash % CHART_COLORS.length];
  const kind = CHART_KINDS[index % CHART_KINDS.length];

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-card border border-bone bg-mist shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
    >
      <div className="overflow-hidden bg-navy-950">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3.5 py-2.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]/70" />
          <span className="h-2 w-2 rounded-full bg-[#FFBD2E]/70" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]/70" />
          <span className="ml-1.5 text-caption text-white/40">panel-cliente.pbix</span>
        </div>

        <div className="flex h-28 items-end justify-center px-4 pb-4 pt-5" aria-hidden="true">
          {kind === "bars" && <BarsPreview hash={colorHash} color={color} />}
          {kind === "line" && <LinePreview hash={colorHash} color={color} />}
          {kind === "donut" && <DonutPreview hash={colorHash} color={color} />}
          {kind === "table" && <TablePreview hash={colorHash} color={color} />}
          {kind === "kpi" && <KpiPreview hash={colorHash} color={color} />}
        </div>
      </div>

      <div className="p-md">
        <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-caption font-semibold uppercase tracking-wide text-navy">
          {sector}
        </span>

        <h3 className="mt-3.5 text-h4 text-black">{title}</h3>

        <p className="mt-2 text-h4 font-bold leading-snug text-accent">
          {result}
        </p>

        <span className="mt-3.5 inline-flex items-center gap-1 text-ui font-medium text-navy">
          Ver caso completo
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
        </span>
      </div>
    </Link>
  );
}