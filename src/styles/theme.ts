export const theme = {
  breakpoints: {
    xs: '320px',
    sm: '540px',
    md: '760px',
    lg: '980px',
    xl: '1100px',
  },
  colors: {
    text: '#f8f8f8',
    background: '#131a20',
    border: '#444',
    code: '#21272d',
  },
  font: {
    family: {
      body: '"Quicksand", sans-serif',
      code: '"Roboto Mono", monospace',
    },
    size: {
      default: '1.8rem',
    },
  },
} as const;

export type ThemeType = typeof theme;
