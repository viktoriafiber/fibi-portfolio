"use client";

import Window from "@/components/ui/Window";
import { ExeIcon } from "@/components/ui/WinIcons";

export default function MediaPlayerWindow() {
  return (
    <div className="hidden lg:block w-[460px] shrink-0">
      <Window
        title="JELLYFISH_FOREVER.MP4"
        icon={<ExeIcon />}
        active
      >
        <div className="bg-[#090909] p-2">

          <div className="px-1 pb-2 border-b border-white/10">

            <p className="font-typewriter text-[11px] uppercase tracking-[0.28em] text-white">
              Jellyfish Forever
            </p>

            <p className="mt-1 font-typewriter text-[9px] uppercase tracking-[0.22em] text-white/55">
              AI MICRO DOCUMENTARY
            </p>

          </div>

          <div className="mt-2 aspect-video overflow-hidden bg-black win-border-inset">

            <video
              controls
              autoPlay
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source
                src="https://res.cloudinary.com/dz7iinpgm/video/upload/v1782604094/hero_video_j8xtyb.mp4"
                type="video/mp4"
              />
            </video>

          </div>

        </div>
      </Window>
    </div>
  );
}