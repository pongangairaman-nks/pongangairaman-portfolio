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
    <section className="px-12 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 h-px bg-neutral-400" />
          <div className="px-5 py-2 text-xs font-medium text-neutral-600 rounded-full bg-card shadow-sm">
            Experience
          </div>
          <div className="flex-1 h-px bg-neutral-400" />
        </div>

        <div className="flex flex-col gap-14">
          {experiences.map((exp) => (
            <div key={exp.company} className="relative pl-7 border-l-2 border-neutral-300">
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-900 border-2 border-background" />

              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-4">
                  {/* Company logo placeholder — replace with <img> when available */}
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-xs font-black text-neutral-600 shrink-0">
                    {exp.initials}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">{exp.company}</h3>
                    <p className="text-sm text-neutral-500">
                      {exp.role}
                      {exp.location ? ` · ${exp.location}` : ""}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-neutral-500 bg-white border border-neutral-200 rounded-full px-4 py-1.5 whitespace-nowrap ml-4 shrink-0">
                  {exp.period}
                </span>
              </div>

              <div className="flex flex-col gap-6">
                {exp.projects.map((proj) => (
                  <div key={proj.name}>
                    <h4 className="text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-2.5">
                      {proj.name}
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {proj.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-neutral-600 leading-relaxed flex gap-3">
                          <span className="text-neutral-400 mt-0.5 shrink-0">—</span>
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
      </div>
    </section>
  );
}
