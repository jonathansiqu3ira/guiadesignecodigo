/**
 * Design Token Reference (JS)
 * 
 * These tokens are the JS representation of the CSS variables defined in globals.css.
 * Currently used as a documentation reference. If you need to access token values
 * in JS (e.g., for charts or canvas), import from this file.
 */
export const tokens = {
  colors: {
    base: {
      white: '#ffffff',
      black: '#000000',
      zinc: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
        950: '#09090b',
      },
    },
    semantic: {
      light: {
        background: '#ffffff',
        surface: '#f4f4f5', // zinc-100
        surfaceHighlight: '#e4e4e7', // zinc-200
        foreground: '#09090b', // zinc-950
        foregroundMuted: '#52525b', // zinc-600
        border: '#d4d4d8', // zinc-300
        borderHighlight: '#a1a1aa', // zinc-400
        primary: '#18181b', // zinc-900
        primaryForeground: '#fafafa', // zinc-50
      },
      dark: {
        background: '#09090b', // zinc-950
        surface: '#18181b', // zinc-900
        surfaceHighlight: '#27272a', // zinc-800
        foreground: '#fafafa', // zinc-50
        foregroundMuted: '#a1a1aa', // zinc-400
        border: '#27272a', // zinc-800
        borderHighlight: '#3f3f46', // zinc-700
        primary: '#fafafa', // zinc-50
        primaryForeground: '#18181b', // zinc-900
      },
    },
  },
  typography: {
    fonts: {
      sans: 'var(--font-inter)',
      mono: 'var(--font-jetbrains-mono)',
    },
    sizes: {
      xs: { fontSize: '0.75rem', lineHeight: '1rem', letterSpacing: '0.01em' },
      sm: { fontSize: '0.875rem', lineHeight: '1.25rem', letterSpacing: '0' },
      base: { fontSize: '1rem', lineHeight: '1.75rem', letterSpacing: '0' }, // Relaxed reading
      lg: { fontSize: '1.125rem', lineHeight: '1.75rem', letterSpacing: '-0.01em' },
      xl: { fontSize: '1.25rem', lineHeight: '1.75rem', letterSpacing: '-0.015em' },
      '2xl': { fontSize: '1.5rem', lineHeight: '2rem', letterSpacing: '-0.02em' },
      '3xl': { fontSize: '1.875rem', lineHeight: '2.25rem', letterSpacing: '-0.025em' },
      '4xl': { fontSize: '2.25rem', lineHeight: '2.5rem', letterSpacing: '-0.03em' },
    },
    weights: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  spacing: {
    container: {
      max: '1440px',
      reading: '65ch',
    },
    section: {
      sm: '2rem',
      md: '4rem',
      lg: '6rem',
    },
  },
} as const;
