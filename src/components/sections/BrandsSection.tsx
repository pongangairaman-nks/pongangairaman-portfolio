function NationalBankLogo() {
  return (
    <div className="flex items-center gap-1.5 text-neutral-700">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <circle cx="9" cy="6" r="4" />
        <path d="M1 18 Q1 12 9 12 Q17 12 17 18" />
      </svg>
      <div className="leading-tight">
        <div className="text-[8px] font-bold tracking-[0.12em]">NATIONAL</div>
        <div className="text-[8px] font-bold tracking-[0.12em]">BANK</div>
      </div>
    </div>
  );
}

function MatteredLogo() {
  return (
    <div className="flex items-center gap-1 text-neutral-800">
      <span className="text-sm font-semibold tracking-wide">mattered</span>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
        <polygon points="0,0 8,4 0,8" />
      </svg>
    </div>
  );
}

function CocaColaLogo() {
  return (
    <span
      className="text-xl font-bold italic text-neutral-800"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      Coca-Cola
    </span>
  );
}

function AdobeLogo() {
  return (
    <div className="flex items-center gap-1.5 text-neutral-800">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <polygon points="0,20 7,0 14,20" />
      </svg>
      <span className="text-sm font-semibold tracking-wide">Adobe</span>
    </div>
  );
}

function SubwayLogo() {
  return (
    <span className="text-base font-black tracking-widest text-neutral-800">
      SUBWAY
    </span>
  );
}

function CodecademyLogo() {
  return (
    <div className="flex items-center text-neutral-800 text-sm font-medium">
      <span className="border border-neutral-800 px-0.5 py-px text-[10px] font-bold mr-px leading-none">
        code
      </span>
      <span>cademy</span>
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="bg-white rounded-2xl px-10 py-7">
      <div className="flex items-center justify-between">
        <NationalBankLogo />
        <MatteredLogo />
        <CocaColaLogo />
        <AdobeLogo />
        <SubwayLogo />
        <CodecademyLogo />
      </div>
    </section>
  );
}
