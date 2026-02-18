interface FeaturePanelProps {
  title: string;
  features: string[];
}

export default function FeaturePanel({ title, features }: FeaturePanelProps) {
  return (
    <div className="rounded-2xl bg-navy p-8 text-white lg:p-10">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-6 flex flex-col gap-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/80">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
