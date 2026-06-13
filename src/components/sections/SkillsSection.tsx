import SectionDivider from "@/components/ui/SectionDivider";

const skillCategories = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="20" height="13" rx="2" />
        <line x1="7" y1="16" x2="15" y2="16" />
        <line x1="11" y1="16" x2="11" y2="20" />
      </svg>
    ),
    title: "Frontend Engineering",
    tags: "React.js · Next.js · TypeScript · JavaScript ES6+ · HTML5 · CSS3 · SPA",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="9" />
        <path d="M11 2 Q14 8 14 11 Q14 14 11 20" />
        <path d="M11 2 Q8 8 8 11 Q8 14 11 20" />
        <line x1="2" y1="11" x2="20" y2="11" />
      </svg>
    ),
    title: "State Management",
    tags: "Redux Toolkit · Zustand · React Query · Apollo Client · GraphQL",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Performance & Architecture",
    tags: "Micro-frontend · Code Splitting · Lazy Loading · Virtualization · PWA",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="7" height="7" rx="1.5" />
        <rect x="13" y="2" width="7" height="7" rx="1.5" />
        <rect x="2" y="13" width="7" height="7" rx="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" />
      </svg>
    ),
    title: "UI & Design Systems",
    tags: "MUI · Bootstrap · Custom Libraries · Design Systems · Accessibility (a11y)",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11 L8 7 L12 11 L16 7 L20 11" />
        <path d="M4 11 L4 18 L20 18 L20 11" />
      </svg>
    ),
    title: "Real-time & Integrations",
    tags: "Webhooks · Live Streaming · REST APIs · Third-party Integrations",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l2 2 4-4" />
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
      </svg>
    ),
    title: "Testing & Quality",
    tags: "Jest · React Testing Library · Debugging · Cross-browser Testing",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="18" height="14" rx="2" />
        <path d="M7 9 L5 11 L7 13" />
        <path d="M15 9 L17 11 L15 13" />
        <line x1="11" y1="7" x2="13" y2="15" />
      </svg>
    ),
    title: "Dev Tools & Workflow",
    tags: "Git · Postman · Chrome DevTools · npm/yarn · CI/CD basics",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="2" width="8" height="14" rx="2" />
        <circle cx="11" cy="13" r="0.5" fill="currentColor" stroke="none" />
        <line x1="7" y1="16" x2="15" y2="16" />
        <line x1="9" y1="20" x2="13" y2="20" />
      </svg>
    ),
    title: "Mobile Development",
    tags: "React Native · Android · Camera API · FlatList",
  },
];

export default function SkillsSection() {
  return (
    <section className="px-12 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14" data-reveal>
          <h2 className="text-4xl font-bold leading-snug tracking-tight">
            Tech I build with
            <br />
            <span className="text-neutral-400 italic">and technologies I love</span>
          </h2>
        </div>

        <SectionDivider label="Skills" className="mb-10" />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 80}ms` } as React.CSSProperties}
              className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-[var(--card-surface)] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-neutral-600">{cat.icon}</div>
              <h3 className="text-sm font-semibold text-neutral-900">{cat.title}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">{cat.tags}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
