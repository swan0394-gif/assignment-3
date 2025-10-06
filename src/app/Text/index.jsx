export default function Text({ title, paragraphs = [] }) {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 mt-20 mb-20">
      <h2 className="text-center text-5xl md:text-6xl font-light">{title}</h2>

      {paragraphs.map((para, i) => (
        <p
          key={i}
          className={`mt-12 max-w-3xl mx-auto leading-relaxed ${
            i === 1
              ? "text-xl md:text-2xl font-bold max-w-4xl leading-snug"
              : i === 2
              ? "text-sm md:text-base text-gray-300"
              : "text-lg"
          }`}
        >
          {para}
        </p>
      ))}
    </section>
  );
}
