import { Fragment, ReactNode } from 'react';
import { XStack } from 'tamagui';

type Props<T> = {
  keyExtractor: (record: T) => React.Key;
  renderItem: (record: T, index: number) => ReactNode;
  data: T[];
};

export function CardsGrid<T>({ data, keyExtractor, renderItem }: Props<T>) {
  return (
    <XStack flexWrap="wrap" gap="$4" justify="center" marginBottom={20}>
      {data.map((record, index) => (
        <Fragment key={keyExtractor(record)}>
          {renderItem(record, index)}
        </Fragment>
      ))}
    </XStack>
  );
}
