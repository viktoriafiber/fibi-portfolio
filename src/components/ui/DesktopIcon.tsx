import Link from "next/link";
import { ReactNode } from "react";

interface DesktopIconProps {
  label: string;
  href: string;
  children: ReactNode;
}

export default function DesktopIcon({
  label,
  href,
  children,
}: DesktopIconProps) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="
        group
        flex
        flex-col
        items-center
        justify-start
        w-[96px]
        min-h-[96px]
        p-2
        rounded
        cursor-pointer
        select-none
        transition-all
        duration-150
        hover:bg-white/10
        active:scale-95
      "
    >
      <div className="flex items-center justify-center w-14 h-14">
        {children}
      </div>

      <span
        className="
          mt-2
          text-center
          text-white
          text-[13px]
          leading-tight
          drop-shadow-md
          group-hover:underline
        "
      >
        {label}
      </span>
    </Link>
  );
}