/**
 * Smoothly scrolls to the page section with the given id.
 * Sections set `scroll-margin-top` so they stay clear of the fixed navigation bar.
 * Does nothing if no element has that id.
 */
export const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
