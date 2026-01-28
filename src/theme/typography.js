/**
 * 📋 NEFEROS TYPOGRAPHY SYSTEM
 * Deux fonts: Tektur (titres) + Space Grotesk (corps)
 * Structure complète pour hiérarchie texte
 */

export const fonts = {
  heading: '"Tektur", sans-serif',      // Titres, labels importants
  body: '"Space Grotesk", sans-serif',  // Corps, descriptions, UI
  mono: '"Space Mono", monospace',      // Code, données techniques
};

// ============================================
// HEADING STYLES (Titres - Tektur)
// ============================================
export const headings = {
  // Mega titles (page hero, section majeure)
  h1: {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    fontWeight: 800,
    fontFamily: fonts.heading,
  },

  // Large section titles
  h2: {
    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
    lineHeight: '1.2',
    letterSpacing: '-0.01em',
    fontWeight: 800,
    fontFamily: fonts.heading,
  },

  // Subsection titles
  h3: {
    fontSize: 'clamp(1.5rem, 4vw, 1.875rem)',
    lineHeight: '1.3',
    letterSpacing: '-0.005em',
    fontWeight: 600,
    fontFamily: fonts.heading,
  },

  // Card/block titles
  h4: {
    fontSize: '1.25rem',
    lineHeight: '1.4',
    letterSpacing: '0em',
    fontWeight: 600,
    fontFamily: fonts.heading,
  },

  // Small titles, labels
  h5: {
    fontSize: '1rem',
    lineHeight: '1.5',
    letterSpacing: '0.02em',
    fontWeight: 600,
    fontFamily: fonts.heading,
  },

  // Tiny labels
  h6: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    letterSpacing: '0.03em',
    fontWeight: 600,
    fontFamily: fonts.heading,
    textTransform: 'uppercase',
  },
};

// ============================================
// BODY TEXT (Corps - Space Grotesk)
// ============================================
export const body = {
  // Large body (introductions, featured paragraphs)
  lg: {
    fontSize: '1.125rem',
    lineHeight: '1.7',
    letterSpacing: '-0.005em',
    fontWeight: 400,
    fontFamily: fonts.body,
  },

  // Normal body (défaut)
  base: {
    fontSize: '1rem',
    lineHeight: '1.6',
    letterSpacing: '0em',
    fontWeight: 400,
    fontFamily: fonts.body,
  },

  // Small text (secondary info, captions)
  sm: {
    fontSize: '0.875rem',
    lineHeight: '1.5',
    letterSpacing: '0.005em',
    fontWeight: 400,
    fontFamily: fonts.body,
  },

  // Extra small (hints, metadata)
  xs: {
    fontSize: '0.75rem',
    lineHeight: '1.4',
    letterSpacing: '0.01em',
    fontWeight: 400,
    fontFamily: fonts.body,
  },
};

// ============================================
// SEMANTIC STYLES (Utilisés dans composants)
// ============================================
export const semantic = {
  // Page hero title
  pageTitle: {
    ...headings.h1,
    fontFamily: fonts.heading,
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '-0.02em',
  },

  // Section hero
  sectionTitle: {
    ...headings.h2,
    fontFamily: fonts.heading,
    fontWeight: 700,
    letterSpacing: '-0.01em',
  },

  // Subsection
  subsectionTitle: {
    ...headings.h3,
    fontFamily: fonts.heading,
    fontWeight: 600,
  },

  // Card title
  cardTitle: {
    ...headings.h4,
    fontFamily: fonts.heading,
    fontWeight: 600,
  },

  // Label/badge text
  label: {
    ...headings.h6,
    fontFamily: fonts.heading,
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },

  // Button text
  button: {
    fontFamily: fonts.body,
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
  },

  // Main body copy
  bodyRegular: {
    ...body.base,
    fontFamily: fonts.body,
    fontWeight: 400,
  },

  // Emphasis/highlight
  bodyEmphasis: {
    ...body.base,
    fontFamily: fonts.body,
    fontWeight: 500,
  },

  // Secondary/muted text
  bodySecondary: {
    ...body.sm,
    fontFamily: fonts.body,
    fontWeight: 400,
    opacity: 0.8,
  },

  // Code/monospace
  code: {
    fontFamily: fonts.mono,
    fontSize: '0.875rem',
    lineHeight: '1.5',
    letterSpacing: '0em',
    fontWeight: 400,
  },

  // Tech labels (runes, codes)
  techLabel: {
    fontFamily: fonts.heading,
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  },
};

// ============================================
// UTILITIES (Helpers pour CSS/Tailwind)
// ============================================
export const utils = {
  // Truncate single line
  truncate: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  // Clamp 2 lines
  truncateLines2: {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },

  // Clamp 3 lines
  truncateLines3: {
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
};

export default {
  fonts,
  headings,
  body,
  semantic,
  utils,
};
