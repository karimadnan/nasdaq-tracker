import { createTamagui } from '@tamagui/core';
import { defaultConfig } from '@tamagui/config/v4';

const config = createTamagui(defaultConfig);

type Conf = typeof config;

// make imports typed
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
