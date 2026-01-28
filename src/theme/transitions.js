/**
 * ✨ NEFEROS TRANSITIONS & ANIMATIONS
 * Timing, easing, effects pré-définis
 * Utilisés partout pour cohérence motion
 */

// ============================================
// DURATIONS (Timings standard)
// ============================================
export const duration = {
  // Ultra-rapide (interactions micro)
  xs: 75,      // 75ms
  
  // Rapide (hover states, small changes)
  sm: 150,     // 150ms
  
  // Normal (défaut pour transitions)
  md: 250,     // 250ms
  
  // Medium (animations composites)
  lg: 300,     // 300ms
  
  // Slow (entrées de page, hero)
  xl: 500,     // 500ms
  
  // Very slow (animations cinematic)
  '2xl': 700,  // 700ms
  
  // Epic (full-page transitions)
  '3xl': 1000, // 1000ms
};

// ============================================
// EASING (Courbes d'accélération)
// ============================================
export const easing = {
  // Cubic Bezier curves
  // out variants: accelerate at end (natural feeling)
  
  linear: 'linear',
  
  // Out (natural, feels good)
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',           // Custom smooth
  easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  
  // In (moins naturel, pour micro-interactions)
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
  easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  
  // InOut (smoother pour compositions)
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
  easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
  easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
  
  // Elastic (fun, playful)
  easeElastic: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  
  // Back (anticipation, impact)
  easeBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
};

// ============================================
// TRANSITION PRESETS (Combos timing + easing)
// ============================================
export const transition = {
  // Micro interactions (hover, focus)
  micro: {
    duration: duration.sm,
    easing: easing.easeOut,
  },
  
  // Standard (buttons, cards, etc)
  standard: {
    duration: duration.md,
    easing: easing.easeOut,
  },
  
  // Medium (modal openings, slides)
  medium: {
    duration: duration.lg,
    easing: easing.easeOut,
  },
  
  // Slow (page transitions, hero elements)
  slow: {
    duration: duration.xl,
    easing: easing.easeOut,
  },
  
  // Epic (cinematic transitions)
  epic: {
    duration: duration['2xl'],
    easing: easing.easeOut,
  },
  
  // Smooth without snap (scroll reveal)
  reveal: {
    duration: duration.lg,
    easing: easing.easeInOut,
  },
};

// ============================================
// FRAMER MOTION VARIANTS (Ready to use)
// ============================================
export const variants = {
  // Fade in/out
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: transition.standard,
  },
  
  fadeInSlow: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: transition.slow,
  },
  
  // Slide in from left
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: transition.medium,
  },
  
  // Slide in from right
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: transition.medium,
  },
  
  // Slide in from bottom
  slideInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: transition.medium,
  },
  
  // Scale in
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: transition.medium,
  },
  
  // Rotate + fade in
  rotateIn: {
    initial: { opacity: 0, rotate: -10 },
    animate: { opacity: 1, rotate: 0 },
    exit: { opacity: 0, rotate: -10 },
    transition: transition.slow,
  },
  
  // Bounce in (playful)
  bounceIn: {
    initial: { opacity: 0, scale: 0.6 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.6 },
    transition: {
      duration: duration.lg,
      easing: easing.easeBack,
    },
  },
};

// ============================================
// ANIMATION LOOPS (Continuous animations)
// ============================================
export const animation = {
  // Smooth rotation (planets, galaxies)
  rotate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  
  // Subtle float (floating elements)
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: easing.easeInOut,
    },
  },
  
  // Pulse (attention getter)
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easing.easeInOut,
    },
  },
  
  // Glow effect
  glow: {
    boxShadow: [
      '0 0 20px rgba(164, 0, 192, 0.3)',
      '0 0 40px rgba(164, 0, 192, 0.6)',
      '0 0 20px rgba(164, 0, 192, 0.3)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easing.easeInOut,
    },
  },
  
  // Shimmer effect
  shimmer: {
    backgroundPosition: ['200% center', '-200% center'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easing.linear,
    },
  },
};

// ============================================
// HOVER/FOCUS STATES
// ============================================
export const interaction = {
  // Button hover
  buttonHover: {
    scale: 1.02,
    transition: transition.micro,
  },
  
  // Card hover
  cardHover: {
    y: -4,
    transition: transition.micro,
  },
  
  // Link hover
  linkHover: {
    color: '#e36bed',
    transition: transition.micro,
  },
};

export default {
  duration,
  easing,
  transition,
  variants,
  animation,
  interaction,
};
