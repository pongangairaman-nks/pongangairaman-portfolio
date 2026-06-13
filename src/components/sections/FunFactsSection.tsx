import SectionDivider from "@/components/ui/SectionDivider";

const funFacts = [
  "I'll dive into hours of Physics & Astrophysics discussions — not as an expert, just genuinely curious.",
  "Aspiring YouTuber at @ThoughtBasics — someday, the world will know.",
  "I would trade sleep for a good innovation session. Every time.",
  "Ex-footballer and basketball player — still got moves (debatable).",
  "Currently learning Malayalam. Slowly. Very slowly.",
  "I believe time travel is theoretically possible. Let's debate.",
];

export default function FunFactsSection() {
  return (
    <section className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionDivider label="Fun Facts" className="mb-10" />
        <ol className="grid gap-4 sm:grid-cols-2">
          {funFacts.map((fact, i) => (
            <li
              key={i}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 90}ms` } as React.CSSProperties}
              className="flex items-start gap-4 rounded-2xl border border-black/5 bg-(--card-surface) p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="shrink-0 text-2xl font-black leading-none tabular-nums text-neutral-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-neutral-600">{fact}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
