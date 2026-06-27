import Image from "next/image";
import Window from "@/components/ui/Window";
import { ArchiveIcon } from "@/components/ui/WinIcons";
import { siteContent } from "@/lib/content";

export default function Archive() {
  const { archive } = siteContent;

  return (
    <section id="archive" className="relative py-20 lg:py-28 bg-graphite">
      <div className="mx-auto max-w-content px-8 lg:px-16">
        <span className="section-label block mb-6">
          {archive.sectionNumber} / АРХИВ
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <Window title={archive.windowTitle} icon={<ArchiveIcon />} active>
              <div className="p-6">
                <p className="font-typewriter text-xs text-black/50 mb-6">
                  {archive.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {archive.folders.map((folder) => (
                    <div
                      key={folder.name}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-16 h-14 transition-transform group-hover:-translate-y-0.5">
                        <svg
                          viewBox="0 0 64 56"
                          className="w-full h-full"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 12 L4 48 L60 48 L60 20 L32 20 L24 12 Z"
                            fill="#ffcc00"
                            stroke="#cc9900"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M4 12 L24 12 L32 20 L60 20"
                            fill="#ffdd44"
                            stroke="#cc9900"
                            strokeWidth="1"
                          />
                        </svg>
                      </div>
                      <span className="font-typewriter text-[10px] text-black/70 mt-1 text-center group-hover:text-black">
                        {folder.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Window>
          </div>

          {/* CD disc + music player */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex justify-center">
              <div className="animate-spin-slow w-40 h-40 relative">
                <Image
                  src="/assets/textures/disc.png"
                  alt="CD disc"
                  width={160}
                  height={160}
                  className="rounded-full opacity-80 mix-blend-screen"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-graphite/80 border border-white/10 flex items-center justify-center">
                    <span className="font-typewriter text-[8px] text-white/60">
                      mix 02
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Window title="05_ДИСК.MIX" icon={<ArchiveIcon />} active={false}>
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-win-gray win-border-outset flex items-center justify-center">
                    <span className="text-[8px]">▶</span>
                  </div>
                  <div>
                    <p className="font-typewriter text-xs text-black/80">
                      MIX_02
                    </p>
                    <p className="font-typewriter text-[10px] text-black/50">
                      12 треков / 45:31
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-win-gray win-border-inset">
                  <div className="h-full w-1/4 bg-win-blue" />
                </div>
              </div>
            </Window>
          </div>
        </div>
      </div>
    </section>
  );
}
