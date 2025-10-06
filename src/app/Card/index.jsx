// src/app/Card/index.jsx
"use client";

import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

export default function Card({
  variant,              
  background,           
  chapter,
  titleLead,
  titleBold,
  titleTail,
  subtitle,
  buttons = [],
  overlay = 0,          
  speed = -15,          
  scale = [1, 1.1],     
}) {
  if (variant === "twoColumn") {
    return (
      <section className="w-full relative z-10">
        <div className="grid md:grid-cols-2">
          <ParallaxProvider>
            <ParallaxBanner
              layers={[
                { image: background, speed, scale },
              ]}
              className="relative h-[80vh] md:h-screen text-white"
            >
              <div
                className="absolute inset-0"
                style={{ background: `rgba(0,0,0,${overlay})` }}
              />

              {chapter && (
                <div className="absolute top-6 left-6">
                  <p className="uppercase tracking-[0.35em] text-xs md:text-sm">
                    {chapter}
                  </p>
                </div>
              )}

              {buttons[0] && (
                <div className="absolute bottom-10 left-6">
                  <a
                    href={buttons[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-white/80 px-8 py-3 text-sm tracking-widest hover:border-indigo-400 transition"
                  >
                    {buttons[0].label}
                  </a>
                </div>
              )}
            </ParallaxBanner>
          </ParallaxProvider>

          <aside className="relative h-[80vh] md:h-screen bg-indigo-400 text-white">
            <div className="relative h-full flex flex-col justify-center px-6 md:px-16">
              <h2 className="font-light leading-none text-4xl md:text-6xl">
                {titleLead} <span className="font-bold">{titleBold}</span>{" "}
                <br className="hidden md:block" />
                {titleTail}
              </h2>

              {subtitle && (
                <p className="mt-6 max-w-xl text-lg md:text-xl leading-snug">
                  {subtitle}
                </p>
              )}

              <div className="mt-10 space-y-3">
                {buttons.slice(1).map((btn, i) => (
                  <a
                    key={i}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-white px-6 py-3 text-sm tracking-widest text-white hover:bg-white hover:text-indigo-400 transition"
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: background, speed, scale },
          ]}
          className="relative h-full w-full"
        >
          <div
            className="absolute inset-0"
            style={{ background: `rgba(0,0,0,${overlay})` }}
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            {chapter && (
              <p className="uppercase tracking-[0.3em] text-sm mb-6">
                {chapter}
              </p>
            )}

            <h2 className="text-4xl md:text-6xl font-light leading-snug">
              {titleLead} <span className="font-bold">{titleBold}</span> {titleTail}
            </h2>

            {!!buttons.length && (
              <div className="mt-10 flex flex-col gap-4">
                {buttons.map((btn, i) => (
                  <a
                    key={i}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-white/80 px-8 py-3 text-sm tracking-widest hover:border-indigo-400 transition"
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </section>
  );
}
