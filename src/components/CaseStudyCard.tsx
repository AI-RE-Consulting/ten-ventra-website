interface CaseStudyCardProps {
  title: string;
  client: string;
  challenge: string;
  result: string;
  tags: string[];
}

export default function CaseStudyCard({
  title,
  client,
  challenge,
  result,
  tags,
}: CaseStudyCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-border-light bg-surface p-8">
      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-background px-3 py-1 text-xs font-medium text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-text-muted">{client}</p>

      <div className="mt-6 flex-1 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            Challenge
          </p>
          <p className="mt-1 text-sm leading-relaxed text-text-body">
            {challenge}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            Result
          </p>
          <p className="mt-1 text-sm leading-relaxed text-text-body">
            {result}
          </p>
        </div>
      </div>
    </div>
  );
}
