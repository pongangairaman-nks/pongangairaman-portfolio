function UXUIIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="24" height="16" rx="2" />
      <line x1="10" y1="20" x2="18" y2="20" />
      <line x1="14" y1="20" x2="14" y2="24" />
      <rect x="5" y="7" width="5" height="5" rx="1" />
      <line x1="13" y1="8" x2="22" y2="8" />
      <line x1="13" y1="11" x2="22" y2="11" />
    </svg>
  );
}

function WebMobileIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="5" width="17" height="13" rx="1.5" />
      <line x1="2" y1="14" x2="19" y2="14" />
      <line x1="7" y1="20" x2="14" y2="20" />
      <rect x="21" y="8" width="5" height="10" rx="1" />
      <circle cx="23.5" cy="16.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="9" height="9" rx="1.5" />
      <rect x="16" y="3" width="9" height="9" rx="1.5" />
      <rect x="3" y="16" width="9" height="9" rx="1.5" />
      <rect x="16" y="16" width="9" height="9" rx="1.5" />
    </svg>
  );
}

function DevIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="24" height="18" rx="2" />
      <path d="M9 11 L5 15 L9 19" />
      <path d="M19 11 L23 15 L19 19" />
      <line x1="13" y1="9" x2="15" y2="21" />
    </svg>
  );
}

const services = [
  {
    icon: <UXUIIcon />,
    title: "UX & UI",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
  },
  {
    icon: <WebMobileIcon />,
    title: "Web & Mobile App",
    description:
      "Transforming ideas into exceptional web and mobile app experiences.",
  },
  {
    icon: <DesignIcon />,
    title: "Design & Creative",
    description:
      "Crafting visually stunning designs that connect with your audience.",
  },
  {
    icon: <DevIcon />,
    title: "Development",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white rounded-3xl px-10 py-12">
      <div className="text-center mb-8">
        <h2 className="text-[28px] font-bold leading-snug">
          Collaborate with{" "}
          <span className="text-neutral-400 italic">brands and agencies</span>
          <br />
          to create impactful results.
        </h2>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-neutral-200" />
        <div className="px-4 py-1 text-xs text-neutral-500 border border-neutral-200 rounded-full">
          Services
        </div>
        <div className="flex-1 h-px bg-neutral-200" />
      </div>

      <div className="grid grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col gap-2">
            <div className="text-neutral-600">{service.icon}</div>
            <h3 className="text-sm font-semibold text-neutral-900">
              {service.title}
            </h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
