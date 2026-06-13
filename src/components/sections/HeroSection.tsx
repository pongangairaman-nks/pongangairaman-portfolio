import CopyButton from "@/components/ui/CopyButton";

const EMAIL = "pongangairamannks@gmail.com";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Nav — full width, same gray background */}
      <nav className="flex items-center justify-between px-12 pt-7 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-600">{EMAIL}</span>
          <CopyButton text={EMAIL} />
          <a
            href="/cv.pdf"
            className="px-4 py-1.5 text-xs border border-neutral-400 rounded-full text-neutral-600 hover:bg-neutral-300 transition-colors"
          >
            CV
          </a>
        </div>
        <div className="flex items-center text-sm text-neutral-600">
          <a
            href="https://www.linkedin.com/in/pongangairaman-nks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-neutral-400 mx-3">/</span>
          <a
            href="https://github.com/pongangairaman-nks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero body — vertically centered, takes remaining screen */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-12 pb-16">
        {/* Profile photo + badge */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-20 h-20 rounded-full bg-neutral-300 border-2 border-neutral-400 overflow-hidden shrink-0 flex items-end justify-center">
            {/* Replace with: <img src="/photo.jpg" className="w-full h-full object-cover" alt="PonGangaiRaman" /> */}
            <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
              <circle cx="29" cy="21" r="13" fill="#b0b0b0" />
              <path d="M4 58 Q4 39 29 39 Q54 39 54 58" fill="#b0b0b0" />
            </svg>
          </div>
          <div className="ml-4 bg-white border border-neutral-200 rounded-full px-4 py-2 text-sm font-semibold shadow-sm rotate-3 whitespace-nowrap text-neutral-700">
            Open to opportunities ✦
          </div>
        </div>

        {/* Large name heading — PGR stay black, connecting text is italic gray */}
        <h1 className="text-7xl font-black leading-[1.1] tracking-tight mb-6">
          <span className="text-neutral-900">P</span>
          <span className="text-neutral-400 italic">on</span>
          <span className="text-neutral-900">G</span>
          <span className="text-neutral-400 italic">angai</span>
          <span className="text-neutral-900">R</span>
          <span className="text-neutral-400 italic">aman</span>
          {" "}
          <span className="text-neutral-400">NKS</span>
        </h1>

        <p className="text-xl text-neutral-500 font-medium mb-3">
          Frontend Engineer · Building products that matter
        </p>
        <p className="text-base text-neutral-400 mb-12">Bangalore, India</p>

        <div className="flex items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-neutral-800 transition-colors"
          >
            View Projects
            <svg width="14" height="14" viewBox="0 0 13 13" fill="none">
              <path
                d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 text-neutral-700 px-8 py-4 rounded-full font-medium text-base border border-neutral-400 hover:bg-neutral-300 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
