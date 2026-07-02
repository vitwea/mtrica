import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className="rounded-card border border-bone bg-white p-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50">
        <Icon className="h-5 w-5 text-navy" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="mt-3 text-h4 text-black">{title}</h3>
      <p className="mt-1.5 text-body text-graphite">{description}</p>
      <a
        href={href}
        className="mt-3 inline-block text-ui text-navy hover:underline underline-offset-4"
      >
        Saber más →
      </a>
    </div>
  );
}
