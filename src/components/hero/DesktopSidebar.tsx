import DesktopIcon from "@/components/ui/DesktopIcon";
import { getIcon } from "@/components/ui/WinIcons";
import { siteContent } from "@/lib/content";

export default function DesktopSidebar() {
  return (
    <nav
      className="absolute left-4 lg:left-8 top-32 lg:top-36 z-20 hidden sm:flex flex-col gap-4"
      aria-label="Рабочий стол"
    >
      {siteContent.sidebar.map((item) => (
        <DesktopIcon key={item.label} label={item.label} href={item.href}>
          {getIcon(item.icon as "computer" | "folder" | "notes" | "trash")}
        </DesktopIcon>
      ))}
    </nav>
  );
}
