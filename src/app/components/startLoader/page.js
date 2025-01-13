"use client";
import { useEffect, useState } from "react";

const HelloAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const helloWords = [
    
    { text: "Hola", language: "es" },
    { text: "Bonjour", language: "fr" },
    { text: "Hallo", language: "de" },
    { text: "こんにちは", language: "ja" },
    { text: "你好", language: "zh" },
    { text: "Привет", language: "ru" },
    { text: "مرحبا", language: "ar" },
    { text: "Hello", language: "en" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % helloWords.length);
    }, 150); // Change every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, [helloWords.length]);

  return (
    <div id="hello-container">
      {helloWords.map((word, index) => (
        <span
          key={index}
          className={`hello-word ${
            index === currentIndex ? "visible" : "hidden"
          }`}
          data-language={word.language}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
};

export default HelloAnimation;
