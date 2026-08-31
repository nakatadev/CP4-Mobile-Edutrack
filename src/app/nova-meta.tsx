import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function NovaMetaScreen() {
  const theme = useTheme();
  const [titulo, setTitulo] = useState('');
  const [horas, setHoras] = useState('10');
  const [descricao, setDescricao] = useState('');

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
            <ThemedText type="smallBold">Nova meta</ThemedText>
            <View style={{ width: 22 }} />
          </View>

          <View style={styles.field}>
            <ThemedText type="smallBold">Título</ThemedText>
            <TextInput
              value={titulo}
              onChangeText={setTitulo}
              placeholder="Ex: Revisar Matemática — ENEM"
              placeholderTextColor={theme.textSecondary}
              style={[
                styles.input,
                { backgroundColor: theme.backgroundElement, color: theme.text },
              ]}
            />
          </View>

          <View style={styles.field}>
            <ThemedText type="smallBold">Meta de horas</ThemedText>
            <TextInput
              value={horas}
              onChangeText={setHoras}
              keyboardType="numeric"
              placeholderTextColor={theme.textSecondary}
              style={[
                styles.input,
                { backgroundColor: theme.backgroundElement, color: theme.text },
              ]}
            />
          </View>

          <View style={styles.field}>
            <ThemedText type="smallBold">Descrição</ThemedText>
            <TextInput
              value={descricao}
              onChangeText={setDescricao}
              placeholder="O que você quer alcançar com essa meta?"
              placeholderTextColor={theme.textSecondary}
              multiline
              numberOfLines={4}
              style={[
                styles.input,
                styles.textArea,
                { backgroundColor: theme.backgroundElement, color: theme.text },
              ]}
            />
          </View>

          <Pressable style={[styles.primaryButton, { backgroundColor: theme.primary }]}>
            <ThemedText type="default" style={styles.primaryButtonText}>
              Criar meta
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
  input: {
    borderRadius: Radius.medium,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three,
    fontSize: 16,
  },
  textArea: {
    minHeight: 96,
    textAlignVertical: 'top',
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
