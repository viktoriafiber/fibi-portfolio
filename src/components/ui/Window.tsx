"use client";

import { ReactNode } from "react";

interface WindowProps {
  title: string;
  icon?: ReactNode;
  active?: boolean;
  className?: string;
  children: ReactNode;
  id?: string;
}

function WindowControls() {
  return (
    <div className="flex gap-[2px]">
      <button
        type="button"
        aria-label="Свернуть"
        className="w-[18px] h-[16px] bg-win-gray win-border-outset flex items-center justify-center text-[8px] text-black font-bold leading-none"
      >
        _
      </button>
      <button
        type="button"
        aria-label="Развернуть"
        className="w-[18px] h-[16px] bg-win-gray win-border-outset flex items-center justify-center text-[8px] text-black font-bold leading-none"
      >
        □
      </button>
      <button
        type="button"
        aria-label="Закрыть"
        className="w-[18px] h-[16px] bg-win-gray win-border-outset flex items-center justify-center text-[8px] text-black font-bold leading-none hover:bg-red-600 hover:text-white"
      >
        ×
      </button>
    </div>
  );
}

export default function Window({
  title,
  icon,
  active = true,
  className = "",
  children,
  id,
}: WindowProps) {
  return (
    <div
      id={id}
      className={`win-border-outset bg-win-gray shadow-lg ${className}`}
    >
      <div
        className={`flex items-center justify-between px-1 py-[3px] ${
          active ? "win-title-bar" : "win-title-bar-inactive"
        }`}
      >
        <div className="flex items-center gap-1.5 min-w-0 flex-1">
          {icon && <span className="shrink-0 w-4 h-4">{icon}</span>}
          <span
            className={`font-sans text-[11px] truncate ${
              active ? "text-white font-bold" : "text-black"
            }`}
          >
            {title}
          </span>
        </div>
        <WindowControls />
      </div>
      <div className="win-border-inset bg-win-silver m-[2px]">{children}</div>
    </div>
  );
}
