import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { notificacoesMock } from '@/data/mock';
import { useTheme } from '@/hooks/use-theme';

export default function NotificacoesScreen() {
  const theme = useTheme();

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
            <ThemedText type="smallBold">Notificações</ThemedText>
            <View style={{ width: 22 }} />
          </View>

          {notificacoesMock.map((item) => (
            <Card key={item.id} style={styles.row}>
              <View
                style={[
                  styles.iconWrap,
                  { backgroundColor: item.lida ? theme.backgroundSelected : theme.primarySoft },
                ]}>
                <Ionicons
                  name={item.icone}
                  size={18}
                  color={item.lida ? theme.textSecondary : theme.primary}
                />
              </View>
              <View style={styles.rowText}>
                <View style={styles.rowTitleLine}>
                  <ThemedText type="default" style={styles.rowTitle}>
                    {item.titulo}
                  </ThemedText>
                  {!item.lida && (
                    <View style={[styles.dot, { backgroundColor: theme.primary }]} />
                  )}
                </View>
                <ThemedText type="small" themeColor="textSecondary">
                  {item.descricao}
                </ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {item.quando}
                </ThemedText>
              </View>
            </Card>
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
    paddingBottom: Spacing.five,
    gap: Spacing.three,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.three,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: Radius.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
  rowTitleLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  rowTitle: {
    flex: 1,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});
