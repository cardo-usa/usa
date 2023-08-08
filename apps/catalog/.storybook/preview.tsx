import { withThemeByDataAttribute } from '@storybook/addon-styling';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../../../packages/core/component/theme-provider';
import { fontFamily } from '../../../packages/core/font/family';
import { cn } from '../../../packages/tailwind';
import './storybook.css';

const themeDataAttribute = 'data-theme';
const defaultTheme = 'light';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider attribute={themeDataAttribute} defaultTheme={defaultTheme}>
        <div className={cn(fontFamily, 'bg-mauve-2 font-sans text-mauve-12')}>
          <Story />
        </div>
      </ThemeProvider>
    ),
    withThemeByDataAttribute({
      attributeName: themeDataAttribute,
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: defaultTheme,
    }),
  ],
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
