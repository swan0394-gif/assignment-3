
"use client";

import Image from "next/image";
import Link from "next/link";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";


const pillBtn =
  "inline-flex items-center rounded-full border border-indigo-400 px-6 py-2 text-xs tracking-widest text-white hover:bg-indigo-400 hover:text-black transition";


const albums = [
  {
    title: "Hurry Up Tomorrow (First Pressing Vinyl)",
    img: "/images/top1.jpg",
    href: "https://xo.store/collections/shop-all/products/hurry-up-tomorrow-first-pressing-vinyl",
  },
  {
    title:
      "THE WEEKND X HARMONY KORINE FOR EDGLRD ‘HURRY UP TOMORROW’ COLLECTOR’S EDITION VINYL",
    img: "/images/top2.jpg",
    href: "https://xo.store/collections/shop-all/products/the-weeknd-x-harmony-korine-for-edglrd-hurry-up-tomorrow-collector-s-edition-vinyl",
  },
  {
    title:
      "The Weeknd x Basquiat 'Hurry Up Tomorrow' Collector's Edition Vinyl",
    img: "/images/top3.jpg",
    href: "https://xo.store/collections/shop-all/products/the-weeknd-x-basquiat-hurry-up-tomorrow-collector-s-edition-vinyl",
  },
  {
    title: "HOUSE OF BALLOONS DECADE COLLECTOR’S EDITION 2LP",
    img: "/images/top4.jpg",
    href: "https://xo.store/collections/shop-all/products/house-of-balloons-decade-collector-s-edition-2lp",
  },
  {
    title: "BEAUTY BEHIND THE MADNESS 2LP",
    img: "/images/top5.jpg",
    href: "https://xo.store/collections/shop-all/products/beauty-behind-the-madness-2lp-1",
  },
  {
    title: "MY DEAR MELANCHOLY, 1LP",
    img: "/images/top6.jpg",
    href: "https://xo.store/collections/shop-all/products/my-dear-melancholy-1lp",
  },
  {
    title: "Hurry Up Tomorrow (Complete Edition) Clear Vinyl 2LP",
    img: "/images/top7.jpg",
    href: "https://xo.store/collections/shop-all/products/hurry-up-tomorrow-complete-edition-clear-vinyl-2lp",
  },
  {
    title: "DAWN FM 2LP",
    img: "/images/top8.jpg",
    href: "https://xo.store/collections/shop-all/products/dawn-fm-2lp-1",
  },
  {
    title: "AFTER HOURS ALBUM COLLECTOR’S VINYL 001 2LP",
    img: "/images/top9.jpg",
    href: "https://xo.store/collections/shop-all/products/after-hours-album-collector-s-vinyl-001-2lp",
  },
  {
    title: "AFTER HOURS 2LP",
    img: "/images/top10.jpg",
    href: "https://xo.store/collections/shop-all/products/after-hours-2lp",
  },
];

export default function AlbumPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
     
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image: "/images/albumbk.jpg",
              speed: -10,
              scale: [1, 1.1],
            },
          ]}
          className="h-[50vh] md:h-[65vh] relative"
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex items-end">
            <div className="pb-12">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                TOP 10{" "}
                <span className="underline decoration-4 underline-offset-8 decoration-indigo-400">
                  ALBUM
                </span>
              </h1>
              <p className="mt-4 text-white/85 max-w-2xl">
                Discover The Weeknd’s top 10 iconic albums. Hover to explore,
                click to buy.
              </p>
            </div>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>

      {/* Album  */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
          {albums.map((a) => (
            <div key={a.title} className="group relative">
              <Link
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl ring-1 ring-white/20 group-hover:ring-indigo-400 transition">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-[1.05] transition"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-[1.5px] transition flex items-center justify-center">
                    <span className={pillBtn}>Buy this album</span>
                  </div>
                </div>
                
                <p className="mt-3 text-xs md:text-s text-center text-white/90">
                  {a.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
  
}
