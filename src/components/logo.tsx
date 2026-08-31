import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

type LogoProps = {
  size?: 'small' | 'large';
};

const logoSource = require('@/assets/images/logo.jpeg');

export function Logo({ size = 'small' }: LogoProps) {
  return (
    <Image
      source={logoSource}
      style={size === 'large' ? styles.large : styles.small}
      contentFit="contain"
    />
  );
}

const styles = StyleSheet.create({
  small: {
    width: 120,
    height: 60,
  },
  large: {
    width: 220,
    height: 110,
  },
});
