type Project = {
  name: string;
  bullets: string[];
};

type Experience = {
  company: string;
  initials: string;
  role: string;
  period: string;
  location: string;
  projects: Project[];
};

const experiences: Experience[] = [
  {
    company: "Graphy Labs Private Limited (by Unacademy)",
    initials: "GL",
    role: "Frontend Developer",
    period: "Jun 2025 – Present",
    location: "Bangalore",
    projects: [
      {
        name: "Learner Dashboard Revamp",
        bullets: [
          "Revamped the complete Learner Dashboard with a modernized UI and enhanced functionality.",
          "Integrated Cloudflare Realtime Kit SDK to enable seamless live class streaming.",
          "Implemented vertical & horizontal virtualization to efficiently render large course datasets.",
          "Developed global and course-level search across PDFs, recordings, quizzes, and assignments.",
        ],
      },
      {
        name: "Community Space (Slack Replica)",
        bullets: [
          "Designed a full-fledged community chat platform enabling real-time messaging via Webhooks.",
          "Implemented global search, channel-specific search, and keyword highlighting.",
          "Built dynamic link preview generation for shared URLs within chat messages.",
          "Developed cross-channel message routing and linkage across multiple channels.",
        ],
      },
      {
        name: "Telegram Community Integration",
        bullets: [
          "Engineered deep Telegram integration enabling creators to manage groups using a custom Graphy bot.",
          "Developed Webhook integrations for real-time community data syncing and engagement tracking.",
          "Designed a Chart.js Analytics Dashboard tracking users, transactions, and engagement metrics.",
        ],
      },
      {
        name: "WhatsApp & Email Campaigns",
        bullets: [
          "Built end-to-end campaign management using TypeScript, REST APIs, and Zustand.",
          "Implemented campaign creation, template management, and scheduling with auto-save.",
          "Developed Broadcast and Trigger-based workflows and an interactive Chart.js dashboard.",
        ],
      },
      {
        name: "Hiring Platform Web App",
        bullets: [
          "Architected a hiring platform from scratch using React, Redux, Axios, and REST APIs.",
          "Implemented multi-role logins for employers, candidates, and admins with JWT auth.",
          "Designed Kanban-style Recruitment Life Cycle (RLC) with drag-and-drop status updates.",
        ],
      },
      {
        name: "Educational Platform (Multi-role)",
        bullets: [
          "Built a multi-role platform using TypeScript and GraphQL for students, employers, and colleges.",
          "Implemented Kanban board for employers to track candidate application statuses.",
        ],
      },
      {
        name: "Gaming Platform CMS",
        bullets: [
          "Developed a CMS for a gaming platform using TypeScript and GraphQL.",
          "Implemented role-based access control with read/write permissions for admins.",
          "Designed interactive charts to analyze user engagement and prize distribution.",
        ],
      },
    ],
  },
  {
    company: "Krayen",
    initials: "KR",
    role: "Frontend Developer",
    period: "Prior",
    location: "",
    projects: [
      {
        name: "Product Suite",
        bullets: [
          "Part of the front-end team that built the company's initial suite of products.",
          "Engineered the flagship product's UI with Firebase and role-based authentication.",
          "Architected Redux for state management with RESTful APIs.",
        ],
      },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="bg-white rounded-3xl px-10 py-12">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-neutral-200" />
        <div className="px-4 py-1 text-xs text-neutral-500 border border-neutral-200 rounded-full">
          Experience
        </div>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      <div className="flex flex-col gap-10">
        {experiences.map((exp) => (
          <div key={exp.company} className="relative pl-6 border-l-2 border-neutral-100">
            <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-neutral-900" />

            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {/* Company logo placeholder — replace with <img> when you have logos */}
                <div className="w-8 h-8 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-[10px] font-black text-neutral-600 shrink-0">
                  {exp.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">{exp.company}</h3>
                  <p className="text-xs text-neutral-500">
                    {exp.role}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </p>
                </div>
              </div>
              <span className="text-xs text-neutral-400 bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 whitespace-nowrap ml-4 shrink-0">
                {exp.period}
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-5">
              {exp.projects.map((proj) => (
                <div key={proj.name}>
                  <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                    {proj.name}
                  </h4>
                  <ul className="flex flex-col gap-1.5">
                    {proj.bullets.map((b, i) => (
                      <li key={i} className="text-xs text-neutral-600 leading-relaxed flex gap-2">
                        <span className="text-neutral-300 mt-0.5 shrink-0">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
