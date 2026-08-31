import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { estatisticasMock } from '@/data/mock';
import { useTheme } from '@/hooks/use-theme';

export default function EstatisticasScreen() {
  const theme = useTheme();
  const maxPorMateria = Math.max(...estatisticasMock.horasPorMateria.map((m) => m.horas));
  const maxPorDia = Math.max(...estatisticasMock.horasPorDiaSemana.map((d) => d.horas));

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Pressable onPress={() => router.back()} hitSlop={12}>
              <Ionicons name="arrow-back" size={22} color={theme.text} />
            </Pressable>
            <ThemedText type="smallBold">Estatísticas</ThemedText>
            <View style={{ width: 22 }} />
          </View>

          <View style={styles.statsRow}>
            <Card style={styles.statCard}>
              <ThemedText type="subtitle">{estatisticasMock.horasTotais}h</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                horas totais
              </ThemedText>
            </Card>
            <Card style={styles.statCard}>
              <ThemedText type="subtitle" themeColor="secondary">
                {estatisticasMock.pomodorosTotais}
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                pomodoros
              </ThemedText>
            </Card>
            <Card style={styles.statCard}>
              <ThemedText type="subtitle" themeColor="accent">
                {estatisticasMock.mediaDiariaMin}min
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                média/dia
              </ThemedText>
            </Card>
          </View>

          <Card>
            <ThemedText type="smallBold">Horas por matéria</ThemedText>
            <View style={styles.barListVertical}>
              {estatisticasMock.horasPorMateria.map((item) => (
                <View key={item.materia} style={styles.barRow}>
                  <ThemedText type="small" style={styles.barLabel} numberOfLines={1}>
                    {item.materia}
                  </ThemedText>
                  <View style={[styles.barTrack, { backgroundColor: theme.backgroundSelected }]}>
                    <View
                      style={[
                        styles.barFill,
                        {
                          width: `${(item.horas / maxPorMateria) * 100}%`,
                          backgroundColor: theme.primary,
                        },
                      ]}
                    />
                  </View>
                  <ThemedText type="small" themeColor="textSecondary">
                    {item.horas}h
                  </ThemedText>
                </View>
              ))}
            </View>
          </Card>

          <Card>
            <ThemedText type="smallBold">Horas por dia da semana</ThemedText>
            <View style={styles.weekChartRow}>
              {estatisticasMock.horasPorDiaSemana.map((item, index) => (
                <View key={`${item.dia}-${index}`} style={styles.weekBarWrap}>
                  <View
                    style={[
                      styles.weekBar,
                      { height: 8 + (item.horas / maxPorDia) * 70, backgroundColor: theme.secondary },
                    ]}
                  />
                  <ThemedText type="small" themeColor="textSecondary">
                    {item.dia}
                  </ThemedText>
                </View>
              ))}
            </View>
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
    paddingBottom: Spacing.five,
    gap: Spacing.three,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  statCard: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: Spacing.three,
  },
  barListVertical: {
    gap: Spacing.two,
    paddingTop: Spacing.two,
  },
  barRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  barLabel: {
    width: 78,
  },
  barTrack: {
    flex: 1,
    height: 8,
    borderRadius: Radius.pill,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: Radius.pill,
  },
  weekChartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: Spacing.three,
  },
  weekBarWrap: {
    alignItems: 'center',
    gap: Spacing.two,
  },
  weekBar: {
    width: 20,
    borderRadius: Radius.small,
  },
});
