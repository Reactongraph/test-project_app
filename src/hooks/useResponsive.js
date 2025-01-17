import { useEffect, useState } from 'react';

/**
 * Custom hook for handling responsive design
 * @param {number} breakpoint - The breakpoint width in pixels
 * @returns {boolean} Whether the current viewport is mobile
 */
export const useResponsive = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [breakpoint]);

  return isMobile;
};
