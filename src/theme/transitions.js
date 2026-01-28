export const transitions = {
  duration: {
    micro: 0.075, // Framer motion uses seconds
    fast: 0.15,
    standard: 0.25,
    slow: 0.5,
    epic: 1.0,
  },
  ease: {
    out: [0.25, 0.46, 0.45, 0.94], // easeOutQuad-ish
    inOut: [0.455, 0.03, 0.515, 0.955], // easeInOutQuad
    back: [0.34, 1.56, 0.64, 1], // slightly bouncy
  }
};

export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: transitions.duration.standard }
    }
  },
  slideInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: transitions.duration.standard,
        ease: transitions.ease.out 
      }
    }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: transitions.duration.standard,
        ease: transitions.ease.out 
      }
    }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: transitions.duration.fast,
        ease: transitions.ease.back 
      }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};
