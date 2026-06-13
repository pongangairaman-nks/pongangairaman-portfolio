type Project = {
  name: string;
  description: string;
  tags: string[];
  highlight?: boolean;
};

const projects: Project[] = [
  {
    name: "NeuroBot",
    description:
      "No-code AI chatbot platform with RAG & visual pipeline builder. Full-stack SaaS enabling non-technical users to build, deploy, and monitor AI chatbots. Includes embeddable SDK, RBAC, rate limiting, and LLM gateway with circuit breaker.",
    tags: ["React", "Express.js", "PostgreSQL", "pgVector", "Redis", "TypeScript"],
    highlight: true,
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
    highlight: true,
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
            className={`rounded-2xl p-5 flex flex-col gap-3 ${
              project.highlight
                ? "bg-indigo-50 border border-indigo-100"
                : "bg-neutral-50 border border-neutral-100"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold text-neutral-900">{project.name}</h3>
              {project.highlight && (
                <span className="text-[10px] font-semibold text-indigo-500 bg-white border border-indigo-200 rounded-full px-2 py-0.5 whitespace-nowrap">
                  Featured
                </span>
              )}
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">{project.description}</p>
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
