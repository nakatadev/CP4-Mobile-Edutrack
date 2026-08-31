import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { usuarioMock } from '@/data/mock';
import { useTheme } from '@/hooks/use-theme';

export default function EditarPerfilScreen() {
  const theme = useTheme();
  const [nome, setNome] = useState(usuarioMock.nome);
  const [email, setEmail] = useState(usuarioMock.email);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Pressable onPress={() => router.back()} hitSlop={12}>
              <Ionicons name="arrow-back" size={22} color={theme.text} />
            </Pressable>
            <ThemedText type="smallBold">Editar perfil</ThemedText>
            <View style={{ width: 22 }} />
          </View>

          <View style={styles.avatarWrap}>
            <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
              <ThemedText type="title" style={styles.avatarLetter}>
                {nome.charAt(0) || '?'}
              </ThemedText>
            </View>
            <Pressable>
              <ThemedText type="linkPrimary">Alterar foto</ThemedText>
            </Pressable>
          </View>

          <View style={styles.form}>
            <View style={styles.field}>
              <ThemedText type="smallBold">Nome</ThemedText>
              <TextInput
                value={nome}
                onChangeText={setNome}
                placeholderTextColor={theme.textSecondary}
                style={[
                  styles.input,
                  { backgroundColor: theme.backgroundElement, color: theme.text },
                ]}
              />
            </View>
            <View style={styles.field}>
              <ThemedText type="smallBold">E-mail</ThemedText>
              <TextInput
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholderTextColor={theme.textSecondary}
                style={[
                  styles.input,
                  { backgroundColor: theme.backgroundElement, color: theme.text },
                ]}
              />
            </View>
          </View>

          <Pressable
            style={[styles.primaryButton, { backgroundColor: theme.primary }]}
            onPress={() => router.back()}>
            <ThemedText type="default" style={styles.primaryButtonText}>
              Salvar alterações
            </ThemedText>
          </Pressable>
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
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    gap: Spacing.five,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarWrap: {
    alignItems: 'center',
    gap: Spacing.two,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLetter: {
    color: '#FFFFFF',
    fontSize: 36,
    lineHeight: 40,
  },
  form: {
    gap: Spacing.three,
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
