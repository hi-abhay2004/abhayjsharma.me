"use client";
export const dynamic = "force-dynamic";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const DotBackground = ({
  className,
  children,
  dotSize = 1,
  dotColor = "#000",
  darkDotColor = "#fff",
  spacing = 20,
  showFade = true,
  fadeIntensity = 20,
  ...props
}) => {
  const [currentDotColor, setCurrentDotColor] = useState(dotColor);

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkModeActive =
      document.documentElement.classList.contains("dark") || prefersDarkMode;

    setCurrentDotColor(isDarkModeActive ? darkDotColor : dotColor);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const updatedIsDarkModeActive =
            document.documentElement.classList.contains("dark");
          setCurrentDotColor(updatedIsDarkModeActive ? darkDotColor : dotColor);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, [dotColor, darkDotColor]);

  return (
    <div
      className={cn(
        "relative flex w-10/12 m-auto items-center justify-center bg-white dark:bg-black",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: `${spacing}px ${spacing}px`,
          backgroundImage: `radial-gradient(${currentDotColor} ${dotSize}px, transparent ${dotSize}px)`,
        }}
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          }}
        />
      )}

      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default function DotBgPage() {
  return null; // or valid JSX
}