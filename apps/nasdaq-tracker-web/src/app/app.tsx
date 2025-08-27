// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { CardsGrid, StocksCard, tamagUiConfig, TopBar } from '@org/ui';
import { TamaguiProvider } from '@tamagui/core';
import { Input } from 'tamagui';

const stocks = [
  {
    active: true,
    cik: '0000320193',
    composite_figi: 'BBG000B9XRY4',
    currency_name: 'usd',
    last_updated_utc: '2025-08-27T12:00:00Z',
    locale: 'us',
    market: 'stocks',
    name: 'Apple Inc.',
    primary_exchange: 'XNAS',
    share_class_figi: 'BBG001S5N8V8',
    ticker: 'AAPL',
    type: 'CS',
  },
  {
    active: true,
    cik: '0000789019',
    composite_figi: 'BBG000BPH459',
    currency_name: 'usd',
    last_updated_utc: '2025-08-27T12:01:00Z',
    locale: 'us',
    market: 'stocks',
    name: 'Microsoft Corporation',
    primary_exchange: 'XNAS',
    share_class_figi: 'BBG001S5N8X9',
    ticker: 'MSFT',
    type: 'CS',
  },
  {
    active: true,
    cik: '0001018724',
    composite_figi: 'BBG000BVPV84',
    currency_name: 'usd',
    last_updated_utc: '2025-08-27T12:02:00Z',
    locale: 'us',
    market: 'stocks',
    name: 'Amazon.com Inc.',
    primary_exchange: 'XNAS',
    share_class_figi: 'BBG001S5N9H6',
    ticker: 'AMZN',
    type: 'CS',
  },
  {
    active: true,
    cik: '0001045810',
    composite_figi: 'BBG000C3Q944',
    currency_name: 'usd',
    last_updated_utc: '2025-08-27T12:03:00Z',
    locale: 'us',
    market: 'stocks',
    name: 'NVIDIA Corporation',
    primary_exchange: 'XNAS',
    share_class_figi: 'BBG001S5N8T5',
    ticker: 'NVDA',
    type: 'CS',
  },
  {
    active: true,
    cik: '0001652044',
    composite_figi: 'BBG009S3NB30',
    currency_name: 'usd',
    last_updated_utc: '2025-08-27T12:04:00Z',
    locale: 'us',
    market: 'stocks',
    name: 'Alphabet Inc. (Class A)',
    primary_exchange: 'XNAS',
    share_class_figi: 'BBG009S3NB31',
    ticker: 'GOOGL',
    type: 'CS',
  },
  {
    active: true,
    cik: '0001326801',
    composite_figi: 'BBG000N9MNX3',
    currency_name: 'usd',
    last_updated_utc: '2025-08-27T12:05:00Z',
    locale: 'us',
    market: 'stocks',
    name: 'Meta Platforms, Inc.',
    primary_exchange: 'XNAS',
    share_class_figi: 'BBG000N9M2N5',
    ticker: 'META',
    type: 'CS',
  },
  {
    active: true,
    cik: '0001318605',
    composite_figi: 'BBG000N9MN54',
    currency_name: 'usd',
    last_updated_utc: '2025-08-27T12:06:00Z',
    locale: 'us',
    market: 'stocks',
    name: 'Tesla, Inc.',
    primary_exchange: 'XNAS',
    share_class_figi: 'BBG000N9MNY5',
    ticker: 'TSLA',
    type: 'CS',
  },
  {
    active: true,
    cik: '0000077476',
    composite_figi: 'BBG000BVPV89',
    currency_name: 'usd',
    last_updated_utc: '2025-08-27T12:07:00Z',
    locale: 'us',
    market: 'stocks',
    name: 'PepsiCo, Inc.',
    primary_exchange: 'XNAS',
    share_class_figi: 'BBG000BVPRL2',
    ticker: 'PEP',
    type: 'CS',
  },
  {
    active: true,
    cik: '0000909832',
    composite_figi: 'BBG000BVPV91',
    currency_name: 'usd',
    last_updated_utc: '2025-08-27T12:08:00Z',
    locale: 'us',
    market: 'stocks',
    name: 'Costco Wholesale Corporation',
    primary_exchange: 'XNAS',
    share_class_figi: 'BBG000BVPV92',
    ticker: 'COST',
    type: 'CS',
  },
  {
    active: true,
    cik: '0001730168',
    composite_figi: 'BBG000BVPV93',
    currency_name: 'usd',
    last_updated_utc: '2025-08-27T12:09:00Z',
    locale: 'us',
    market: 'stocks',
    name: 'Broadcom Inc.',
    primary_exchange: 'XNAS',
    share_class_figi: 'BBG000BVPV94',
    ticker: 'AVGO',
    type: 'CS',
  },
];

export function App() {
  return (
    <TamaguiProvider config={tamagUiConfig} defaultTheme="light">
      <TopBar
        leading={'Hi'}
        content={
          <Input
            placeholder="Search"
            size="$4"
            borderWidth={2}
            width={'100%'}
          />
        }
      />
      <CardsGrid
        data={stocks}
        keyExtractor={(record) => record.ticker}
        renderItem={(record) => <StocksCard record={record} />}
      />
    </TamaguiProvider>
  );
}

export default App;
