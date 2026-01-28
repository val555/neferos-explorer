/**
 * 📴 NEFEROS RESPONSIVE SYSTEM
 * Breakpoints 2026-standard
 * Mobile-first approach
 */

// ============================================
// BREAKPOINTS (Mobile-first)
// ============================================
export const breakpoints = {
  // Mobile
  xs: '320px',    // Tiny phones
  sm: '640px',    // Phones (6", 7")
  
  // Tablet
  md: '768px',    // iPad mini, tablets
  lg: '1024px',   // iPad Pro, large tablets
  
  // Desktop
  xl: '1280px',   // Desktop standard
  '2xl': '1536px', // Large desktop
  
  // Ultra
  '3xl': '1920px', // 4K monitors
  '4xl': '2560px', // Ultra-wide
};

// ============================================
// MEDIA QUERIES (Prêts à l'emploi)
// ============================================
export const media = {
  // Mobile only
  mobile: `(max-width: ${breakpoints.sm})`,
  
  // Tablet and up
  tablet: `(min-width: ${breakpoints.md})`,
  tabletOnly: `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
  
  // Desktop and up
  desktop: `(min-width: ${breakpoints.lg})`,
  desktopOnly: `(min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl})`,
  
  // Large desktop
  largeDesktop: `(min-width: ${breakpoints['2xl']})`,
  
  // Ultra-wide
  ultraWide: `(min-width: ${breakpoints['3xl']})`,
  
  // Touch devices
  touch: '(hover: none) and (pointer: coarse)',
  hoverDevice: '(hover: hover) and (pointer: fine)',
  
  // Device orientation
  portrait: '(orientation: portrait)',
  landscape: '(orientation: landscape)',
  
  // High DPI (Retina displays)
  retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  
  // Reduced motion (accessibility)
  motionSafe: '(prefers-reduced-motion: no-preference)',
  motionReduced: '(prefers-reduced-motion: reduce)',
  
  // Dark mode
  darkMode: '(prefers-color-scheme: dark)',
  lightMode: '(prefers-color-scheme: light)',
};

// ============================================
// RESPONSIVE UTILITIES
// ============================================
export const responsive = {
  // Visibility helpers
  display: {
    // Visible only on mobile
    mobileOnly: {
      display: 'block',
      '@media (min-width: 768px)': {
        display: 'none',
      },
    },
    
    // Visible only on tablet
    tabletOnly: {
      display: 'none',
      '@media (min-width: 768px)': {
        display: 'block',
      },
      '@media (min-width: 1024px)': {
        display: 'none',
      },
    },
    
    // Visible only on desktop
    desktopOnly: {
      display: 'none',
      '@media (min-width: 1024px)': {
        display: 'block',
      },
    },
  },

  // Common responsive patterns
  container: {
    // Full-width avec padding adaptatif
    fluid: {
      width: '100%',
      paddingX: '16px', // sm
      '@media (min-width: 768px)': {
        paddingX: '24px', // md
      },
      '@media (min-width: 1024px)': {
        paddingX: '32px', // lg
      },
    },
    
    // Max-width container center
    constrained: {
      width: '100%',
      maxWidth: '1024px',
      marginX: 'auto',
    },
  },

  // Grid patterns
  grid: {
    // Responsive grid (1 col mobile, 2 col tablet, 3+ col desktop)
    autoFit: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '16px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '32px',
      },
    },
  },
};

// ============================================
// DEVICE DETECTION HELPERS
// ============================================
export const deviceSize = {
  xs: { min: 0, max: 319 },
  sm: { min: 320, max: 639 },
  md: { min: 640, max: 767 },
  lg: { min: 768, max: 1023 },
  xl: { min: 1024, max: 1279 },
  '2xl': { min: 1280, max: 1535 },
  '3xl': { min: 1536, max: 1919 },
  '4xl': { min: 1920, max: Infinity },
};

// ============================================
// TAILWIND INTEGRATION
// ============================================
// A utiliser dans tailwind.config.js:
// screens: {
//   'xs': '320px',
//   'sm': '640px',
//   'md': '768px',
//   'lg': '1024px',
//   'xl': '1280px',
//   '2xl': '1536px',
//   '3xl': '1920px',
//   '4xl': '2560px',
// }

export default {
  breakpoints,
  media,
  responsive,
  deviceSize,
};
