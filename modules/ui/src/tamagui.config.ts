import { createTamagui } from 'tamagui';
import { defaultConfig } from '@tamagui/config/v4';

const tamagUiConfig = createTamagui({
  ...defaultConfig,
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
  },
  tokens: {
    ...defaultConfig.tokens,
    color: {
      primary: '#0090BA',
      foreground: '#08062a',
      accent: '#707070',
    },
  },
});

type Conf = typeof tamagUiConfig;

// make imports typed
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export { tamagUiConfig };
