/**
 * A section-heading divider: a line, a gap, a slightly tilted pill, a gap,
 * a line. The pill uses --card-surface so it contrasts with its panel.
 */
export default function SectionDivider({
  label,
  className = "mb-14",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-5 ${className}`} data-reveal>
      <div className="h-px flex-1 bg-neutral-300" />
      <span className="-rotate-3 rounded-full bg-(--card-surface) px-5 py-2 text-xs font-medium text-neutral-600 shadow-sm">
        {label}
      </span>
      <div className="h-px flex-1 bg-neutral-300" />
    </div>
  );
}
