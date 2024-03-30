import { useState, useEffect, useRef } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const scrollUP = useRef(null);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < lastScroll) {
        scrollUP.current = true;
      } else {
        scrollUP.current = false;
      }
      lastScroll = currentScroll <= 0 ? 0 : currentScroll;
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return {
    scrollY,
    scrollUP: scrollUP.current,
  };
}

export { useScroll };
