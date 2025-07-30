'use client';

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavBar from "../components/navBar/page";
import Footer from "../components/Footer/page";
import SplashCursor from "../components/ui-components/splashCursor/page";
import HelloLoader from "../components/startLoader/page";
import { usePathname } from "next/navigation";

export default function ClientRoot({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const hideFooter = pathname === "/pages/contact";
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <HelloLoader key={pathname} />
      ) : (
        <>
          <NavBar />
          {children}
         {!hideFooter && <Footer />}
        </>
      )}
    </AnimatePresence>
  );
}
