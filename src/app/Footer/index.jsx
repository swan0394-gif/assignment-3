export default function Footer({ footerLinks = [] }) {
  return (
    <footer className="w-full border-t border-white/10 py-6">
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base text-gray-300">
        {footerLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
