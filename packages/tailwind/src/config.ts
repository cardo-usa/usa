import { breakpoints, colors, fonts } from '@usa/design-token';
import { withTV } from 'tailwind-variants/transformer';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { createThemes } from 'tw-colors';

const defaultConfig: Config = {
  content: [],
  theme: {
    colors,
    fontFamily: {
      sans: [fonts['noto-sans'].variable, ...defaultTheme.fontFamily.sans],
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
  ],
};

type CreateConfig = (config: (c: Config) => Config) => Config;

export const createConfig: CreateConfig = (config) => withTV(config(defaultConfig));
