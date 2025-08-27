// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { TamaguiProvider } from '@tamagui/core';
import { tamagUiConfig } from '@nasdaq-tracker/ui/tamagui.config';

export function App() {
  return (
    <TamaguiProvider config={tamagUiConfig}>
      <h1>testss</h1>
    </TamaguiProvider>
  );
}

export default App;
