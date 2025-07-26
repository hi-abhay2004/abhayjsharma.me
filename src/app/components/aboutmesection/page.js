"use client";

import React, { useRef, useEffect } from "react";
import { ScrollReveal } from "../ui-components/ScrollReveal/ScrollReveal";



const AboutMeSection = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;

    if (!btn) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      btn.style.transform = `translate(${x * 2.0}px, ${y * 2.0}px)`;
    };

    const reset = () => {
      btn.style.transform = `translate(0, 0)`;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", reset);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section className="w-full px-6 py-20 md:px-20 flex flex-col md:flex-row md:justify-between md:items-start gap-10">
      {/* Left text */}
      <div className="flex-1 text-2xl md:text-5xl font-light text-black">
        <ScrollReveal size="lg" align="left">
          I help brands stand out with unique design & code.
          Together, we’ll break the old rules and create new ones — no clutter,
          always sharp and forward-thinking.
        </ScrollReveal>
      </div>

      {/* Right text + button */}
      <div className="flex text-2xl  flex-col items-center md:items-end gap-6">
        <ScrollReveal size="md" align="right" variant="muted">
          My passion for creative problem-solving <br/> and modern tech
          gives me an edge to build <br/> digital experiences that feel unique and alive.
        </ScrollReveal>

        {/* Magnetic circle button */}
        <button
          ref={buttonRef}
          className="relative top-14 right-10 group overflow-hidden rounded-full w-40 h-40 bg-black flex items-center justify-center transition-transform duration-300"
        >
          <span className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
          <span className="relative z-10 text-white text-lg">About me</span>
        </button>
      </div>
    </section>
  );
};

export default AboutMeSection;
