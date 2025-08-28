import { Image } from 'tamagui';

export function TopBarLogo() {
  return (
    <>
      {/* Show full logo on bigger screens */}
      <Image
        marginStart={10}
        display="none"
        $lg={{
          width: 300,
          height: 60,
          display: 'block',
        }}
        source={{
          uri: '/nasdaq-logo.svg',
        }}
      />

      {/* Show only symbol on smaller screens */}
      <Image
        marginStart={10}
        display="block"
        height={70}
        width={100}
        $lg={{
          display: 'none',
        }}
        source={{
          uri: '/nasdaq-symbol.svg',
        }}
      />
    </>
  );
}
