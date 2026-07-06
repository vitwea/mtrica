"use client";

import { AlertTriangle, Lightbulb, BarChart3, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";

type ImpactMetric = {
  label: string;
  value: string;
};

type ProjectStorylineProps = {
  problem: string;
  solution: string;
  impact: ImpactMetric[];
};

export default function ProjectStoryline({
  problem,
  solution,
  impact,
}: ProjectStorylineProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  const step = (delay: string) =>
    `transition-all duration-500 ${delay} motion-reduce:transition-none ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
    }`;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-4"
    >
      {/* Problema */}
      <div className={`rounded-card border border-red-200 bg-white p-md ${step("delay-0")}`}>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-800">
          <AlertTriangle className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          El problema
        </span>
        <p className="mt-3 text-body text-black">{problem}</p>
      </div>

      {/* Conector */}
      <div className={`flex items-center justify-center text-graphite/40 ${step("delay-150")}`}>
        <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" strokeWidth={1.75} aria-hidden="true" />
      </div>

      {/* Solución */}
      <div className={`rounded-card border border-accent/20 bg-white p-md ${step("delay-300")}`}>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent">
          <Lightbulb className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          La solución
        </span>
        <p className="mt-3 text-body text-black">{solution}</p>
      </div>

      {/* Conector */}
      <div className={`flex items-center justify-center text-graphite/40 ${step("delay-[450ms]")}`}>
        <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" strokeWidth={1.75} aria-hidden="true" />
      </div>

      {/* Impacto — números centrados, apilados, separados por divisores */}
      <div className={`flex h-full flex-col justify-center rounded-card bg-navy p-md ${step("delay-[600ms]")}`}>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-[#C7CDFF]">
          <BarChart3 className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          El impacto
        </span>

        <div className="mt-5 flex flex-col">
          {impact.map((metric, i) => (
            <div
              key={metric.label}
              className={`py-4 text-center ${i > 0 ? "border-t border-white/10" : ""}`}
            >
              <p className="text-[28px] font-bold leading-none text-white">
                {metric.value}
              </p>
              <p className="mx-auto mt-2 max-w-[220px] text-[13px] leading-snug text-white/60">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}