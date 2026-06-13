/* Grayscale tech-stack marks — the engineer's equivalent of the reference's
   client-logo strip. Swap in official brand SVGs anytime; the layout is uniform. */

function ReactMark() {
  return (
    <svg viewBox="-12 -12 24 24" className="h-8 w-8 shrink-0" fill="none" stroke="currentColor">
      <circle r="2.05" fill="currentColor" stroke="none" />
      <g strokeWidth="1">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="M9 8.2v7.6M9 8.2l6.4 8.3M15.4 8.2v5.4"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function TsMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0">
      <rect x="1" y="1" width="22" height="22" rx="4" fill="currentColor" />
      <text
        x="12.5"
        y="16.5"
        textAnchor="middle"
        fontSize="10.5"
        fontWeight="700"
        fill="white"
        fontFamily="var(--font-hanken), sans-serif"
      >
        TS
      </text>
    </svg>
  );
}

function GraphqlMark() {
  const verts = [
    [12, 2.5],
    [20.4, 7.25],
    [20.4, 16.75],
    [12, 21.5],
    [3.6, 16.75],
    [3.6, 7.25],
  ];
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" stroke="currentColor" fill="none">
      <polygon points="12,2.5 20.4,7.25 20.4,16.75 12,21.5 3.6,16.75 3.6,7.25" strokeWidth="1.1" />
      <line x1="12" y1="2.5" x2="3.6" y2="16.75" strokeWidth="1.1" />
      <line x1="12" y1="2.5" x2="20.4" y2="16.75" strokeWidth="1.1" />
      <line x1="3.6" y1="7.25" x2="20.4" y2="7.25" strokeWidth="1.1" />
      {verts.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.7" fill="currentColor" stroke="none" />
      ))}
    </svg>
  );
}

function ReduxMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" stroke="currentColor" fill="none">
      <path d="M7.4 7C3.6 9 2.6 14 5.6 17s9 2 11-1.2" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16.8 6.8c3.8 2 3.8 8 0.8 11" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="7.2" cy="6.6" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="6.6" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="18.6" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

const stack = [
  { name: "React", mark: <ReactMark /> },
  { name: "Next.js", mark: <NextMark /> },
  { name: "TypeScript", mark: <TsMark /> },
  { name: "GraphQL", mark: <GraphqlMark /> },
  { name: "Redux", mark: <ReduxMark /> },
  { name: "React Native", mark: <ReactMark /> },
];

export default function ClientsSection() {
  // Duplicated so the track can loop seamlessly under the marquee animation.
  const track = [...stack, ...stack];

  return (
    <div
      className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      data-reveal
    >
      <div className="flex w-max items-center gap-x-14 pl-14 animate-marquee hover:[animation-play-state:paused] md:gap-x-20 md:pl-20">
        {track.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 text-neutral-400 transition-colors hover:text-neutral-700"
          >
            {tech.mark}
            <span className="whitespace-nowrap text-lg font-semibold tracking-tight md:text-xl">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
