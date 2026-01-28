export const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const mediaQueries = {
  isMobile: `(max-width: ${breakpoints.md})`,
  isTablet: `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  isDesktop: `(min-width: ${breakpoints.lg})`,
  prefersReducedMotion: "(prefers-reduced-motion: reduce)",
};
