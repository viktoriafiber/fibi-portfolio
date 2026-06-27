import Window from "@/components/ui/Window";
import { ExeIcon } from "@/components/ui/WinIcons";
import { siteContent } from "@/lib/content";

export default function Contacts() {
  const { contacts } = siteContent;

  return (
    <section
      id="contacts"
      className="relative py-20 lg:py-28 bg-graphite-light/30"
    >
      <div className="mx-auto max-w-content px-8 lg:px-16">
        <span className="section-label block mb-6">
          {contacts.sectionNumber} / КОНТАКТЫ
        </span>

        <div className="max-w-2xl">
          <Window title={contacts.windowTitle} icon={<ExeIcon />} active>
            <div className="p-6 md:p-8">
              <p className="font-sans text-sm text-black/80 leading-relaxed mb-8">
                {contacts.text}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={contacts.links.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win-button font-typewriter text-xs tracking-wider"
                >
                  Telegram
                </a>

                <a
                  href={contacts.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win-button font-typewriter text-xs tracking-wider"
                >
                  Instagram
                </a>

                <a
                  href={contacts.links.email}
                  className="win-button font-typewriter text-xs tracking-wider"
                >
                  Email
                </a>

                <a
                  href={contacts.links.contra}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win-button font-typewriter text-xs tracking-wider"
                >
                  Contra
                </a>

                <a
                  href={contacts.links.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="win-button font-typewriter text-xs tracking-wider"
                >
                  TG Portfolio
                </a>
              </div>

              <a
                href={contacts.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-typewriter text-sm text-black/70 hover:text-black transition-colors group"
              >
                <span className="win-button px-6 py-2 text-xs tracking-widest uppercase">
                  {contacts.cta}
                </span>

                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </Window>
        </div>
      </div>
    </section>
  );
}