const hobbies = [
  { emoji: "🔭", label: "Astrophysics & Quantum Physics" },
  { emoji: "➗", label: "Mathematics" },
  { emoji: "⚽", label: "Football & Basketball" },
  { emoji: "🏔️", label: "Travel · Hiking · Climbing" },
  { emoji: "🎥", label: "Aspiring YouTuber (@ThoughtBasics)" },
  { emoji: "🌐", label: "Learning Malayalam" },
];

const funFacts = [
  "I'll dive into hours of Physics & Astrophysics discussions — not as an expert, just genuinely curious.",
  "Aspiring YouTuber at @ThoughtBasics — someday, the world will know.",
  "I would trade sleep for a good innovation session. Every time.",
  "Ex-footballer and basketball player — still got moves (debatable).",
  "Currently learning Malayalam. Slowly. Very slowly.",
  "I believe time travel is theoretically possible. Let's debate.",
];

export default function PersonalSection() {
  return (
    <section className="px-12 py-24">
      <div className="max-w-4xl mx-auto flex flex-col gap-14">

        {/* Personal Quote */}
        <div className="bg-neutral-900 rounded-2xl px-10 py-12 text-center">
          <div className="text-neutral-600 text-5xl mb-4 leading-none font-serif">&ldquo;</div>
          <p className="text-white text-base font-medium leading-loose italic max-w-2xl mx-auto">
            We came from the stars, and to stardust we shall return. Between those two
            infinities lies our chance to dance, love, and leave a little light behind!!
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-neutral-700" />
            <span className="text-neutral-500 text-xs tracking-widest uppercase">
              PonGangaiRaman NKS
            </span>
            <div className="h-px w-10 bg-neutral-700" />
          </div>
        </div>

        {/* Beyond the Code */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-neutral-400" />
            <div className="px-5 py-2 text-xs font-medium text-neutral-600 rounded-full bg-card shadow-sm">
              Beyond the Code
            </div>
            <div className="flex-1 h-px bg-neutral-400" />
          </div>

          <div className="flex flex-wrap gap-3">
            {hobbies.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-2.5 bg-white border border-neutral-200 rounded-full px-5 py-2.5 hover:border-neutral-400 transition-colors"
              >
                <span className="text-base">{h.emoji}</span>
                <span className="text-sm font-medium text-neutral-700">{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-neutral-400" />
            <div className="px-5 py-2 text-xs font-medium text-neutral-600 rounded-full bg-card shadow-sm">
              Fun Facts
            </div>
            <div className="flex-1 h-px bg-neutral-400" />
          </div>

          <ol className="flex flex-col gap-5">
            {funFacts.map((fact, i) => (
              <li key={i} className="flex gap-5 items-start">
                <span className="text-sm font-black text-neutral-300 mt-0.5 shrink-0 w-6 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-neutral-600 leading-relaxed">{fact}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
