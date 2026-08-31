import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { pomodoroConfigMock, usuarioMock } from '@/data/mock';
import { useTheme } from '@/hooks/use-theme';

export default function PomodoroScreen() {
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <ThemedText type="title" style={styles.title}>
            Pomodoro
          </ThemedText>
          <ThemedText themeColor="textSecondary" style={styles.subtitle}>
            Foco de {pomodoroConfigMock.duracaoFocoMin} min, pausa de{' '}
            {pomodoroConfigMock.duracaoPausaMin} min.
          </ThemedText>

          <View style={[styles.timerRing, { borderColor: theme.primarySoft }]}>
            <View
              style={[
                styles.timerRingProgress,
                { borderColor: theme.primary, transform: [{ rotate: '45deg' }] },
              ]}
            />
            <ThemedText type="title" style={styles.timerText}>
              {String(pomodoroConfigMock.duracaoFocoMin).padStart(2, '0')}:00
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              sessão de foco
            </ThemedText>
          </View>

          <Pressable style={[styles.playButton, { backgroundColor: theme.primary }]}>
            <Ionicons name="play" size={28} color="#FFFFFF" />
          </Pressable>

          <Card style={styles.summaryCard}>
            <ThemedText type="smallBold">Hoje</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {usuarioMock.pomodorosHoje} de {usuarioMock.metaDiariaPomodoros} pomodoros
              concluídos · pausa longa a cada {pomodoroConfigMock.ciclosAteLongPausa} ciclos
            </ThemedText>
          </Card>
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
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.four,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
    alignSelf: 'flex-start',
  },
  subtitle: {
    alignSelf: 'flex-start',
  },
  timerRing: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Spacing.five,
  },
  timerRingProgress: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 10,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  timerText: {
    fontSize: 40,
    lineHeight: 46,
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryCard: {
    alignSelf: 'stretch',
  },
});
