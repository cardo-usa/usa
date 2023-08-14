import { createConfig } from '@usa/tailwind';

const config = createConfig((defaultConfig) => ({
  ...defaultConfig,
  mode: 'jit',
  content: ['./.storybook/**/*.{.ts,.tsx}', '../../**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
}));

export default config;
