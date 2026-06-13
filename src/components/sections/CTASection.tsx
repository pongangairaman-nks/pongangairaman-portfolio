function HandshakeIcon() {
  return (
    <div className="w-20 h-20 rounded-full bg-[var(--card-surface)] border border-black/5 flex items-center justify-center mb-8" data-reveal>
      <svg
        width="40"
        height="40"
        viewBox="0 0 34 34"
        fill="none"
        stroke="#777"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 24 L10 16 L14 20 L17 17 L20 20 L24 16 L32 24" />
        <path d="M2 24 L6 28 L14 20" />
        <path d="M32 24 L28 28 L20 20" />
        <path d="M14 20 Q15.5 22 17 20 Q18.5 18 20 20" />
      </svg>
    </div>
  );
}

export default function CTASection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-12 py-24">
      <HandshakeIcon />

      <h2
        className="text-6xl font-bold leading-[1.1] tracking-tight mb-12 md:text-7xl"
        data-reveal
      >
        Let&apos;s build something
        <br />
        <span className="text-neutral-400 italic">that matters</span>
      </h2>

      <div
        className="flex items-center gap-4"
        data-reveal
        style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
      >
        <a
          href="mailto:pongangairamannks@gmail.com"
          className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 active:scale-95"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="1" y="3" width="12" height="8" rx="1" />
            <path d="M1 4.5 L7 8.5 L13 4.5" />
          </svg>
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/pongangairaman-nks"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-neutral-700 px-8 py-4 rounded-full font-medium text-base border border-neutral-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-300 active:scale-95"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
