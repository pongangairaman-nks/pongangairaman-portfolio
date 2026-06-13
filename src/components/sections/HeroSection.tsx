import CopyButton from "@/components/ui/CopyButton";
import ProfileAvatar from "@/components/ui/ProfileAvatar";

const EMAIL = "pongangairamannks@gmail.com";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col px-6 md:px-10 lg:px-12">
      {/* Nav */}
      <nav className="flex items-center justify-between pt-6 pb-4 md:pt-8">
        <div className="flex items-center gap-2.5">
          <span className="hidden text-[15px] text-neutral-500 sm:inline">
            {EMAIL}
          </span>
          <CopyButton text={EMAIL} />
          <a
            href="/cv.pdf"
            className="rounded-full bg-card px-6 py-2.5 text-sm font-medium text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50"
          >
            CV
          </a>
        </div>
        <div className="flex items-center text-[15px] text-neutral-500">
          <a
            href="https://www.linkedin.com/in/pongangairaman-nks"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900"
          >
            LinkedIn
          </a>
          <span className="mx-3 text-neutral-400">/</span>
          <a
            href="https://github.com/pongangairaman-nks"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-neutral-900"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero body — vertically centered */}
      <div className="flex flex-1 flex-col items-center justify-center pb-24 text-center">
        {/* Photo + floating name badge */}
        <div className="mb-10 flex flex-col items-center gap-3 sm:relative sm:block sm:gap-0">
          <ProfileAvatar
            alt="PonGangaiRaman NKS"
            className="h-28 w-28 md:h-32 md:w-32"
          />
          <span className="whitespace-nowrap rounded-full border border-black/5 bg-card px-4 py-2 text-[15px] font-medium text-neutral-700 shadow-md sm:absolute sm:top-1/2 sm:left-[70%] sm:-translate-y-1/2 sm:-rotate-3">
            PonGangaiRaman NKS 👋
          </span>
        </div>

        {/* Tagline */}
        <h1 className="max-w-[840px] text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          Building digital products, interfaces, and experiences.
        </h1>

        {/* CTA */}
        <a
          href="#projects"
          className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-neutral-900 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-neutral-800"
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
      </div>
    </section>
  );
}
