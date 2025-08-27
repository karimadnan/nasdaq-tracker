import { ReactNode } from 'react';
import { XStack, View, Text } from 'tamagui';

type Props = {
  leading: ReactNode;
  content: ReactNode;
  trailing?: ReactNode;
};

export function TopBar({ leading, content, trailing }: Props) {
  return (
    <XStack
      justify="space-between"
      background="grey"
      marginBlockEnd="$5"
      paddingBlock="$5"
      flexWrap="wrap"
      borderBottomRightRadius={30}
      borderBottomLeftRadius={30}
      gap={15}
    >
      <View>{leading}</View>
      <View width={500} maxW={'100%'} paddingHorizontal={15}>
        {content}
      </View>
      <View>{trailing}</View>
    </XStack>
  );
}
