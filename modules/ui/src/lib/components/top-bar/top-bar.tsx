import { ReactNode } from 'react';
import { XStack, View } from 'tamagui';

type Props = {
  leading: ReactNode;
  content: ReactNode;
  trailing?: ReactNode;
};

export function TopBar({ leading, content, trailing }: Props) {
  return (
    <XStack
      justify="space-between"
      background="magenta"
      marginBlockEnd="$5"
      paddingBlock="$5"
    >
      <View>{leading}</View>
      <View>{content}</View>
      <View>{trailing}</View>
    </XStack>
  );
}
