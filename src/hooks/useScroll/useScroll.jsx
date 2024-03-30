import { useState, useEffect, useRef } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState(0);
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
      setScroll(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return {
    scroll,
    scrollUP: scrollUP.current,
  };
}

export { useScroll };
