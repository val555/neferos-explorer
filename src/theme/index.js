/**
 * 🎨 NEFEROS THEME - CENTRAL EXPORT
 * Importe une seule fois et utilise partout
 * 
 * Usage:
 * import { colors, spacing, typography, responsive, transitions } from '@/theme';
 * ou
 * import theme from '@/theme';
 * 
 * Puis: theme.colors.semantic.text.primary, etc.
 */

import * as colorsModule from './colors';
import * as typographyModule from './typography';
import * as spacingModule from './spacing';
import * as responsiveModule from './responsive';
import * as transitionsModule from './transitions';

// Export individual modules
export const colors = colorsModule;
export const typography = typographyModule;
export const spacing = spacingModule;
export const responsive = responsiveModule;
export const transitions = transitionsModule;

// Convenience exports (direct access to semantic tokens)
export const { primitives, semantic, alias } = colorsModule;
export const { fonts, headings, body } = typographyModule;
export const { space, component, patterns } = spacingModule;
export const { breakpoints, media } = responsiveModule;
export const { duration, easing, transition, variants, animation } = transitionsModule;

// Complete theme object
const theme = {
  // Colors
  colors: {
    primitives: colorsModule.primitives,
    semantic: colorsModule.semantic,
    alias: colorsModule.alias,
  },
  
  // Typography
  typography: {
    fonts: typographyModule.fonts,
    headings: typographyModule.headings,
    body: typographyModule.body,
    semantic: typographyModule.semantic,
  },
  
  // Spacing
  spacing: {
    space: spacingModule.space,
    semantic: spacingModule.semantic,
    component: spacingModule.component,
    patterns: spacingModule.patterns,
  },
  
  // Responsive
  responsive: {
    breakpoints: responsiveModule.breakpoints,
    media: responsiveModule.media,
    utils: responsiveModule.responsive,
  },
  
  // Transitions & Animations
  transitions: {
    duration: transitionsModule.duration,
    easing: transitionsModule.easing,
    transition: transitionsModule.transition,
    variants: transitionsModule.variants,
    animation: transitionsModule.animation,
  },
};

export default theme;
