import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type LogoProps = {
  size?: 'small' | 'large';
};

export function Logo({ size = 'large' }: LogoProps) {
  const theme = useTheme();
  const mark = size === 'large' ? 56 : 32;
  const icon = size === 'large' ? 28 : 16;

  return (
    <View style={styles.row}>
      <View
        style={[
          styles.mark,
          { width: mark, height: mark, borderRadius: Radius.medium, backgroundColor: theme.primary },
        ]}>
        <Ionicons name="school" size={icon} color="#FFFFFF" />
      </View>
      <ThemedText type={size === 'large' ? 'subtitle' : 'smallBold'}>EduTrack</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  mark: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
