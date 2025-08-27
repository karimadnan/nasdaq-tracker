import { NasdaqStockRecord } from '@org/types';
import { ComponentPropsWithRef } from 'react';
import { Card, H3 } from 'tamagui';

type Props = ComponentPropsWithRef<typeof Card> & {
  record: NasdaqStockRecord;
};

export function StocksCard({ record, ref, ...cardRest }: Props) {
  return (
    <Card
      elevate
      size="$4"
      bordered
      hoverStyle={{ scale: 1.02 }}
      height={150}
      width={350}
      ref={ref}
      justify="center"
      items="center"
      {...cardRest}
    >
      <Card.Background />

      <H3 items="center" justify="center">
        {record.ticker}
      </H3>
    </Card>
  );
}
