"use client";
import React, { useState } from "react";
import { LayoutGrid, Menu } from "lucide-react";

const filters = [{ label: "Development" }];

const projects = [
  {
    id: "ai-support",
    title: "AI Customer Support",
    type: "image",
    image: "/projects/ai-support.jpeg",
    liveUrl: "https://ai-customer-support-d8o2-4nc2zdli2-hi-abhay2004s-projects.vercel.app/",
    githubUrl: "https://github.com/hi-abhay2004/Ai-customer-support",
  },
  {
    id: "lootlet",
    title: "Lootlet — Shopping Platform",
    type: "image",
    image: "/projects/lootlet.png",
    liveUrl: "https://lootlet.netilfy.app",
    githubUrl: "https://github.com/hi-abhay2004/lootlet",
  },
  {
    id: "dsu-branding",
    title: "Dsu Branding Website (to be hosted)",
    type: "video",
    image: "/projects/branding.mp4",
    liveUrl:
      "https://www.figma.com/proto/uHMjI3QuUcZWAVIlmZEdLC/mini-project-3?page-id=0%3A1&node-id=519-1470&viewport=-12522%2C754%2C0.14&t=znl7Ye1TBZSV9AtL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=107%3A7",
    githubUrl: "https://github.com/hi-abhay2004/",
  },
  {
    id: "dsu-sa",
    title: "Dsu Student Affairs Website (to be hosted)",
    type: "video",
    image: "/projects/sa.mp4",
    liveUrl:
      "https://www.figma.com/proto/EcD6eGTE6Wmi5x28vIASiB/student-affairs-page?node-id=353-877&t=yodMhaCrw9vLqoPI-1&scaling=min-zoom&content-scaling=fixed&page-id=59%3A3396&starting-point-node-id=59%3A4257&show-proto-sidebar=1",
    githubUrl: "https://github.com/hi-abhay2004/",
  },
];

const WorkPage = () => {
  const [activeFilter, setActiveFilter] = useState("Development");
  const [view, setView] = useState("grid");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return true; // currently, everything falls under "Development"
  });

  return (
    <main className="min-h-screen px-6 py-32 md:p-32   font-sans">
      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-semibold leading-tight mb-16 max-w-4xl">
        Creating next level digital products
      </h1>

      {/* Filters and View Toggle */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-10">
        <div className="flex gap-4">
          {filters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setActiveFilter(filter.label)}
              className={`px-6 py-3 text-sm rounded-full border transition-all ${
                activeFilter === filter.label
                  ? "bg-black text-white"
                  : "bg-white text-black border"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setView("list")}
            className={`w-12 h-12 rounded-full flex items-center justify-center border ${
              view === "list" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <Menu className="w-5 h-5" />
          </button>
          <button
            onClick={() => setView("grid")}
            className={`w-12 h-12 rounded-full flex items-center justify-center border ${
              view === "grid" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Project Grid */}
      <div
        className={`grid gap-8 ${
          view === "grid" ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group block overflow-hidden rounded-xl border shadow-lg transition-transform hover:scale-[1.015] bg-white"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {project.type === "image" ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <video
                  src={project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              )}
              <div className="p-5">
                <h2 className="text-lg font-semibold mb-1">{project.title}</h2>
                <p className="text-sm text-gray-600">
                  <span className="underline">Live</span>
                </p>
              </div>
            </a>
            <div className="p-5 pt-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default WorkPage;
