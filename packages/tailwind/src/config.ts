import { breakpoints, colors } from '@usa/design-token';
import svgToDataUri from 'mini-svg-data-uri';
import tailwindScrollbar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import type { KeyValuePair, PluginAPI, RecursiveKeyValuePair, ResolvableTo } from 'tailwindcss/types/config';
import { createThemes } from 'tw-colors';

const flattenColorPalette = (colorPalette: ResolvableTo<RecursiveKeyValuePair<string, string>>): KeyValuePair<string, string> =>
  Object.assign(
    {},
    ...Object.entries(colorPalette ?? {}).flatMap(([color, values]) =>
      typeof values == 'object'
        ? Object.entries(flattenColorPalette(values)).map(([number, hex]) => ({
            [color + (number === 'DEFAULT' ? '' : `-${number}`)]: hex,
          }))
        : [{ [`${color}`]: values }],
    ),
  );

export const config: Config = {
  content: [],
  theme: {
    colors,
    fontFamily: {
      sans: ['var(--font-noto-sans)', ...defaultTheme.fontFamily.sans],
      code: ['var(--font-fira-code)'],
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
    tailwindScrollbar({ nocompatible: true }),
    ({ matchUtilities, theme }: PluginAPI) => {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-dasharray="5 3" transform="scale(1, -1)"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' },
      );
    },
    require('tailwindcss-animate'),
  ],
  variants: {
    scrollbar: ['rounded'],
  },
};
