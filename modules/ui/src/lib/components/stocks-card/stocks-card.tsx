import type { NasdaqStockRecord } from '@org/types';
import type { ComponentPropsWithRef } from 'react';
import { Card, H3 } from 'tamagui';

type Props = ComponentPropsWithRef<typeof Card> & {
  record: NasdaqStockRecord;
};

export function StocksCard({ record, ref, ...cardRest }: Props) {
  return (
    <Card
      elevate
      bordered
      height={150}
      width={350}
      maxW={'40%'}
      ref={ref}
      justify="center"
      items="center"
      borderRadius={30}
      {...cardRest}
    >
      <Card.Background />

      <H3 items="center" justify="center">
        {record.ticker}
      </H3>
    </Card>
  );
}
