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
    <section className="bg-[#f7f7f7] border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-8 py-16 flex flex-col gap-12">

        {/* Personal Quote */}
        <div className="bg-neutral-900 rounded-2xl px-8 py-10 text-center">
          <div className="text-neutral-600 text-4xl mb-3 leading-none">&ldquo;</div>
          <p className="text-white text-sm font-medium leading-loose italic max-w-xl mx-auto">
            We came from the stars, and to stardust we shall return. Between those two
            infinities lies our chance to dance, love, and leave a little light behind!!
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-neutral-700" />
            <span className="text-neutral-500 text-[10px] tracking-widest uppercase">
              PonGangaiRaman NKS
            </span>
            <div className="h-px w-8 bg-neutral-700" />
          </div>
        </div>

        {/* Beyond the Code */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-neutral-200" />
            <div className="px-4 py-1 text-xs text-neutral-500 border border-neutral-200 rounded-full bg-white">
              Beyond the Code
            </div>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          <div className="flex flex-wrap gap-2">
            {hobbies.map((h) => (
              <div
                key={h.label}
                className="flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-2 hover:border-neutral-400 transition-colors"
              >
                <span className="text-sm">{h.emoji}</span>
                <span className="text-xs font-medium text-neutral-700">{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-neutral-200" />
            <div className="px-4 py-1 text-xs text-neutral-500 border border-neutral-200 rounded-full bg-white">
              Fun Facts
            </div>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          <ol className="flex flex-col gap-4">
            {funFacts.map((fact, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-xs font-black text-neutral-300 mt-0.5 shrink-0 w-5 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">{fact}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
