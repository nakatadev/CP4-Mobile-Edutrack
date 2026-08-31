import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Logo } from '@/components/logo';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function OnboardingScreen() {
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.top}>
            <Logo size="large" />
          </View>

          <View style={styles.hero}>
            <ThemedText type="title" style={styles.title}>
              Estude com foco.{'\n'}Sem complicação.
            </ThemedText>
            <ThemedText themeColor="textSecondary" style={styles.subtitle}>
              Cronograma, técnica pomodoro e metas em um único app — pensado para o seu ritmo de
              estudo.
            </ThemedText>
          </View>

          <View style={styles.bottom}>
            <Pressable
              style={[styles.primaryButton, { backgroundColor: theme.primary }]}
              onPress={() => router.push('/login')}>
              <ThemedText type="default" style={styles.primaryButtonText}>
                Começar
              </ThemedText>
            </Pressable>
            <ThemedText type="small" themeColor="textSecondary" style={styles.center}>
              Protótipo de idealização — Checkpoint 4
            </ThemedText>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    maxWidth: MaxContentWidth,
    width: '100%',
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.four,
    justifyContent: 'space-between',
  },
  top: {
    alignItems: 'center',
  },
  hero: {
    gap: Spacing.three,
  },
  title: {
    fontSize: 36,
    lineHeight: 42,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  bottom: {
    gap: Spacing.three,
  },
  primaryButton: {
    borderRadius: Radius.pill,
    paddingVertical: Spacing.three,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  center: {
    textAlign: 'center',
  },
});
