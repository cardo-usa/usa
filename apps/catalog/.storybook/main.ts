import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', '@storybook/addon-styling'],
  docs: {
    autodocs: true,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../../website/public'],
  stories: [
    {
      directory: '../../website/src',
      files: '**/*.story.tsx',
      titlePrefix: 'website',
    },
    {
      directory: '../../../packages/core',
      files: '**/*.story.tsx',
      titlePrefix: 'core',
    },
  ],
  typescript: {
    reactDocgenTypescriptOptions: {
      // NOTE: This setting is necessary to recognize JSDoc for components under monorepo.
      // ref: https://github.com/storybookjs/storybook/issues/21399#issuecomment-1473800791
      include: ['../../../**/*.tsx'],
    },
  },
  webpackFinal: (config) => {
    const finalConfig: typeof config = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '#': path.resolve(__dirname, '../../website'),
          '@': path.resolve(__dirname, '../../website/src'),
          '#core': path.resolve(__dirname, '../../../packages/core'),
        },
      },
    };

    return finalConfig;
  },
};

export default config;
