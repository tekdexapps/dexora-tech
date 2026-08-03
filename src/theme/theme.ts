/**
 * Dexora Technologies — Global Theme Tokens
 *
 * Single source of truth for design tokens. All values map to CSS variables
 * defined in `src/styles.css`. Change a value in styles.css and the whole
 * site updates. Import from here in components when you need JS-side access
 * (inline styles, dynamic gradients, framer-motion animations).
 */

export const theme = {
  colors: {
    background: "var(--background)",
    surface: "var(--surface)",
    surfaceElevated: "var(--surface-elevated)",
    card: "var(--card)",
    primary: "var(--primary)",
    primaryGlow: "var(--primary-glow)",
    accent: "var(--accent)",
    accentGlow: "var(--accent-glow)",
    textPrimary: "var(--foreground)",
    textSecondary: "var(--muted-foreground)",
    border: "var(--border)",
    borderStrong: "var(--border-strong)",
    borderSubtle: "var(--border-subtle)",
    overlayBackdrop: "var(--overlay-backdrop)",
    chipBg: "var(--chip-bg)",
    chipBorder: "var(--chip-border)",
  },
  gradients: {
    primary: "var(--gradient-primary)",
    hero: "var(--gradient-hero)",
    border: "var(--gradient-border)",
    text: "var(--gradient-text)",
    body: "var(--gradient-body)",
    blog1: "var(--gradient-blog-1)",
    blog2: "var(--gradient-blog-2)",
    blog3: "var(--gradient-blog-3)",
    blog4: "var(--gradient-blog-4)",
    blog5: "var(--gradient-blog-5)",
  },
  shadows: {
    glow: "var(--shadow-glow)",
    glowAccent: "var(--shadow-glow-accent)",
    elevated: "var(--shadow-elevated)",
    card: "var(--shadow-card)",
  },
  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)",
    "3xl": "var(--radius-3xl)",
  },
  fonts: {
    display: "var(--font-display)",
    sans: "var(--font-sans)",
  },
} as const;

/** Reusable Tailwind class presets built on top of the token layer. */
export const styles = {
  section: "relative py-24 px-6 md:px-10 max-w-7xl mx-auto",
  sectionTitle:
    "text-4xl md:text-5xl font-bold tracking-tight text-gradient text-center",
  sectionEyebrow:
    "inline-block text-xs uppercase tracking-[0.2em] text-primary/80 font-medium mb-4",
  sectionSubtitle:
    "text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-4 text-center",
  glassCard:
    "glass rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-card",
  buttonPrimary:
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-gradient-primary text-primary-foreground shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-[1.02] cursor-pointer",
  buttonSecondary:
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium glass-strong text-foreground hover:border-primary/35 transition-all duration-300 cursor-pointer",
} as const;

export type Theme = typeof theme;
