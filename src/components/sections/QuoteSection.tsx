export default function QuoteSection() {
  return (
    <section className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div
          className="rounded-3xl bg-neutral-900 px-8 py-16 text-center md:px-12"
          data-reveal
        >
          <div className="mb-4 font-serif text-5xl leading-none text-neutral-600">
            &ldquo;
          </div>
          <p className="mx-auto max-w-2xl text-lg font-medium italic leading-loose text-white md:text-xl">
            We came from the stars, and to stardust we shall return. Between those
            two infinities lies our chance to dance, love, and leave a little
            light behind!!
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-neutral-700" />
            <span className="text-xs uppercase tracking-widest text-neutral-500">
              PonGangaiRaman NKS
            </span>
            <div className="h-px w-10 bg-neutral-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
