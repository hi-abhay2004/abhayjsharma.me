"use client"
import { useEffect, useState } from 'react';

export default function useScrollDirection() {
  const [direction, setDirection] = useState('down');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateDirection = () => {
      const scrollY = window.pageYOffset;
      if (scrollY > lastScrollY) {
        setDirection('down');
      } else if (scrollY < lastScrollY) {
        setDirection('up');
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateDirection);
    return () => window.removeEventListener('scroll', updateDirection);
  }, []);

  return direction;
}
