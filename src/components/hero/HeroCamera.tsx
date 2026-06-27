"use client";

import Image from "next/image";

export default function HeroCamera() {
  return (
    <div className="relative w-[280px] sm:w-[340px] md:w-[400px] lg:w-[440px] shrink-0">
      <Image
        src="/assets/hero/camera.png"
        alt="MiniDV Camera"
        width={440}
        height={500}
        priority
        className="w-full h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.45)] select-none pointer-events-none"
      />
    </div>
  );
}