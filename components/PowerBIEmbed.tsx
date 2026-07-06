"use client";

import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";

type PowerBIEmbedProps = {
  embedUrl: string;
  title: string;
  aspectRatio?: string; // "16 / 9" por defecto
};

export default function PowerBIEmbed({
  embedUrl,
  title,
  aspectRatio = "16 / 9",
}: PowerBIEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-card border border-white/10 bg-navy-card">
      <div style={{ aspectRatio }} className="relative w-full">
        {loaded ? (
          <iframe
            title={title}
            src={embedUrl}
            className="absolute inset-0 h-full w-full"
            frameBorder={0}
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy-card transition-colors hover:bg-navy-hover"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/30 transition-transform group-hover:scale-105">
              <Play className="h-6 w-6 translate-x-0.5 text-white" fill="currentColor" />
            </span>
            <span className="text-ui font-medium text-white">Ver panel interactivo</span>
            <span className="text-caption text-white/50">
              Power BI real — prueba los filtros como lo haría el cliente
            </span>
          </button>
        )}
      </div>

      {loaded && (
        <div className="flex items-center justify-end border-t border-white/10 bg-white/[0.03] px-3 py-2">
          <a
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-caption text-white/50 hover:text-white"
          >
            Abrir en pantalla completa
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      )}
    </div>
  );
}
