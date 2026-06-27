"use client";

import { useEffect, useState } from "react";
import { siteContent } from "@/lib/content";

export default function Footer() {
  const [time, setTime] = useState("12:00");
  const { footer } = siteContent;

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const openWindows = [
    "FIBI_WORKSPACE.EXE",
    "СЕЙЧАС_ИГРАЕТ.MP4",
    "PROJECT_02.MP4",
  ];

  return (
    <footer className="sticky bottom-0 z-50">
      {/* Taskbar */}
      <div className="win-border-outset bg-win-gray h-10 flex items-center px-1 gap-1">
        {/* Start button */}
        <button
          type="button"
          className="win-button flex items-center gap-1.5 px-3 py-1 font-bold text-xs h-[28px]"
        >
          <svg viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true">
            <rect x="1" y="1" width="6" height="6" fill="#ff0000" />
            <rect x="9" y="1" width="6" height="6" fill="#00ff00" />
            <rect x="1" y="9" width="6" height="6" fill="#0000ff" />
            <rect x="9" y="9" width="6" height="6" fill="#ffff00" />
          </svg>
          Пуск
        </button>

        {/* Open windows */}
        <div className="flex-1 flex items-center gap-1 overflow-hidden">
          {openWindows.map((win) => (
            <button
              key={win}
              type="button"
              className="win-button text-[10px] px-2 py-0.5 h-[26px] truncate max-w-[160px] font-typewriter"
            >
              {win}
            </button>
          ))}
        </div>

        {/* System tray */}
        <div className="flex items-center gap-2 px-2 win-border-inset bg-win-gray h-[26px]">
          <span className="text-[10px]" aria-hidden="true">
            🔊
          </span>
          <span className="font-typewriter text-[11px] text-black tabular-nums">
            {time}
          </span>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-graphite py-4 px-8 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-white/5">
        <span className="font-typewriter text-[10px] text-white/30">
          {footer.copyright}
        </span>
        <div className="text-center">
          <span className="font-typewriter text-xs text-white/50 tracking-widest">
            {footer.name}
          </span>
        </div>
        <span className="font-typewriter text-[10px] text-white/30 tracking-wider">
          {footer.role}
        </span>
      </div>
    </footer>
  );
}
