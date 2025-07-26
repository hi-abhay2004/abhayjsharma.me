"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AboutPage() {
  const globeRef = useRef(null);

  useEffect(() => {
    let rotation = 0;
    const animate = () => {
      if (globeRef.current) {
        rotation += 0.2;
        globeRef.current.style.transform = `rotate(${rotation}deg)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <main className="px-6 mt-16 md:px-20 md:mt-28  py-20 text-black font-sans ">
      {/* Hero Section */}
      <section className="md:w-5/6 flex flex-col items-start md:items-center md:flex-col gap-8">
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl ">
            Helping brands thrive <br /> in the digital world
          </h1>
        </div>
          <div className="md:w-3/4 border-b-2 border-black md:mt-11"/>
        <div className="flex justify-center items-center">
          <div
            ref={globeRef}
            className="relative w-32 h-32 rounded-full bg-[#4F5DFF] left-36 md:absolute md:bottom-28 md:left-2/3 flex justify-center items-center"
          >
            <Image src="/globe1.png" alt="Globe" className="w-14 h-14" width={40} height={40} />
          </div>
        </div>
      </section>

      {/* Introduction Paragraph */}
      <section className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-10">
        <span className="text-2xl">→</span>
        <div className="text-lg max-w-xl">
          <p>
            I help companies from all over the world with tailor-made solutions.
            With each project, I push my work to new horizons, always putting quality first.
          </p>
          <p className="mt-2 text-gray-500 italic">Always exploring…</p>
        </div>
        <Image
          src="/about.JPG" // Change to your image
          alt="Profile"
          width={550}
          height={700}
          className="rounded-xl object-cover"
        />
      </section>

      {/* Services Section */}
      <section className="mt-28 bg-gray-100 p-10 rounded-xl">
        <h2 className="text-4xl font-bold mb-12">I can help you with<span className="text-[#4F5DFF]">.</span></h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              num: "01",
              title: "Frontend Development",
              desc:
                "Crafting intuitive and responsive UIs with clean code and performance in mind. I focus on animations, accessibility, and mobile-first design for a seamless UX.",
              tags: "React • Next.js • Tailwind • Firebase",
            },
            {
              num: "02",
              title: "Backend & APIs",
              desc:
                "Robust backend and scalable APIs using Node.js, Express, Firebase. I handle DB design to deployment, ensuring speed and reliability.",
              tags: "Node.js • MongoDB • Express",
            },
            {
              num: "03",
              title: "The Full Stack Package",
              desc:
                "From wireframes to deploy-ready apps. I love building complete systems integrating frontend, backend, and cloud for polished experiences.",
              tags: "Vercel • REST API • Git",
            },
          ].map(({ num, title, desc, tags }) => (
            <div key={num}>
              <p className="text-sm text-gray-400 mb-1">{num}</p>
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-700 mb-2">{desc}</p>
              <p className="text-sm text-gray-600">{tags}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hackathon Achievement Section */}
        <h1 className="p-10 mt-28 text-2xl md:text-4xl font-bold text-left">Achievements</h1>
      <section className=" flex flex-col md:flex-row gap-10 items-center">
        <Image
          src="/projects/ai-support.jpeg" // Replace with actual team/cert image
          alt="Hackathon"
          width={500}
          height={400}
          className="rounded-xl object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            🏆 72-Hour Hackathon Winner – Flipr Innovation Challenge
          </h2>
          <p className="mb-4">
            Built an AI-based Customer Support SaaS platform in just 72 hours. I led the full-stack development of a powerful dashboard with:
          </p>
          <ul className="list-disc ml-5 text-gray-700 mb-4">
            <li>🔍 Real-time chat with AI assistant</li>
            <li>📊 Dynamic agent performance metrics</li>
            <li>⚙️ Firebase Auth multi-step registration</li>
            <li>🎨 Frontend with Next.js, Tailwind, Framer Motion</li>
          </ul>
          <blockquote className="italic text-gray-500 border-l-4 border-blue-500 pl-4">
            Recognized by Flipr for design, functionality, and scalability.
          </blockquote>
          <p className="mt-4 text-sm text-gray-600">
            Next.js • Firebase • Framer Motion • Node.js • AI Integration • 72-hour Sprint
          </p>
        </div>
      </section>
    </main>
  );
}
