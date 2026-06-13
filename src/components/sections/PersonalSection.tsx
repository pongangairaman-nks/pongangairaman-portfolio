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
    <section className="bg-white rounded-3xl px-10 py-12 flex flex-col gap-10">
      {/* Personal Quote */}
      <div className="bg-neutral-900 rounded-2xl px-8 py-8 text-center">
        <p className="text-white text-base font-medium leading-relaxed italic">
          &ldquo;We came from the stars, and to stardust we shall return. Between those two
          infinities lies our chance to dance, love, and leave a little light behind!!&rdquo;
        </p>
        <p className="text-neutral-400 text-xs mt-4">— PonGangaiRaman NKS</p>
      </div>

      {/* Beyond the Code */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-neutral-200" />
          <div className="px-4 py-1 text-xs text-neutral-500 border border-neutral-200 rounded-full">
            Beyond the Code
          </div>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <div className="flex flex-wrap gap-2">
          {hobbies.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-full px-4 py-2 text-sm text-neutral-700"
            >
              <span>{h.emoji}</span>
              <span className="text-xs font-medium">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-neutral-200" />
          <div className="px-4 py-1 text-xs text-neutral-500 border border-neutral-200 rounded-full">
            Fun Facts
          </div>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <ol className="flex flex-col gap-3">
          {funFacts.map((fact, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="text-xs font-black text-indigo-400 mt-0.5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed">{fact}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
