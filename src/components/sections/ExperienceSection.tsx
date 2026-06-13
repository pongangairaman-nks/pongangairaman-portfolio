import SectionDivider from "@/components/ui/SectionDivider";

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
    ],
  },
  {
    company: "Mirafra Technologies Private Limited",
    initials: "MT",
    role: "Frontend Developer",
    period: "Jan 2025 – Jun 2025",
    location: "Bangalore",
    projects: [
      {
        name: "OTT SaaS Platform (White-label)",
        bullets: [
          "Built a white-label OTT platform using Next.js and Server-Side Rendering (SSR) to deliver optimized content experiences.",
          "Implemented JWT-based authentication, Role-Based Access Control (RBAC), and secure session management across multiple subdomains.",
          "Designed a multi-tenant architecture enabling client-specific branding and platform customization.",
          "Optimized rendering and caching strategies to achieve fast page loads and improved content delivery performance.",
          "Automated multi-stage CI/CD pipelines using GitHub Actions for streamlined testing and production deployments.",
        ],
      },
    ],
  },
  {
    company: "Dataphi Analytics Labs Private Limited",
    initials: "DA",
    role: "Frontend Developer",
    period: "Jun 2022 – Dec 2024",
    location: "Bangalore",
    projects: [
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
    period: "Feb 2022 – May 2022",
    location: "Bangalore",
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
    <section className="px-6 py-28 md:px-12">
      <div className="max-w-4xl mx-auto">
        <SectionDivider label="Experience" />

        <div className="flex flex-col gap-14">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              data-reveal
              className="relative pl-7 border-l-2 border-neutral-300"
            >
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-900 border-2 border-[var(--surface)]" />

              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--card-surface)] border border-black/5 flex items-center justify-center text-xs font-black text-neutral-600 shrink-0">
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
                <span className="text-xs text-neutral-500 bg-[var(--card-surface)] border border-black/5 rounded-full px-4 py-1.5 whitespace-nowrap ml-4 shrink-0">
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
