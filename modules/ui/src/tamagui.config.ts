import { createTamagui } from '@tamagui/core';
import { defaultConfig } from '@tamagui/config/v4';

const tamagUiConfig = createTamagui(defaultConfig);

type Conf = typeof tamagUiConfig;

// make imports typed
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export { tamagUiConfig };
