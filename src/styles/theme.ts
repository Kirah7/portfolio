// src/styles/theme.ts
// Theme configuration for the portfolio website with feminine pastel colors

// Color palette
export const colors = {
  // Primary pastel colors
  blushPink: "#FFD1DC",
  lavender: "#E6E6FA",
  peach: "#FFDAB9",

  // Secondary colors
  softMint: "#D0F0C0",
  babyBlue: "#BFEFFF",

  // Neutral colors
  white: "#FFFFFF",
  offWhite: "#F8F8FF",
  lightGray: "#E8E8E8",
  mediumGray: "#A9A9A9",
  darkGray: "#696969",
  black: "#333333",

  // Accent colors
  gold: "#FFD700",
  rose: "#FF69B4",

  // Overlay colors
  overlay: "rgba(0, 0, 0, 0.05)",
  modalOverlay: "rgba(0, 0, 0, 0.3)",
};

// Typography
export const typography = {
  // Font families
  fontFamily: {
    body: '"Nunito", "Helvetica", sans-serif',
    heading: '"Playfair Display", serif',
    accent: '"Dancing Script", cursive',
  },

  // Font sizes
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },

  // Font weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing
export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "2.5rem", // 40px
  "3xl": "3rem", // 48px
  "4xl": "4rem", // 64px
};

// Borders and shadows
export const effects = {
  borderRadius: {
    sm: "0.25rem", // 4px
    md: "0.5rem", // 8px
    lg: "1rem", // 16px
    full: "9999px", // Circular
  },

  shadows: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.05)",
    md: "0 4px 8px rgba(0, 0, 0, 0.05)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.05)",
    inner: "inset 0 2px 4px rgba(0, 0, 0, 0.05)",
  },

  transitions: {
    fast: "150ms ease",
    normal: "300ms ease",
    slow: "500ms ease",
  },
};

// Breakpoints for responsive design
export const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Z-index values
export const zIndex = {
  base: 0,
  elevated: 10,
  dropdown: 100,
  sticky: 200,
  modal: 300,
  toast: 400,
};

// Gradients
export const gradients = {
  pastelGradient: `linear-gradient(135deg, ${colors.blushPink} 0%, ${colors.lavender} 50%, ${colors.peach} 100%)`,
  subtleGradient: `linear-gradient(to right, ${colors.offWhite} 0%, ${colors.lavender} 100%)`,
  accentGradient: `linear-gradient(to right, ${colors.blushPink} 0%, ${colors.rose} 100%)`,
};

// Export the complete theme
const theme = {
  colors,
  typography,
  spacing,
  effects,
  breakpoints,
  zIndex,
  gradients,
};

export default theme;
