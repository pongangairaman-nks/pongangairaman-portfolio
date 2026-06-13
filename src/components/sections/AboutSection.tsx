import SectionDivider from "@/components/ui/SectionDivider";

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Companies", value: "4" },
];

export default function AboutSection() {
  return (
    <section className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Divider */}
        <SectionDivider label="About" />

        {/* Heading */}
        <h2
          className="mb-14 text-center text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-5xl"
          data-reveal
        >
          Engineering products that
          <br />
          <span className="text-neutral-400 italic">scale, perform, and last.</span>
        </h2>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-3 gap-3 sm:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal
              style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
              className="rounded-2xl border border-black/5 bg-[var(--card-surface)] px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-3xl font-black text-neutral-900 md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs text-neutral-500 md:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bio — two-column editorial layout */}
        <div
          className="mb-16 grid gap-8 md:grid-cols-2 md:gap-14"
          data-reveal
        >
          <p className="text-[15px] leading-relaxed text-neutral-600 md:text-base">
            Frontend Engineer with 4 years of experience building scalable,
            high-performance web applications using React, TypeScript, and
            Next.js. Skilled in architecting SPAs, optimizing performance, and
            implementing robust state management for complex, data-driven
            systems.
          </p>
          <p className="text-[15px] leading-relaxed text-neutral-600 md:text-base">
            Experienced in real-time features, API integrations (REST &amp;
            GraphQL), and modular frontend architectures. Focused on delivering
            reliable, performant, and user-centric products at scale — the kind
            that hold up long after launch.
          </p>
        </div>

        {/* Pull quote — centered */}
        <blockquote className="mx-auto max-w-3xl text-center" data-reveal>
          <p className="text-xl italic leading-relaxed text-neutral-700 md:text-2xl">
            &ldquo;Need to make an impact in this world — give back something to
            the world that gave me life. Should make history that stands
            out.&rdquo;
          </p>
          <footer className="mt-5 text-sm text-neutral-400">— What drives me</footer>
        </blockquote>
      </div>
    </section>
  );
}
