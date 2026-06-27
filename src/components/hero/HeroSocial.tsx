import DesktopIcon from "@/components/ui/DesktopIcon";
import { getIcon } from "@/components/ui/WinIcons";
import { siteContent } from "@/lib/content";

export default function HeroSocial() {
  return (
    <div className="flex flex-col items-end gap-6 pr-2 pt-2">
      {siteContent.social.map((item) => (
        <DesktopIcon
          key={item.label}
          label={item.label}
          href={item.href}
        >
          {getIcon(item.icon as "telegram" | "instagram")}
        </DesktopIcon>
      ))}
    </div>
  );
}