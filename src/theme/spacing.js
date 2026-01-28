/**
 * 📃 NEFEROS SPACING SYSTEM
 * Base unit: 8px
 * Inspiré par Three.js Journey (harmonieux, généreux)
 * Responsive: utilise des multiples de 8px
 */

// ============================================
// SPACING SCALE (8px base)
// ============================================
export const space = {
  // Micro (pour détails)
  0: '0',
  px: '1px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',    // ← Small padding/margin
  5: '20px',
  6: '24px',    // ← Default padding
  7: '28px',
  8: '32px',    // ← Large padding
  9: '36px',
  10: '40px',
  12: '48px',   // ← XL padding
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  80: '320px',
  96: '384px',
};

// ============================================
// SEMANTIC SPACING (Contexte d'utilisation)
// ============================================
export const semantic = {
  // Padding (conteneurs, cartes, sections)
  padding: {
    xs: space[2],      // 8px - Très compact
    sm: space[3],      // 12px
    md: space[4],      // 16px - Défaut
    lg: space[6],      // 24px - Généreux
    xl: space[8],      // 32px - XL
    '2xl': space[12],  // 48px - Huge
  },

  // Margins (espacement entre éléments)
  margin: {
    xs: space[2],      // 8px
    sm: space[3],      // 12px
    md: space[4],      // 16px
    lg: space[6],      // 24px
    xl: space[8],      // 32px
    '2xl': space[12],  // 48px
  },

  // Gap (flexbox/grid spacing)
  gap: {
    xs: space[2],      // 8px
    sm: space[3],      // 12px
    md: space[4],      // 16px
    lg: space[6],      // 24px
    xl: space[8],      // 32px
    '2xl': space[12],  // 48px
  },

  // Radius (border-radius)
  radius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '20px',
    '3xl': '24px',
    full: '9999px',
  },
};

// ============================================
// COMPONENT SPACING (Pré-confi
 // Pré-configurations pour composants spécifiques
// ============================================
export const component = {
  // Button spacing
  button: {
    padding: {
      sm: `${space[2]} ${space[3]}`,      // 8px 12px
      md: `${space[3]} ${space[4]}`,      // 12px 16px
      lg: `${space[4]} ${space[6]}`,      // 16px 24px
    },
    gap: space[2],                        // 8px entre icone + texte
  },

  // Card spacing
  card: {
    padding: space[6],                    // 24px - Généreux
    gap: space[4],                        // 16px entre éléments
    marginBottom: space[6],               // 24px espacement vertical
  },

  // Input spacing
  input: {
    padding: `${space[3]} ${space[4]}`,  // 12px 16px
    gap: space[3],                        // 12px label to input
  },

  // Badge/label spacing
  badge: {
    padding: `${space[1]} ${space[3]}`,  // 4px 12px - compact
    gap: space[1],                        // 4px entre icone + texte
  },

  // Section spacing
  section: {
    paddingY: space[12],                  // 48px top/bottom
    paddingX: space[6],                   // 24px left/right (mobile: 16px)
    marginBottom: space[12],              // 48px entre sections
  },
};

// ============================================
// RESPONSIVE SPACING (Adaptatif par breakpoint)
// ============================================
export const responsive = {
  // Mobile-first: valeurs par défaut sont mobile
  // Utilise les breakpoints pour desktop
  section: {
    mobile: {
      paddingX: space[4],     // 16px - mobile
      paddingY: space[6],     // 24px - mobile
    },
    tablet: {
      paddingX: space[6],     // 24px - tablet
      paddingY: space[8],     // 32px - tablet
    },
    desktop: {
      paddingX: space[8],     // 32px - desktop
      paddingY: space[12],    // 48px - desktop
    },
  },

  // Container max-widths (inspired by Three.js Journey)
  container: {
    mobile: '100%',
    tablet: '640px',
    desktop: '1024px',
    wide: '1280px',
    ultrawide: '1536px',
  },
};

// ============================================
// LAYOUT PATTERNS (For complex layouts)
// ============================================
export const patterns = {
  // Card grid avec consistent spacing
  cardGrid: {
    gap: space[6],          // 24px entre cards
    padding: space[6],      // 24px container padding
  },

  // Horizontal stack (navbar, hero, etc)
  hStack: {
    gap: space[4],          // 16px entre items
    padding: space[4],      // 16px padding
  },

  // Vertical stack (form, list, etc)
  vStack: {
    gap: space[4],          // 16px entre items
    padding: space[4],      // 16px padding
  },

  // Large spacing (hero sections, major breaks)
  heroSpacing: {
    marginBottom: space[16],  // 64px
    marginTop: space[16],
  },
};

export default {
  space,
  semantic,
  component,
  responsive,
  patterns,
};
