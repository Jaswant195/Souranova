import { useEffect } from 'react';
import { scrollToSection } from '../utils/scrollToSection';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      // closest() so clicks on icons or text inside a link are handled too
      const link = target?.closest?.('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute('href')?.slice(1);
      // A bare "#" is a placeholder link, not a section
      if (!id) {
        e.preventDefault();
        return;
      }

      if (document.getElementById(id)) {
        e.preventDefault();
        scrollToSection(id);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};
