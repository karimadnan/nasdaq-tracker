import type { NasdaqStockRecord } from '@org/types';
import type { ComponentPropsWithRef } from 'react';
import { Card, SizableText, styled } from 'tamagui';

type Props = ComponentPropsWithRef<typeof Card> & {
  record: NasdaqStockRecord;
};

export const CardTitle = styled(SizableText, {
  name: 'CardTitle',
  tag: 'p',
  userSelect: 'auto',
  color: '$foreground',
  fontSize: 30,
  whiteSpace: 'normal',
  fontWeight: 600,
  justify: 'center',
  items: 'center',
});

export const Paragraph = styled(SizableText, {
  name: 'Paragraph',
  tag: 'p',
  userSelect: 'auto',
  color: '$accent',
  fontSize: 15,
  whiteSpace: 'normal',
  justify: 'center',
  items: 'center',
  padding: 10,
  fontWeight: 400,
});

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
      gap={10}
      {...cardRest}
    >
      <CardTitle>{record.ticker}</CardTitle>
      <Paragraph numberOfLines={1}>{record.name}</Paragraph>
    </Card>
  );
}
