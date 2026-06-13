import CopyButton from "@/components/ui/CopyButton";

const EMAIL = "pongangairamannks@gmail.com";

export default function HeroSection() {
  return (
    <section className="bg-white border-b border-neutral-100">
      {/* Full-width nav */}
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-8 pt-6 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-neutral-500">{EMAIL}</span>
          <CopyButton text={EMAIL} />
          <a
            href="/cv.pdf"
            className="px-4 py-1.5 text-xs border border-neutral-200 rounded-full text-neutral-600 hover:bg-neutral-50 transition-colors"
          >
            CV
          </a>
        </div>
        <div className="flex items-center text-sm text-neutral-500">
          <a
            href="https://www.linkedin.com/in/pongangairaman-nks"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-neutral-300 mx-2">/</span>
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

      {/* Hero content */}
      <div className="max-w-4xl mx-auto px-8 pt-16 pb-24 flex flex-col items-center text-center">
        {/* Profile photo placeholder */}
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-neutral-100 border-2 border-neutral-200 overflow-hidden shrink-0 flex items-end justify-center">
            {/* Replace with <img src="/photo.jpg" className="w-full h-full object-cover" /> */}
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <circle cx="23" cy="17" r="10" fill="#d4d4d4" />
              <path d="M3 46 Q3 31 23 31 Q43 31 43 46" fill="#d4d4d4" />
            </svg>
          </div>
          <div className="ml-3 bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm rotate-3 whitespace-nowrap text-neutral-700">
            Open to opportunities ✦
          </div>
        </div>

        {/* PGR initials stay black, connecting letters italic gray */}
        <h1 className="text-5xl font-black leading-[1.15] tracking-tight mb-4">
          <span className="text-neutral-900">P</span>
          <span className="text-neutral-400 italic">on</span>
          <span className="text-neutral-900">G</span>
          <span className="text-neutral-400 italic">angai</span>
          <span className="text-neutral-900">R</span>
          <span className="text-neutral-400 italic">aman</span>
          {" "}
          <span className="text-neutral-300">NKS</span>
        </h1>

        <p className="text-base text-neutral-500 font-medium mb-2">
          Frontend Engineer · Building products that matter
        </p>
        <p className="text-sm text-neutral-400 mb-10">Bangalore, India</p>

        <div className="flex items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-800 transition-colors"
          >
            View Projects
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
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
            className="inline-flex items-center gap-2 bg-white text-neutral-900 px-7 py-3.5 rounded-full font-medium text-sm border border-neutral-200 hover:bg-neutral-50 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
