export default function Text2({
  heading,
  buttons = [],
  paragraphs = [],
 
}) {
  return (
    <section className="bg-black text-white py-16 md:py-24 mt-20 mb-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        
          <div>
            <h3 className="uppercase font-extrabold tracking-wide leading-tight text-2xl md:text-3xl">
              {heading}
            </h3>

            {!!buttons.length && (
              <div className="mt-12 space-y-6">
                {buttons.map((b, i) => (
                  <a
                    key={i}
                    href={b.href}
                    className="mt-2 inline-flex items-center rounded-full border border-white/80 px-8 py-3 text-sm tracking-widest hover:border-indigo-400 transition"
                  >
                    {b.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
          
            <div className="space-y-6 md:space-y-8 text-sm md:text-base leading-relaxed text-gray-200">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
