import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';

type LogoProps = {
  size?: 'small' | 'large';
};

const logoSource = require('@/assets/images/logo.jpeg');

export function Logo({ size = 'small' }: LogoProps) {
  if (size === 'large') {
    return <Image source={logoSource} style={styles.large} contentFit="contain" />;
  }

  return (
    <View style={styles.row}>
      <Image source={logoSource} style={styles.small} contentFit="cover" />
      <ThemedText type="smallBold">EduTrack</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  small: {
    width: 32,
    height: 32,
    borderRadius: Radius.small,
  },
  large: {
    width: 160,
    height: 160,
  },
});
