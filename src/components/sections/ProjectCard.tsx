"use client";

import { useState } from "react";
import Window from "@/components/ui/Window";

interface Project {
  id: string;
  title: string;
  duration: string;
  media: string;
  type: "video" | "image";
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Window title={project.title} icon={<ExeIcon />} active={isHovered}>
        <div className="relative aspect-[4/3] bg-black overflow-hidden">
          {project.type === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src={project.media} type="video/mp4" />
              <source src={project.media} type="video/quicktime" />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.media}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Duration */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 pointer-events-none">
            <span className="font-typewriter text-[9px] text-white/80 bg-black/60 px-1.5 py-0.5">
              {project.duration}
            </span>

            <span className="font-typewriter text-[9px] text-white/60 bg-black/60 px-1 py-0.5">
              SP
            </span>
          </div>
        </div>
      </Window>

      <p className="font-typewriter text-[10px] text-white/40 mt-2 text-center">
        Открыть проект →
      </p>
    </div>
  );
}

function ExeIcon() {
  return (
    <svg viewBox="0 0 16 16" className="w-4 h-4" aria-hidden="true">
      <rect
        x="1"
        y="1"
        width="14"
        height="14"
        fill="#c0c0c0"
        stroke="#000"
        strokeWidth="0.5"
      />
      <rect x="3" y="3" width="10" height="8" fill="#008080" />
    </svg>
  );
}