export const colors = {
  neutral: {
    0: "#ffffff",
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#c7bdd5", // Adjusted for Neferos
    300: "#a090b0",
    400: "#7a6a8a",
    500: "#5a4a6a",
    600: "#403050",
    700: "#423d52", // Border
    800: "#2f1c42", // Surface
    900: "#1c1425", // Background
    950: "#0f0a15",
  },
  purple: {
    100: "#d05ce3",
    200: "#a400c0", // Primary Accent
    300: "#8a00a0",
    900: "#3a0044",
  },
  pink: {
    400: "#e36bed", // Secondary Accent
  },
  status: {
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
    info: "#3b82f6",
  }
};

export const semantic = {
  background: {
    primary: colors.neutral[900],
    surface: colors.neutral[800],
    overlay: "rgba(28, 20, 37, 0.8)",
  },
  text: {
    primary: colors.neutral[0],
    secondary: colors.neutral[200],
    muted: colors.neutral[400],
    accent: colors.pink[400],
    inverse: colors.neutral[900],
  },
  border: {
    normal: colors.neutral[700],
    accent: colors.purple[200],
    subtle: colors.neutral[800],
  },
  interactive: {
    primary: colors.purple[200],
    hover: colors.purple[100],
    secondary: colors.neutral[800],
  }
};
