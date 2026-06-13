import SectionDivider from "@/components/ui/SectionDivider";

const hobbies = [
  { emoji: "🔭", label: "Astrophysics & Quantum Physics" },
  { emoji: "➗", label: "Mathematics" },
  { emoji: "⚽", label: "Football & Basketball" },
  { emoji: "🏔️", label: "Travel · Hiking · Climbing" },
  { emoji: "🎥", label: "Aspiring YouTuber (@ThoughtBasics)" },
  { emoji: "🌐", label: "Learning Malayalam" },
];

export default function BeyondTheCodeSection() {
  return (
    <section className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionDivider label="Beyond the Code" className="mb-10" />
        <div className="flex flex-wrap justify-center gap-3" data-reveal>
          {hobbies.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2.5 rounded-full border border-black/5 bg-(--card-surface) px-5 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-base">{h.emoji}</span>
              <span className="text-sm font-medium text-neutral-700">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
