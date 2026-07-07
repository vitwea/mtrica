export default function LoadingBars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-end gap-[3px] motion-reduce:hidden ${className}`}
      role="status"
      aria-label="Cargando"
    >
      <span className="w-[3px] animate-loadingbar rounded-full bg-current [animation-delay:0ms]" style={{ height: "100%" }} />
      <span className="w-[3px] animate-loadingbar rounded-full bg-current [animation-delay:150ms]" style={{ height: "100%" }} />
      <span className="w-[3px] animate-loadingbar rounded-full bg-current [animation-delay:300ms]" style={{ height: "100%" }} />
    </span>
  );
}