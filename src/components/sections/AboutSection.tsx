const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Companies", value: "2" },
];

export default function AboutSection() {
  return (
    <section className="bg-[#f7f7f7] border-b border-neutral-100">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-neutral-200" />
          <div className="px-4 py-1 text-xs text-neutral-500 border border-neutral-200 rounded-full bg-white">
            About
          </div>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <div className="flex gap-4 mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 bg-white border border-neutral-200 rounded-2xl px-5 py-5 text-center"
            >
              <div className="text-2xl font-black text-neutral-900">{stat.value}</div>
              <div className="text-xs text-neutral-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <p className="text-sm text-neutral-600 leading-relaxed mb-8 max-w-2xl">
          Frontend Engineer with 4 years of experience building scalable, high-performance
          web applications using React, TypeScript, and Next.js. Skilled in architecting
          SPAs, optimizing performance, and implementing robust state management for
          complex, data-driven systems. Experienced in real-time features, API integrations
          (REST &amp; GraphQL), and modular frontend architectures. Focused on delivering
          reliable, performant, and user-centric products at scale.
        </p>

        <blockquote className="border-l-4 border-neutral-900 pl-5 py-1">
          <p className="text-sm text-neutral-500 italic leading-relaxed">
            &ldquo;Need to make an impact in this world — give back something to the world
            that gave me life. Should make history that stands out.&rdquo;
          </p>
          <footer className="text-xs text-neutral-400 mt-2">— What drives me</footer>
        </blockquote>
      </div>
    </section>
  );
}
