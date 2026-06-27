"use client";

import { siteContent, projects } from "@/lib/content";
import ProjectCard from "./ProjectCard";

export default function SelectedWork() {
  const { selectedWork } = siteContent;

  return (
    <section
      id="selected-work"
      className="relative py-20 lg:py-28 bg-graphite"
    >
      <div className="mx-auto max-w-content px-8 lg:px-16">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="section-label block mb-1">
              {selectedWork.sectionNumber} / {selectedWork.sectionLabel}
            </span>
            <p className="font-sans text-sm text-white/50 max-w-md">
              {selectedWork.description}
            </p>
          </div>
          <button
            type="button"
            className="font-typewriter text-xs text-white/40 hover:text-white/70 transition-colors hidden md:block"
          >
            + {selectedWork.allProjects}
          </button>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* More projects folder */}
        <div className="flex justify-end mt-8">
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 transition-transform group-hover:-translate-y-1">
              <svg viewBox="0 0 64 64" className="w-full h-full" aria-hidden="true">
                <path
                  d="M4 16 L4 52 L60 52 L60 24 L32 24 L24 16 Z"
                  fill="#ffcc00"
                  stroke="#cc9900"
                  strokeWidth="1.5"
                />
                <path
                  d="M4 16 L24 16 L32 24 L60 24"
                  fill="#ffdd44"
                  stroke="#cc9900"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <span className="font-typewriter text-[10px] text-white/50 mt-1 group-hover:text-white/70">
              БОЛЬШЕ ПРОЕКТОВ →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
