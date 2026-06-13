import CopyButton from "@/components/ui/CopyButton";

const EMAIL = "pongangairamannks@gmail.com";

export default function HeroSection() {
  return (
    <section className="bg-white rounded-3xl overflow-hidden">
      <nav className="flex items-center justify-between px-8 pt-5 pb-4">
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

      <div className="flex flex-col items-center text-center px-8 pt-10 pb-20">
        <div className="flex items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-neutral-200 overflow-hidden flex-shrink-0 flex items-end justify-center">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <circle cx="23" cy="17" r="10" fill="#9ca3af" />
              <path d="M3 46 Q3 31 23 31 Q43 31 43 46" fill="#9ca3af" />
            </svg>
          </div>
          <div className="ml-3 bg-white border border-neutral-200 rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm rotate-3 whitespace-nowrap">
            Open to opportunities 🚀
          </div>
        </div>

        <h1 className="text-5xl font-black leading-[1.15] tracking-tight mb-4">
          <span className="text-indigo-500">P</span>on
          <span className="text-indigo-500">G</span>angai
          <span className="text-indigo-500">R</span>aman{" "}
          <span className="text-neutral-400">NKS</span>
        </h1>

        <p className="text-lg text-neutral-500 font-medium mb-2">
          Frontend Engineer · Building products that matter
        </p>
        <p className="text-sm text-neutral-400 mb-10">📍 Bangalore</p>

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
