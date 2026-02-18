interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
      {children}
    </span>
  );
}
