"use client";

import { siteContent } from "@/lib/content";
import DesktopSidebar from "./DesktopSidebar";
import HeroCamera from "./HeroCamera";
import MediaPlayerWindow from "./MediaPlayerWindow";
import HeroSocial from "./HeroSocial";
import DecorativeLabels from "./DecorativeLabels";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="hero"
      className="relative min-h-[130vh] w-full overflow-hidden hero-chromatic"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center scale-105 brightness-[0.85] saturate-[0.9]"
        >
          <source
            src="/assets/hero/eye_background.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-graphite/40 via-transparent to-graphite/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/30 via-transparent to-graphite/30" />
      </div>

      {/* Decorative texture */}
      <DecorativeLabels />

      <div
        className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "url('/assets/textures/texture_overlay.png')",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-site px-8 lg:px-16 pt-8 pb-24">
        {/* Top bar */}
        <div className="flex items-start justify-between mb-8">
          <div className="section-label">
            <span className="block text-white/40 text-[10px]">
              {hero.sectionNumber}
            </span>

            <span className="text-white/70">
              {hero.sectionLabel}
            </span>
          </div>

          <HeroSocial />
        </div>

        {/* Desktop */}
        <DesktopSidebar />

        {/* Main */}
        <div className="flex flex-col items-center text-center pt-4 md:pt-8">
          <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-light tracking-[0.15em] text-white mb-2 animate-fade-in">
            {hero.title}
          </h1>

          <p className="font-typewriter text-sm md:text-base tracking-[0.3em] text-white/80 mb-4 animate-fade-in">
            {hero.subtitle}
          </p>

          <p className="font-typewriter text-xs md:text-sm text-white/50 whitespace-pre-line leading-relaxed max-w-md mb-8 animate-fade-in">
            {hero.tagline}
          </p>

          {/* Camera + Player */}
          <div className="relative w-full max-w-4xl mx-auto mt-4">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10">
              <HeroCamera />
              <MediaPlayerWindow />
            </div>
          </div>

          {/* Description */}
          <div className="mt-12 max-w-xl mx-auto">
            <p className="font-sans text-sm text-white/60 leading-relaxed mb-6 whitespace-pre-line">
              {hero.description}
            </p>

            <a
              href="#contacts"
              className="win-button inline-block font-typewriter text-xs tracking-wider uppercase"
            >
              {hero.cta}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-graphite to-transparent z-[5]" />
    </section>
  );
}