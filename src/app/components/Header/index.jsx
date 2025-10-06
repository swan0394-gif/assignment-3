"use client";

import Image from "next/image";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";

export default function Header({
  background = "/images/weekend-hall.jpg",

  title,
  description,
  buttonLabel,
  buttonHref = "#",

  watermarkImg,                 
  watermarkText,               
  watermarkOpacity = 0.15,
  watermarkClassName = "",

  caption,
  overlay = 0.4,
}) {
  return (
    <ParallaxProvider>
      <header className="relative h-[100svh] w-full overflow-hidden">
        <ParallaxBanner
          layers={[
            {
              speed: -20, 
              children: (
                <Image
                  src={background}
                  alt="Background"
                  fill
                  priority
                  className="object-cover"
                />
              ),
            },
            {
              speed: 0,
              children: (
                <div
                  className="absolute inset-0"
                  style={{ background: `rgba(0,0,0,${overlay})` }}
                />
              ),
            },
          ]}
          className="h-[100svh]"
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {watermarkImg ? (
            <Image
              src={watermarkImg}
              alt="watermark"
              width={1200}
              height={1200}
              className={`w-[160%] max-w-none object-contain ${watermarkClassName}`}
              style={{ opacity: watermarkOpacity }}
              priority
            />
          ) : watermarkText ? (
            <span
              className={`select-none leading-none text-white ${watermarkClassName}`}
              style={{
                opacity: watermarkOpacity,
                fontFamily: "sans-serif",
                fontSize: "clamp(4rem, 15vw, 20rem)",
                letterSpacing: "-.02em",
                fontWeight: 800,
              }}
            >
              {watermarkText}
            </span>
          ) : null}
        </div>

        {caption && (
          <div className="absolute bottom-10 right-6 z-10 max-w-xl text-white text-right">
            {caption}
          </div>
        )}

        {(title || description || buttonLabel) && (
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
            {title && <h1 className="text-5xl font-bold md:text-6xl">{title}</h1>}
            {description && (
              <p className="mt-6 max-w-xl text-base md:text-lg font-extralight leading-relaxed">
                {description}
              </p>
            )}
            {buttonLabel && (
              <a
                href={buttonHref}
                className="mt-10 inline-flex items-center rounded-full border border-white/80 px-8 py-3 text-sm tracking-widest hover:border-indigo-400 transition"
              >
                {buttonLabel}
              </a>
            )}
          </div>
        )}
      </header>
    </ParallaxProvider>
  );
}
