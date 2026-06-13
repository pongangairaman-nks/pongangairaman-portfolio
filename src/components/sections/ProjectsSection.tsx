type Project = {
  name: string;
  description: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "NeuroBot",
    description:
      "No-code AI chatbot platform with RAG & visual pipeline builder. Full-stack SaaS enabling non-technical users to build, deploy, and monitor AI chatbots. Includes embeddable SDK, RBAC, rate limiting, and LLM gateway with circuit breaker.",
    tags: ["React", "Express.js", "PostgreSQL", "pgVector", "Redis", "TypeScript"],
    featured: true,
  },
  {
    name: "Resume Automation Platform",
    description:
      "AI-powered resume tailoring platform that optimizes resume content against job descriptions using LLMs. Supports master resume management, reusable templates, and one-click ATS-friendly generation.",
    tags: ["LLMs", "TypeScript", "REST APIs", "React"],
  },
  {
    name: "IDColab",
    description:
      "Interior design project management platform for designers. Features PDF annotation, panorama viewer, 3D model viewer, side-by-side comparison, Shadow Study tools, and real-time preview systems.",
    tags: ["React", "TypeScript", "3D Viewer", "PDF Annotation"],
    featured: true,
  },
  {
    name: "Real-Time Generator Monitor",
    description:
      "Geolocation-based dashboard for monitoring generator metrics in real time. Tracks speed, fuel level, and temperature with interactive charts, gauges, and Pigeon Maps integration.",
    tags: ["React", "MUI", "Zustand", "Chart.js", "Pigeon Maps"],
  },
  {
    name: "UPI Expense Tracker",
    description:
      "React Native Android app for tracking UPI payments and managing budgets. Uses native camera and storage access for transaction scanning with FlatList-based UI and CRUD modals.",
    tags: ["React Native", "Android", "Camera API", "FlatList"],
  },
  {
    name: "Album Customization Platform",
    description:
      "Platform connecting photographers with album makers. Enables image upload, design customization, and integrated Razorpay payment processing with automated workflow triggers.",
    tags: ["React", "Razorpay", "REST APIs"],
  },
];

function ProjectIcon({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="w-full h-28 rounded-xl bg-neutral-100 border border-neutral-200 mb-4 flex flex-col items-center justify-center gap-2">
      {/* Project preview placeholder — replace with a screenshot or custom icon */}
      <div className="w-10 h-10 rounded-lg bg-neutral-200 border border-neutral-300 flex items-center justify-center text-sm font-black text-neutral-500">
        {initials}
      </div>
      <span className="text-[10px] text-neutral-400">Project preview</span>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white rounded-3xl px-10 py-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-neutral-200" />
        <div className="px-4 py-1 text-xs text-neutral-500 border border-neutral-200 rounded-full">
          Projects
        </div>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-2xl p-5 flex flex-col bg-neutral-50 border border-neutral-100 hover:border-neutral-300 transition-colors"
          >
            <ProjectIcon name={project.name} />

            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-sm font-bold text-neutral-900">{project.name}</h3>
              {project.featured && (
                <span className="text-[10px] font-semibold text-neutral-500 bg-white border border-neutral-200 rounded-full px-2 py-0.5 whitespace-nowrap shrink-0">
                  Featured
                </span>
              )}
            </div>

            <p className="text-xs text-neutral-500 leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium text-neutral-500 bg-white border border-neutral-200 rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
