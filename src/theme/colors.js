/**
 * 🎨 NEFEROS COLOR SYSTEM
 * Palettes primaires, sémantiques et état
 * Utilisé partout dans l'app pour cohérence
 */

// ============================================
// PRIMITIVES (Teintes brutes)
// ============================================
export const primitives = {
  // Violet/Magenta (Couleur principale Neferos)
  purple: {
    900: '#0d0408',
    800: '#1a0811',
    700: '#27001a',
    600: '#361133',  // Dark
    500: '#4a1554',
    400: '#612970',  // Mid
    300: '#7d3d8a',
    200: '#a400c0',  // Primary accent ← STAR
    100: '#d470e3',  // Light
    50: '#e8b3f0',   // Very light
  },

  // Rose/Pink (Accent secondaire)
  pink: {
    600: '#a80e55',
    500: '#d20a6b',
    400: '#e36bed',  // Light pink
    300: '#f08fd9',
    200: '#f5b5e8',
    100: '#fad9f0',
  },

  // Nuances neutres
  neutral: {
    950: '#0a0a0a',  // Almost black
    900: '#1c1425',  // bg-dark (fond principal)
    850: '#2a2333',  // Slightly lighter
    800: '#2f1c42',  // bg-surface (cartes, panels)
    700: '#3d2f4d',
    600: '#4a3f56',
    500: '#645a72',
    400: '#7f7a92',
    300: '#9b96ac',
    200: '#c7bdd5',  // text-secondary
    150: '#d4ccdd',
    100: '#e5dfe8',
    50: '#f2eff6',
    0: '#ffffff',    // Pure white
  },

  // Status colors
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },

  // Glows & effects
  glow: {
    purple: '#a400c0',
    pink: '#e36bed',
    blue: '#00d9ff',
  },
};

// ============================================
// SÉMANTIQUES (Contexte d'utilisation)
// ============================================
export const semantic = {
  // Background layers
  background: {
    primary: primitives.neutral[900],     // #1c1425 - Fond principal
    secondary: primitives.neutral[800],   // #2f1c42 - Cartes, surfaces
    tertiary: primitives.neutral[700],    // #3d2f4d - Hover, sections
    overlay: 'rgba(28, 20, 37, 0.85)',    // Semi-transparent
    glass: 'rgba(47, 28, 66, 0.5)',       // Glassmorphism
  },

  // Text hierarchy
  text: {
    primary: primitives.neutral[0],       // #ffffff - Corps, labels
    secondary: primitives.neutral[200],   // #c7bdd5 - Sous-titres, subtle
    tertiary: primitives.neutral[400],    // #7f7a92 - Très subtle, placeholders
    accent: primitives.pink[400],         // #e36bed - Links, emphasis
    heading: primitives.neutral[0],       // #ffffff - Titres
  },

  // Borders & dividers
  border: {
    light: 'rgba(255, 255, 255, 0.08)',   // Très subtle
    medium: 'rgba(255, 255, 255, 0.12)',  // Défaut
    strong: 'rgba(255, 255, 255, 0.20)',  // Prominent
    accent: primitives.purple[200],       // #a400c0 - Interactive
  },

  // Interactive states
  interactive: {
    primary: primitives.purple[200],      // #a400c0
    primaryHover: primitives.purple[100], // #d470e3
    primaryActive: primitives.purple[300],// #7d3d8a
    secondary: primitives.pink[400],      // #e36bed
    secondaryHover: primitives.pink[300], // #f08fd9
  },

  // Status states
  status: {
    success: primitives.status.success,   // #10b981
    warning: primitives.status.warning,   // #f59e0b
    error: primitives.status.error,       // #ef4444
    info: primitives.status.info,         // #3b82f6
  },

  // Effects
  effect: {
    glow: {
      purple: `drop-shadow(0 0 20px ${primitives.glow.purple})`,
      pink: `drop-shadow(0 0 15px ${primitives.glow.pink})`,
      blue: `drop-shadow(0 0 10px ${primitives.glow.blue})`,
    },
    shadow: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
      md: '0 4px 6px rgba(0, 0, 0, 0.3)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.4)',
      xl: '0 20px 25px rgba(0, 0, 0, 0.5)',
    },
    border: {
      thin: '1px solid rgba(164, 0, 192, 0.3)',
      medium: '2px solid rgba(164, 0, 192, 0.5)',
      accent: '2px solid #a400c0',
    },
  },
};

// ============================================
// ALIASES (Raccourcis pour utilisation courante)
// ============================================
export const alias = {
  accentPrimary: primitives.purple[200],      // #a400c0
  accentLight: primitives.pink[400],          // #e36bed
  accentDark: primitives.purple[600],         // #361133
  bgDark: primitives.neutral[900],            // #1c1425
  bgSurface: primitives.neutral[800],         // #2f1c42
  textMain: primitives.neutral[0],            // #ffffff
  textSub: primitives.neutral[200],           // #c7bdd5
};

export default {
  primitives,
  semantic,
  alias,
};
