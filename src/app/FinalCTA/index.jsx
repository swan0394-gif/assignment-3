export default function FinalCTA({ title, subtitle, button }) {
  return (
    <section className="bg-black text-white mt-20">
      <div className="min-h-[80vh] flex flex-col items-center text-center px-6 md:px-8 py-20 md:py-28">
        <h3 className="font-light text-[clamp(1.75rem,5vw,3rem)] leading-tight">
          {title}
        </h3>

        <p className="mt-6 text-xl md:text-2xl font-light italic leading-snug">
          {subtitle}
        </p>

        <div className="mt-12">
          <a
            href={button?.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-10 py-4 tracking-widest text-sm md:text-base hover:bg-white hover:text-black transition"
          >
            {button.label || " "}
          </a>
        </div>
      </div>
    </section>
  );
}
