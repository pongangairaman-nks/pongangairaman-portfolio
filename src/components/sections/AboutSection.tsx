const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Companies", value: "2" },
];

export default function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-12 py-24">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-neutral-400" />
          <div className="px-5 py-2 text-xs font-medium text-neutral-600 rounded-full bg-card shadow-sm">
            About
          </div>
          <div className="flex-1 h-px bg-neutral-400" />
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 bg-white border border-neutral-200 rounded-2xl px-6 py-6 text-center"
            >
              <div className="text-3xl font-black text-neutral-900">{stat.value}</div>
              <div className="text-sm text-neutral-500 mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="text-base text-neutral-600 leading-relaxed mb-10 max-w-2xl">
          Frontend Engineer with 4 years of experience building scalable, high-performance
          web applications using React, TypeScript, and Next.js. Skilled in architecting
          SPAs, optimizing performance, and implementing robust state management for
          complex, data-driven systems. Experienced in real-time features, API integrations
          (REST &amp; GraphQL), and modular frontend architectures. Focused on delivering
          reliable, performant, and user-centric products at scale.
        </p>

        <blockquote className="border-l-4 border-neutral-900 pl-6 py-1">
          <p className="text-base text-neutral-500 italic leading-relaxed">
            &ldquo;Need to make an impact in this world — give back something to the world
            that gave me life. Should make history that stands out.&rdquo;
          </p>
          <footer className="text-sm text-neutral-400 mt-2">— What drives me</footer>
        </blockquote>
      </div>
    </section>
  );
}
