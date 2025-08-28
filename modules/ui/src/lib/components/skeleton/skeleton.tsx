import { ComponentProps } from 'react';
import { Card, View, YStack } from 'tamagui';

export function Skeleton({
  width,
  height,
  borderRadius = '$4',
}: ComponentProps<typeof View>) {
  return (
    <View
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor="gray"
      animation="quick"
    />
  );
}

export function SkeletonCard({
  width = 300,
  height = 180,
  ...rest
}: ComponentProps<typeof Card>) {
  return (
    <Card elevate bordered width={width} height={height} {...rest}>
      <YStack>
        {/* Title + subtitle */}
        <YStack justify="center" items="center" gap={10}>
          <Skeleton width="40%" height={14} />
          <Skeleton width="70%" height={16} />
        </YStack>
      </YStack>
    </Card>
  );
}
