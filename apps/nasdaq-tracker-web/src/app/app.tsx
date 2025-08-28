import { tamagUiConfig, TopBar } from '@org/ui';
import { TamaguiProvider } from '@tamagui/core';
import { TopBarLogo } from './components/top-bar/top-bar-logo';

import { StocksPage } from './components/stocks-page/stocks-page';
import { SearchInput } from './components/top-bar/top-bar-search-input';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client';

export function App() {
  return (
    <TamaguiProvider config={tamagUiConfig} defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TopBar leading={<TopBarLogo />} content={<SearchInput />} />
        <StocksPage />
      </QueryClientProvider>
    </TamaguiProvider>
  );
}

export default App;
