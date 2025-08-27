// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import tamagUIConfig from '../tamagui.config.';
import NxWelcome from './nx-welcome';
import { TamaguiProvider } from '@tamagui/core';

export function App() {
  return (
    <TamaguiProvider config={tamagUIConfig}>
      <NxWelcome title="nasdaq-tracker-web" />
    </TamaguiProvider>
  );
}

export default App;
