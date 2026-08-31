/**
 * Identidade visual do EduTrack — paleta e tipografia usadas em todo o app.
 * Mesmos valores documentados em docs/marca.md e no style guide do Figma.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  light: {
    text: '#14161A',
    textSecondary: '#5B6472',
    background: '#F7F8FB',
    backgroundElement: '#EEF0F6',
    backgroundSelected: '#E3E7F5',
    border: '#DDE1EC',
    primary: '#4F46E5',
    primarySoft: '#EDEBFD',
    secondary: '#14B8A6',
    secondarySoft: '#E3F8F5',
    accent: '#F59E0B',
    accentSoft: '#FEF3DC',
  },
  dark: {
    text: '#F5F6FA',
    textSecondary: '#A6ACBD',
    background: '#0F1117',
    backgroundElement: '#1B1E27',
    backgroundSelected: '#262B39',
    border: '#2B2F3D',
    primary: '#8683FF',
    primarySoft: '#26254A',
    secondary: '#2DD9C6',
    secondarySoft: '#12332F',
    accent: '#FBBF24',
    accentSoft: '#3A2E13',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  small: 8,
  medium: 12,
  large: 20,
  pill: 999,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
