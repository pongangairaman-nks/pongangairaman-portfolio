import SectionDivider from "@/components/ui/SectionDivider";

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services = [
  {
    title: "Frontend Engineering",
    desc: "Architecting scalable, high-performance SPAs with React, Next.js, and TypeScript.",
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="4" width="19" height="15" rx="2" />
        <path d="M2.5 8h19" />
        <path d="M9.5 12l-2 2 2 2" />
        <path d="M14.5 12l2 2-2 2" />
      </svg>
    ),
  },
  {
    title: "Web & Mobile Apps",
    desc: "Transforming ideas into exceptional web and React Native mobile experiences.",
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="4" width="13" height="10" rx="1.5" />
        <path d="M6 18h6M9 14v4" />
        <rect x="16" y="9" width="6" height="11" rx="1.5" />
        <path d="M18.5 17.5h1" />
      </svg>
    ),
  },
  {
    title: "Performance & Architecture",
    desc: "Code splitting, virtualization, and micro-frontends that keep apps fast at scale.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 2.5l9 5-9 5-9-5 9-5z" />
        <path d="M3 12l9 5 9-5" />
        <path d="M3 16.5l9 5 9-5" />
      </svg>
    ),
  },
  {
    title: "UI & Design Systems",
    desc: "Accessible, reusable component libraries and design systems that scale.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-28 md:px-12">
      {/* Lead statement */}
      <div className="py-24 text-center md:py-28">
        <h2
          className="mx-auto max-w-[44rem] text-balance text-4xl font-bold leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]"
          data-reveal
        >
          Building with modern, battle-tested technologies.
        </h2>
      </div>

      {/* Divider */}
      <SectionDivider label="Services" className="mb-16" />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group"
            data-reveal
            style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
          >
            <div className="mb-5 text-neutral-700 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-neutral-900">
              {s.icon}
            </div>
            <h3 className="mb-3 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-neutral-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
