import { config as coreConfig } from '@usa/tailwind';

const config: typeof coreConfig = {
  ...coreConfig,
  mode: 'jit',
  content: ['../../**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
};

export default config;
