import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { materiasMock } from '@/data/mock';
import { useTheme } from '@/hooks/use-theme';

const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

export default function NovaSessaoScreen() {
  const theme = useTheme();
  const [materia, setMateria] = useState(materiasMock[0]);
  const [dia, setDia] = useState(dias[0]);
  const [horario, setHorario] = useState('19:00');

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
            <ThemedText type="smallBold">Nova sessão</ThemedText>
            <View style={{ width: 22 }} />
          </View>

          <View style={styles.field}>
            <ThemedText type="smallBold">Matéria</ThemedText>
            <View style={styles.chipRow}>
              {materiasMock.map((item) => {
                const selected = item === materia;
                return (
                  <Pressable
                    key={item}
                    onPress={() => setMateria(item)}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: selected ? theme.primary : theme.backgroundElement,
                      },
                    ]}>
                    <ThemedText
                      type="small"
                      style={selected ? styles.chipTextSelected : undefined}
                      themeColor={selected ? undefined : 'textSecondary'}>
                      {item}
                    </ThemedText>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View style={styles.field}>
            <ThemedText type="smallBold">Dia da semana</ThemedText>
            <View style={styles.chipRow}>
              {dias.map((item) => {
                const selected = item === dia;
                return (
                  <Pressable
                    key={item}
                    onPress={() => setDia(item)}
                    style={[
                      styles.chip,
                      {
                        backgroundColor: selected ? theme.primary : theme.backgroundElement,
                      },
                    ]}>
                    <ThemedText
                      type="small"
                      style={selected ? styles.chipTextSelected : undefined}
                      themeColor={selected ? undefined : 'textSecondary'}>
                      {item}
                    </ThemedText>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View style={styles.field}>
            <ThemedText type="smallBold">Horário</ThemedText>
            <TextInput
              value={horario}
              onChangeText={setHorario}
              placeholder="19:00"
              placeholderTextColor={theme.textSecondary}
              style={[
                styles.input,
                { backgroundColor: theme.backgroundElement, color: theme.text },
              ]}
            />
          </View>

          <Pressable style={[styles.primaryButton, { backgroundColor: theme.primary }]}>
            <ThemedText type="default" style={styles.primaryButtonText}>
              Salvar sessão
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
  field: {
    gap: Spacing.two,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  chip: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Radius.pill,
  },
  chipTextSelected: {
    color: '#FFFFFF',
  },
  input: {
    borderRadius: Radius.medium,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    fontSize: 16,
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
});
