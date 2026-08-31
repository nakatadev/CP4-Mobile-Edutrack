import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { Logo } from '@/components/logo';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { cronogramaMock, usuarioMock } from '@/data/mock';
import { useTheme } from '@/hooks/use-theme';

export default function HomeScreen() {
  const theme = useTheme();
  const proximaSessao = cronogramaMock.find((sessao) => !sessao.concluida);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <View style={styles.topRow}>
            <Logo size="small" />
            <Pressable onPress={() => router.push('/perfil')} hitSlop={12}>
              <Ionicons name="person-circle-outline" size={28} color={theme.text} />
            </Pressable>
          </View>

          <ThemedText type="title" style={styles.greeting}>
            Olá, {usuarioMock.nome} 👋
          </ThemedText>
          <ThemedText themeColor="textSecondary">
            Vamos manter o foco nos estudos hoje.
          </ThemedText>

          <ThemedView style={styles.statsRow}>
            <Card style={styles.statCard}>
              <ThemedText type="subtitle">{usuarioMock.streakDias}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                dias seguidos
              </ThemedText>
            </Card>
            <Card style={styles.statCard}>
              <ThemedText type="subtitle" themeColor="secondary">
                {usuarioMock.pomodorosHoje}/{usuarioMock.metaDiariaPomodoros}
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                pomodoros hoje
              </ThemedText>
            </Card>
          </ThemedView>

          {proximaSessao && (
            <Card>
              <ThemedText type="smallBold" themeColor="primary">
                PRÓXIMA SESSÃO
              </ThemedText>
              <ThemedText type="default">{proximaSessao.materia}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {proximaSessao.dia} às {proximaSessao.horario}
              </ThemedText>
            </Card>
          )}

          <Card>
            <ThemedText type="smallBold">Sobre o EduTrack</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Cronograma de estudos, técnica pomodoro e metas em um só lugar — protótipo de
              idealização do Checkpoint 4. Conteúdo desta tela é mockado, sem persistência real
              ainda.
            </ThemedText>
          </Card>
        </ScrollView>
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
  scroll: {
    flex: 1,
    width: '100%',
  },
  content: {
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.four,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greeting: {
    fontSize: 32,
    lineHeight: 38,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  statCard: {
    flex: 1,
    alignItems: 'flex-start',
  },
});
