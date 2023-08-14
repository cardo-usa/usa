import { createConfig } from '@usa/tailwind';

const config = createConfig((defaultConfig) => ({
  ...defaultConfig,
  mode: 'jit',
  content: ['./**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
}));

export default config;
