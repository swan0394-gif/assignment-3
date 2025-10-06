
"use client";

import Link from "next/link";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";


const pillBtn =
  "inline-flex items-center rounded-full border border-white px-6 py-2 text-sm tracking-widest text-white hover:bg-white hover:text-black transition";

export default function TourPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      
      <ParallaxProvider>
        {/* =========================
           Banner 1
        ========================== */}
        <ParallaxBanner
          layers={[
            {
              image: "/images/20261.jpg", 
              speed: -20,                  
              scale: [1, 1.15],           
            },
          ]}
          className="relative h-[90vh] md:h-[95vh] overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex items-center">
            <div className="ml-auto w-full md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                THE WEEKND <br />
                <span className="underline decoration-4 underline-offset-8 decoration-indigo-400">
                  WORLD TOUR 2026
                </span>
              </h1>
              <p className="mt-6 text-base md:text-lg text-white/85 leading-relaxed">
                Experience an immersive journey through a new era of sound and
                visuals. Cinematic stage design, seamless transitions, and a setlist
                spanning iconic hits and recent releases.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/album" className={pillBtn}>
              LISTEN THE ALBUM
            </Link>

                <Link
                  href="https://www.theweeknd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pillBtn}
                >
                  OFFICIAL SITE
                </Link>
              </div>
            </div>
          </div>
        </ParallaxBanner>

        {/* =========================
           Text
        ========================== */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                <span className="underline decoration-4 underline-offset-8 decoration-indigo-400">
                  Concept
                </span>{" "}
                & Production
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Built with a striking, graphic visual language, the show blends
                large-scale projections, lighting architecture and narrative interludes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Highlights & Experience
              </h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Expect dynamic arrangements of fan favorites, intimate reworks, and
                high-energy moments. Carefully curated transitions deliver a fully
                immersive night.
              </p>
            </div>
          </div>

          
        </section>

        {/* =========================
           Banner 2
        ========================== */}
        <ParallaxBanner
          layers={[
            {
              image: "/images/tour2.jpg", 
              speed: -10,
              scale: [1, 1.05],
            },
          ]}
          className="relative h-[75vh] md:h-[85vh] overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 h-full flex items-end">
            <div className="mx-auto max-w-6xl px-4 pb-10">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Visuals, Narrative & Atmosphere
              </h2>
              <p className="mt-3 text-white/85 max-w-2xl">
                The visuals evolve with the music—oscillating between glossy dystopia
                and melancholic neon. It’s not just a concert; it’s a carefully staged
                story told through sound, motion and light.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://www.theweeknd.com/tour/?utm_campaign=nav&utm_medium=referral&utm_source=xo.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={pillBtn}
                >
                  FOLLOW UPDATES
                </Link>
              </div>
            </div>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>

      {/* =========================
         Dates
      ========================== */}
      <section id="dates" className="mx-auto max-w-6xl px-4 py-16 mb-32">
        <h2 className="text-2xl md:text-3xl font-semibold">Upcoming Dates</h2>
        <ul className="mt-6 space-y-3 text-white/80">
          <li className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
            <span>Mexico City, MX, Estadio GNP Seguros</span>
            <span className="text-white/60">Mon, Apr 20</span>
          </li>
          <li className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
            <span>Mexico City, MX, Estadio GNP Seguros</span>
            <span className="text-white/60">Tue, Apr 21</span>
          </li>
          <li className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
            <span>Mexico City, MX, Estadio GNP Seguros</span>
            <span className="text-white/60">Wed, Apr 22</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
