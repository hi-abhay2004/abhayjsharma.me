"use client";
import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavBar = () => {
const [isTopSectionVisible, setIsTopSectionVisible] = useState(true);
const whiteBgPaths = ["/pages/work", "/pages/contact","/pages/about"];
const [open, setOpen] = useState(false);
const buttonRef = useRef(null);
const iconRef = useRef(null);
const pathname = usePathname();
const hasWhiteBgInitially = whiteBgPaths.includes(pathname);

  const buttonTop = "50px";
  const buttonLeft = "50px";
  const animationDuration = 1.2;

  // Track if user is in top 70% of the page
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      setIsTopSectionVisible(scrollY < viewportHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

const isBgWhite = hasWhiteBgInitially || !isTopSectionVisible;


  // Magnetic hover animation
  useEffect(() => {
    const btn = buttonRef.current;
    const icon = iconRef.current;

    if (!btn || !icon) return;

    const handleMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      icon.style.transform = `translate(${x * 2.0}px, ${y * 2.0}px)`;
    };

    const reset = () => {
      icon.style.transform = `translate(0, 0)`;
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", reset);

    return () => {
      btn.removeEventListener("mousemove", handleMouseMove);
      btn.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full p-5 text-xl flex justify-between items-center z-[1000] ${
        isBgWhite ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="flex w-full items-center justify-between">
        {/* Mobile Menu Button */}
        <div className={`${isTopSectionVisible ? "sm:hidden block" : "block"}`}>
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen(!open)}
            className="focus:outline-none group overflow-hidden rounded-full w-12 h-12 flex items-center justify-center bg-black z-[1001] fixed left-4 top-4"
          >
            <span className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            <Bars3Icon
              ref={iconRef}
              className="h-6 w-6 text-white relative z-10 transition-transform duration-300"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Name */}
        <div className="block sm:hidden ml-auto">
          <h1>© code by Abhay</h1>
        </div>

        {/* Desktop Nav & Name (Only in top 70%) */}
        <>
          <Link href="/" className={`hidden sm:block ${isTopSectionVisible ? "block" : "hidden"}`}>© code by Abhay</Link>
          {isTopSectionVisible && (
            <nav className="space-x-6 hidden sm:block">
              <Link href="/pages/about" className="hover:underline">About</Link>
              <Link href="/pages/work" className="hover:underline">Work</Link>
              <Link href="/pages/contact" className="hover:underline">Contact</Link>
            </nav>
          )}
        </>
      </div>

      {/* Animated Overlay Navigation */}
      <style>{`
        .circle-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: #000;
          clip-path: circle(0px at ${buttonLeft} ${buttonTop});
          transition: clip-path ${animationDuration}s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          flex-direction: column;
        }
        .circle-overlay.open {
          clip-path: circle(150% at ${buttonLeft} ${buttonTop});
        }
      `}</style>

      <div className={`circle-overlay ${open ? "open" : ""}`}>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>

        <nav className="flex flex-col items-center justify-center space-y-6">
          {["Home", "About", "Work", "Contact"].map((label, index) => (
            <a
              key={label}
              href={
                label === "Home"
                  ? "/"
                  : label === "About"
                  ? "/pages/about"
                  : label === "Work"
                  ? "/pages/work"
                  : "/pages/contact"
              }
              onClick={() => setOpen(false)}
              className={`block relative font-bold text-white 
                text-5xl md:text-7xl tracking-wide 
                transition-transform duration-700 ease-out`}
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-200px)",
                transitionDelay: `${open ? index * 0.1 : 0}s`,
              }}
            >
              <span className="relative group">
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
