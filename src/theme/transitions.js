/**
 * TRANSITIONS & ANIMATIONS
 * Durées, easings, et presets pour Framer Motion
 */

// Durées (en secondes, pour Framer Motion)
export const duration = {
  micro: 0.075,
  fast: 0.15,
  standard: 0.25,
  medium: 0.3,
  slow: 0.5,
  epic: 1.0,
};

// Easing curves (compatible Framer Motion)
export const easing = {
  out: [0.25, 0.46, 0.45, 0.94],      // ease-out
  inOut: [0.455, 0.03, 0.515, 0.955], // ease-in-out
  back: [0.34, 1.56, 0.64, 1],        // bounce back
  elastic: [0.68, -0.55, 0.265, 1.55], // elastic
};

// Transition presets (objet imbriqué comme utilisé dans PlanetPage)
export const transition = {
  micro: {
    duration: duration.micro,
    ease: easing.out,
  },
  fast: {
    duration: duration.fast,
    ease: easing.out,
  },
  standard: {
    duration: duration.standard,
    ease: easing.out,
  },
  medium: {
    duration: duration.medium,
    ease: easing.out,
  },
  slow: {
    duration: duration.slow,
    ease: easing.inOut,
  },
};

// Export tout dans un objet "transitions" (comme importé dans PlanetPage)
export const transitions = {
  duration,
  easing,
  transition, // <- IMPORTANT: c'est ici que transition est imbriqué
};

// Framer Motion variants presets
export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: transition.standard,
    },
  },
  slideInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: transition.standard,
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: transition.standard,
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: transition.standard,
    },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: transition.fast,
    },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

// Export default pour import simplifié
export default transitions;
