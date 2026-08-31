import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { cronogramaMock } from '@/data/mock';
import { useTheme } from '@/hooks/use-theme';

export default function CronogramaScreen() {
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}>
          <ThemedText type="title" style={styles.title}>
            Cronograma
          </ThemedText>
          <ThemedText themeColor="textSecondary">Sua semana de estudos, organizada.</ThemedText>

          {cronogramaMock.map((sessao) => (
            <Card key={sessao.id} style={styles.row}>
              <View
                style={[
                  styles.dayBadge,
                  { backgroundColor: sessao.concluida ? theme.secondarySoft : theme.primarySoft },
                ]}>
                <ThemedText
                  type="smallBold"
                  themeColor={sessao.concluida ? 'secondary' : 'primary'}>
                  {sessao.dia}
                </ThemedText>
              </View>
              <View style={styles.rowText}>
                <ThemedText type="default">{sessao.materia}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {sessao.horario}
                </ThemedText>
              </View>
              <Ionicons
                name={sessao.concluida ? 'checkmark-circle' : 'ellipse-outline'}
                size={22}
                color={sessao.concluida ? theme.secondary : theme.textSecondary}
              />
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
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.three,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  dayBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
});
