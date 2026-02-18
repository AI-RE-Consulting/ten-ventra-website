interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="border-l-2 border-accent py-1 pl-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-body">
        {description}
      </p>
    </div>
  );
}
