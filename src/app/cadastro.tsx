import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Logo } from '@/components/logo';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function CadastroScreen() {
  const theme = useTheme();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Pressable onPress={() => router.back()} style={styles.backButton} hitSlop={12}>
            <Ionicons name="arrow-back" size={22} color={theme.text} />
          </Pressable>

          <Logo size="small" />

          <View style={styles.headingBlock}>
            <ThemedText type="subtitle">Criar conta</ThemedText>
            <ThemedText themeColor="textSecondary">
              Comece a organizar seus estudos em minutos.
            </ThemedText>
          </View>

          <View style={styles.form}>
            <View style={styles.field}>
              <ThemedText type="smallBold">Nome</ThemedText>
              <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder="Seu nome"
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
                placeholder="voce@exemplo.com"
                placeholderTextColor={theme.textSecondary}
                autoCapitalize="none"
                keyboardType="email-address"
                style={[
                  styles.input,
                  { backgroundColor: theme.backgroundElement, color: theme.text },
                ]}
              />
            </View>
            <View style={styles.field}>
              <ThemedText type="smallBold">Senha</ThemedText>
              <TextInput
                value={senha}
                onChangeText={setSenha}
                placeholder="••••••••"
                placeholderTextColor={theme.textSecondary}
                secureTextEntry
                style={[
                  styles.input,
                  { backgroundColor: theme.backgroundElement, color: theme.text },
                ]}
              />
            </View>
          </View>

          <Pressable
            style={[styles.primaryButton, { backgroundColor: theme.primary }]}
            onPress={() => router.replace('/home')}>
            <ThemedText type="default" style={styles.primaryButtonText}>
              Criar conta
            </ThemedText>
          </Pressable>

          <ThemedText type="small" themeColor="textSecondary" style={styles.center}>
            Já tem conta? <ThemedText type="linkPrimary">Entrar</ThemedText>
          </ThemedText>
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
    gap: Spacing.four,
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  headingBlock: {
    gap: Spacing.one,
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
  center: {
    textAlign: 'center',
  },
});
