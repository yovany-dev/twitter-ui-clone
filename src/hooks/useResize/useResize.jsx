import { useState, useEffect } from "react";

const useResize = (width) => {
  const [resize, setResize] = useState(false);

  useEffect(() => {
    if (window.screen.width >= width) {
      setResize(true);
    }
    const handleResize = () => {
      if (window.screen.width >= width) {
        setResize(true);
      } else {
        setResize(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return resize;
}

export { useResize };
