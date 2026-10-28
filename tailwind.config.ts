import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        canvas: '#0B0B0B',
        surface: {
          DEFAULT: '#121214',
          dim: '#0E0E10',
          card: '#121214',
          row: '#1A1A1E',
          elevated: '#222228',
          highest: '#2D2D35',
        },
        crimson: {
          DEFAULT: '#D32F2F',
          dark: '#93000A',
          deep: '#680008',
          bright: '#FF334B',
          glow: 'rgba(211, 47, 47, 0.45)',
          subtle: 'rgba(211, 47, 47, 0.12)',
        },
        brand: {
          primary: '#D32F2F',
          secondary: '#FF334B',
          tertiary: '#00E676',
        },
        market: {
          long: '#00E676',
          short: '#FF334B',
          neutral: '#94A3B8',
        },
        fintech: {
          text: '#FFFFFF',
          secondary: '#94A3B8',
          muted: '#64748B',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.18)',
          'border-active': 'rgba(211, 47, 47, 0.5)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-crimson': '0 0 24px -4px rgba(211, 47, 47, 0.5)',
        'glow-crimson-lg': '0 0 40px -6px rgba(211, 47, 47, 0.6)',
        'glow-crimson-subtle': '0 0 16px -2px rgba(211, 47, 47, 0.25)',
        'glow-green': '0 0 20px -4px rgba(0, 230, 118, 0.4)',
        'tier-featured': '0 16px 48px -8px rgba(211, 47, 47, 0.35), 0 0 0 1px rgba(211, 47, 47, 0.6)',
        'card-elevated': '0 16px 40px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(211, 47, 47, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 51, 75, 0.65)' },
        },
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
        terminal: '0.08em',
      },
    },
  },
  plugins: [],
};

export default config;
