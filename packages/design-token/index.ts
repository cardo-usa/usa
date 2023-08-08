import breakpointTokens from './breakpoint.json';
import colorTokens from './color.json';

export const breakpoints = breakpointTokens;

export const colors = {
  transparent: 'transparent',
  white: {
    DEFAULT: 'rgba(255, 255, 255, 1.000)',
    1: 'rgba(255, 255, 255, 0.000)',
    2: 'rgba(255, 255, 255, 0.013)',
    3: 'rgba(255, 255, 255, 0.034)',
    4: 'rgba(255, 255, 255, 0.056)',
    5: 'rgba(255, 255, 255, 0.086)',
    6: 'rgba(255, 255, 255, 0.124)',
    7: 'rgba(255, 255, 255, 0.176)',
    8: 'rgba(255, 255, 255, 0.249)',
    9: 'rgba(255, 255, 255, 0.386)',
    10: 'rgba(255, 255, 255, 0.446)',
    11: 'rgba(255, 255, 255, 0.592)',
    12: 'rgba(255, 255, 255, 0.923)',
  },
  black: {
    DEFAULT: 'rgba(0, 0, 0, 1.000)',
    1: 'rgba(0, 0, 0, 0.012)',
    2: 'rgba(0, 0, 0, 0.027)',
    3: 'rgba(0, 0, 0, 0.047)',
    4: 'rgba(0, 0, 0, 0.071)',
    5: 'rgba(0, 0, 0, 0.090)',
    6: 'rgba(0, 0, 0, 0.114)',
    7: 'rgba(0, 0, 0, 0.141)',
    8: 'rgba(0, 0, 0, 0.220)',
    9: 'rgba(0, 0, 0, 0.439)',
    10: 'rgba(0, 0, 0, 0.478)',
    11: 'rgba(0, 0, 0, 0.565)',
    12: 'rgba(0, 0, 0, 0.910)',
  },
  light: colorTokens.light,
  dark: colorTokens.dark,
};
