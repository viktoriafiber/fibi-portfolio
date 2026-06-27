import Image from "next/image";
import Window from "@/components/ui/Window";
import { TxtIcon } from "@/components/ui/WinIcons";
import { siteContent } from "@/lib/content";

export default function About() {
  const { about } = siteContent;

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-graphite-light/30">
      <div className="mx-auto max-w-content px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <Window title={about.windowTitle} icon={<TxtIcon />} active>
              <div className="p-4 md:p-6 relative min-h-[320px]">
                {/* Menu bar like notepad */}
                <div className="flex gap-4 mb-4 pb-2 border-b border-win-gray-dark/30">
                  {["Файл", "Правка", "Формат", "Вид", "Справка"].map((item) => (
                    <span
                      key={item}
                      className="font-sans text-[11px] text-black/70 cursor-default hover:bg-win-blue hover:text-white px-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Text content */}
                <div className="font-sans text-sm text-black/80 leading-relaxed whitespace-pre-line pr-56">
                  {about.text}
                </div>

                {/* Photo */}
                <div className="absolute top-8 right-6 w-44 md:w-52 rotate-2">
                  <Image
                    src="/assets/about/about_photo.jpg"
                    alt="Виктория"
                    width={220}
                    height={280}
                    className="w-full h-auto rounded-sm shadow-xl"
                  />
                </div>

                {/* Status bar */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-1 bg-win-gray win-border-inset text-[10px] text-black/60 font-typewriter">
                  <span>last edit: {about.updatedDate}</span>
                  <span>saved</span>
                </div>
              </div>
            </Window>
          </div>

          {/* Notes window */}
          <div className="lg:col-span-4">
            <Window title="06_ЗАМЕТКИ.TXT" icon={<TxtIcon />} active={false}>
              <div className="p-4 font-typewriter text-xs text-black/70 space-y-2">
                <p>☐ идея нового проекта</p>
                <p>☐ созвон с брендом</p>
                <p>☑ render v03</p>
                <p>☐ обновить архив</p>
                <p className="text-black/40 pt-2">autosave...</p>
              </div>
            </Window>
          </div>
        </div>
      </div>
    </section>
  );
}
