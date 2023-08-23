import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import _tailwindcssRadixPlugin from 'tailwindcss-radix';
import { createThemes } from 'tw-colors';
import { breakpoints, colors } from './src/style/token';

// NOTE: Correct type definition for `tailwindcss-radix` for ESM using evil type casting
const tailwindcssRadixPlugin = _tailwindcssRadixPlugin as unknown as typeof _tailwindcssRadixPlugin.handler;

const config: Config = {
  mode: 'jit',
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    colors,
    fontFamily: {
      sans: ['var(--font-noto-sans-jp)', ...defaultTheme.fontFamily.sans],
      'sans-rounded': ['var(--font-m-plus-rounded-1c)', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      mobile: `${breakpoints.mobile.minWidth}px`,
      tablet: `${breakpoints.tablet.minWidth}px`,
      laptop: `${breakpoints.laptop.minWidth}px`,
      desktop: `${breakpoints.desktop.minWidth}px`,
    },
  },
  plugins: [
    createThemes({
      light: colors.light,
      dark: colors.dark,
    }),
    require('tailwindcss-animate'),
    tailwindcssRadixPlugin({
      // Generates `rdx-[state/side/orientation]-*` utilities for `data-[state/side/orientation]="*"`
      // Refer: https://github.com/ecklf/tailwindcss-radix#usage
      variantPrefix: 'rdx',
    }),
  ],
};

export default config;
