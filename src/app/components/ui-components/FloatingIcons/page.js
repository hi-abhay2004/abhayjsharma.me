"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

const icons = [
  { src: "GITHUB.png", title: "GitHub" },
  { src: "JAVASCRIPT.png", title: "JavaScript" },
  { src: "REACT.png", title: "React" },
  { src: "PYTHON.png", title: "Python" },
  { src: "NODE JS.png", title: "Node.js" },
  { src: "HTML5.png", title: "HTML5" },
  { src: "TAILWIND.png", title: "Tailwind CSS" },
  { src: "BOOTSTRAP.png", title: "Bootstrap" },
  { src: "FIREBASE.png", title: "Firebase" },
  { src: "MONGODB.png", title: "MongoDB" },
  { src: "GIT.png", title: "Git" },
];

const defaultPositions = [
  { top: "5%", left: "15%" },
  { top: "30%", left: "60%" },
  { top: "60%", left: "25%" },
  { top: "15%", left: "75%" },
  { top: "55%", left: "8%" },
  { top: "75%", left: "45%" },
  { top: "20%", left: "55%" },
  { top: "48%", left: "35%" },
  { top: "10%", left: "50%" },
  { top: "62%", left: "68%" },
  { top: "38%", left: "12%" },
];

const smallScreenPositions = [
  { top: "10%", left: "10%" },
  { top: "25%", left: "20%" },
  { top: "40%", left: "30%" },
  { top: "55%", left: "20%" },
  { top: "70%", left: "10%" },
  { top: "15%", left: "60%" },
  { top: "30%", left: "70%" },
  { top: "45%", left: "65%" },
  { top: "60%", left: "70%" },
  { top: "75%", left: "60%" },
  { top: "85%", left: "45%" },
];

const anims = [
  { y: [0, -20, 0], x: [0, 20, 0], duration: 4 },
  { y: [0, 30, 0], x: [0, -20, 0], duration: 6 },
  { y: [0, -25, 0], x: [0, 15, 0], duration: 5 },
  { y: [0, 15, 0], x: [0, -25, 0], duration: 7 },
  { y: [0, -30, 0], x: [0, 10, 0], duration: 4.5 },
  { y: [0, 20, 0], x: [0, -15, 0], duration: 6.5 },
  { y: [0, -18, 0], x: [0, 22, 0], duration: 5.5 },
  { y: [0, 28, 0], x: [0, -18, 0], duration: 6.2 },
  { y: [0, -22, 0], x: [0, 18, 0], duration: 4.8 },
  { y: [0, 12, 0], x: [0, -22, 0], duration: 5.7 },
  { y: [0, -16, 0], x: [0, 16, 0], duration: 6.1 },
];

export default function FloatingIcons() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [positions, setPositions] = useState(defaultPositions);
  const containerRef = useRef(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setPositions(smallScreenPositions);
    }
  }, []);

  const springConfig = { stiffness: 100, damping: 5 };
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
     className="absolute inset-0 z-30 "

      ref={containerRef}
    >
      {icons.map((icon, i) => (
        <motion.div
          key={icon.src}
          className="absolute"
          style={{
            ...positions[i],
            width: "80px",
            maxWidth: "80px",
          }}
          animate={{
            y: anims[i].y,
            x: anims[i].x,
          }}
          transition={{
            duration: anims[i].duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="relative"
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.img
              src={`/techIcons/${icon.src}`}
              alt={icon.title}
              className="w-full h-auto cursor-pointer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              drag
              dragConstraints={containerRef}
              dragElastic={0.2}
              onMouseMove={handleMouseMove}
            />

            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.div
                  key="tooltip"
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-10 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs text-white shadow-xl pointer-events-none"
                >
                  <div className="relative z-30 text-base font-bold">
                    {icon.title}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
