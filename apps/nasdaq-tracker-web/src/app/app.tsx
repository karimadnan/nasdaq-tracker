// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { tamagUiConfig } from '@org/ui';
import { TamaguiProvider } from '@tamagui/core';

export function App() {
  return (
    <TamaguiProvider config={tamagUiConfig}>
      <h1>testss</h1>
    </TamaguiProvider>
  );
}

export default App;
