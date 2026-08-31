import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { metaDetalheMock } from '@/data/mock';
import { useTheme } from '@/hooks/use-theme';

export default function MetaDetalheScreen() {
  const theme = useTheme();
  const meta = metaDetalheMock;
  const maxHoras = Math.max(...meta.horasPorSemana.map((s) => s.horas));

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <Pressable onPress={() => router.back()} hitSlop={12} style={styles.backButton}>
            <Ionicons name="arrow-back" size={22} color={theme.text} />
          </Pressable>

          <ThemedText type="title" style={styles.title}>
            {meta.titulo}
          </ThemedText>
          <ThemedText themeColor="textSecondary">{meta.descricao}</ThemedText>

          <Card>
            <View style={[styles.progressTrack, { backgroundColor: theme.backgroundSelected }]}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${meta.progresso * 100}%`, backgroundColor: theme.accent },
                ]}
              />
            </View>
            <ThemedText type="small" themeColor="textSecondary">
              {meta.horasFeitas}h de {meta.totalHoras}h · {Math.round(meta.progresso * 100)}%
              concluído
            </ThemedText>
          </Card>

          <Card>
            <ThemedText type="smallBold">Horas por semana</ThemedText>
            <View style={styles.chartRow}>
              {meta.horasPorSemana.map((item) => (
                <View key={item.semana} style={styles.chartBarWrap}>
                  <View
                    style={[
                      styles.chartBar,
                      {
                        height: 12 + (item.horas / maxHoras) * 80,
                        backgroundColor: theme.primary,
                      },
                    ]}
                  />
                  <ThemedText type="small" themeColor="textSecondary">
                    {item.semana}
                  </ThemedText>
                </View>
              ))}
            </View>
          </Card>

          <Pressable style={[styles.primaryButton, { backgroundColor: theme.primary }]}>
            <Ionicons name="add" size={18} color="#FFFFFF" />
            <ThemedText type="default" style={styles.primaryButtonText}>
              Adicionar sessão de estudo
            </ThemedText>
          </Pressable>
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
  backButton: {
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 26,
    lineHeight: 32,
  },
  progressTrack: {
    height: 8,
    borderRadius: Radius.pill,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: Radius.pill,
  },
  chartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: Spacing.three,
  },
  chartBarWrap: {
    alignItems: 'center',
    gap: Spacing.two,
  },
  chartBar: {
    width: 28,
    borderRadius: Radius.small,
  },
  primaryButton: {
    flexDirection: 'row',
    borderRadius: Radius.pill,
    paddingVertical: Spacing.three,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
