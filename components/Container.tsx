import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const hasCustomPadding = className.includes("px-");

  return (
    <div
      className={`mx-auto max-w-content ${
        hasCustomPadding ? "" : "px-6 md:px-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
