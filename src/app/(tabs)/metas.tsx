import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { metasMock } from '@/data/mock';
import { useTheme } from '@/hooks/use-theme';

export default function MetasScreen() {
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <ThemedText type="title" style={styles.title}>
            Metas
          </ThemedText>
          <ThemedText themeColor="textSecondary">
            Acompanhe o progresso dos seus objetivos de estudo.
          </ThemedText>

          {metasMock.map((meta, index) => (
            <Pressable key={meta.id} onPress={() => index === 0 && router.push('/meta-detalhe')}>
              <Card>
                <ThemedText type="default">{meta.titulo}</ThemedText>
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
                </ThemedText>
              </Card>
            </Pressable>
          ))}
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
    gap: Spacing.three,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
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
});
