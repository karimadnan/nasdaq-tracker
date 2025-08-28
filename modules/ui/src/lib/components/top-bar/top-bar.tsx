import { ReactNode } from 'react';
import { XStack, View } from 'tamagui';
import { Outlet } from 'react-router';

type Props = {
  leading: ReactNode;
  content: ReactNode;
  trailing?: ReactNode;
};

export function TopBar({ leading, content, trailing }: Props) {
  return (
    <>
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
        <View
          $lg={{ width: 700 }}
          width="100%"
          maxW={'100%'}
          justify="center"
          paddingHorizontal={15}
        >
          {content}
        </View>
        <View>{trailing}</View>
      </XStack>
      <Outlet />
    </>
  );
}
