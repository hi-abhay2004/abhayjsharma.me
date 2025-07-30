'use client';
import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 'ai-support',
    title: 'AI Customer Support',
    type: 'image',
    image: '/projects/ai-support.jpeg',
    liveUrl: 'https://ai-customer-support-d8o2-4nc2zdli2-hi-abhay2004s-projects.vercel.app/',
    githubUrl: 'https://github.com/hi-abhay2004/Ai-customer-support',
  },
  {
    id: 'lootlet',
    title: 'Lootlet — Shopping Platform',
    type: 'image',
    image: '/projects/lootlet.png',
    liveUrl: 'https://lootlet.netilfy.app',
    githubUrl: 'https://github.com/hi-abhay2004/lootlet',
  },
  {
    id: 'dsu-branding',
    title: 'Dsu Branding Website (to be hosted)',
    type: 'video',
    image: '/projects/branding.mov',
    liveUrl: 'https://www.figma.com/proto/uHMjI3QuUcZWAVIlmZEdLC/mini-project-3?page-id=0%3A1&node-id=519-1470&viewport=-12522%2C754%2C0.14&t=znl7Ye1TBZSV9AtL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=107%3A7',
    githubUrl: 'https://github.com/hi-abhay2004/',
  },
  {
    id: 'dsu-sa',
    title: 'Dsu Student Affairs Website (to be hosted)',
    type: 'video',
    image: '/projects/sa.mov', // video file
    liveUrl: 'https://www.figma.com/proto/EcD6eGTE6Wmi5x28vIASiB/student-affairs-page?node-id=353-877&t=yodMhaCrw9vLqoPI-1&scaling=min-zoom&content-scaling=fixed&page-id=59%3A3396&starting-point-node-id=59%3A4257&show-proto-sidebar=1',
    githubUrl: 'https://github.com/hi-abhay2004/',
  },
];

export default function ProjectsSection() {
  const [hovered, setHovered] = useState(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      className="relative w-5/6 m-auto px-6 pb-16"
      onMouseMove={handleMouseMove}
    >
      <h2 className="text-xl mb-12">Recent Works</h2>

      <div className="relative z-10 flex flex-col gap-14">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex justify-between items-center border-b border-white/20 pb-4"
            onMouseEnter={() => setHovered(project)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 className="text-2xl md:text-5xl font-semibold transition">{project.title}</h3>
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1 hover:text-teal-400"
              >
                <ExternalLink size={16} />
                Live
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1 hover:text-teal-400"
              >
                <Github size={16} />
                Code
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Media Preview */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="fixed z-40 pointer-events-none"
            style={{
              top: 0,
              left: 0,
              x: smoothX,
              y: smoothY,
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            {hovered.type === 'image' ? (
              <img
                src={hovered.image}
                alt="preview"
                className="w-[300px] md:w-[400px] h-auto rounded-lg shadow-xl border border-white/20"
              />
            ) : (
              <video
                src={hovered.image}
                autoPlay
                muted
                loop
                className="w-[300px] md:w-[400px] h-auto rounded-lg shadow-xl border border-white/20"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
