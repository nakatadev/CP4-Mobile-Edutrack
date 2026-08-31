import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { usuarioMock } from '@/data/mock';
import { useTheme } from '@/hooks/use-theme';

const settingsItems: { icon: keyof typeof Ionicons.glyphMap; label: string }[] = [
  { icon: 'notifications-outline', label: 'Notificações' },
  { icon: 'moon-outline', label: 'Tema' },
  { icon: 'star-outline', label: 'Assinar EduTrack Premium' },
  { icon: 'information-circle-outline', label: 'Sobre o EduTrack' },
];

export default function PerfilScreen() {
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
            <ThemedText type="smallBold">Perfil</ThemedText>
            <View style={{ width: 22 }} />
          </View>

          <View style={styles.profileRow}>
            <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
              <ThemedText type="subtitle" style={styles.avatarLetter}>
                {usuarioMock.nome.charAt(0)}
              </ThemedText>
            </View>
            <View style={styles.profileText}>
              <ThemedText type="default">{usuarioMock.nome}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {usuarioMock.email}
              </ThemedText>
            </View>
            <View style={[styles.planBadge, { backgroundColor: theme.primarySoft }]}>
              <ThemedText type="small" themeColor="primary">
                {usuarioMock.plano}
              </ThemedText>
            </View>
          </View>

          <View style={styles.statsRow}>
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
          </View>

          <View style={styles.settingsList}>
            {settingsItems.map((item) => (
              <View key={item.label} style={[styles.settingsRow, { borderColor: theme.border }]}>
                <Ionicons name={item.icon} size={20} color={theme.textSecondary} />
                <ThemedText type="default" style={styles.settingsLabel}>
                  {item.label}
                </ThemedText>
                <Ionicons name="chevron-forward" size={18} color={theme.textSecondary} />
              </View>
            ))}
          </View>

          <Pressable
            style={[styles.logoutButton, { borderColor: theme.border }]}
            onPress={() => router.replace('/onboarding')}>
            <ThemedText type="default" themeColor="textSecondary">
              Sair
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
    gap: Spacing.four,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLetter: {
    color: '#FFFFFF',
  },
  profileText: {
    flex: 1,
    gap: 2,
  },
  planBadge: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Radius.pill,
  },
  statsRow: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  statCard: {
    flex: 1,
    alignItems: 'flex-start',
  },
  settingsList: {
    gap: 4,
  },
  settingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingVertical: Spacing.three,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  settingsLabel: {
    flex: 1,
  },
  logoutButton: {
    borderWidth: 1,
    borderRadius: Radius.pill,
    paddingVertical: Spacing.three,
    alignItems: 'center',
  },
});
