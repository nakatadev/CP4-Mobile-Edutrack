import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="login" />
        <Stack.Screen name="cadastro" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="perfil" options={{ presentation: 'card' }} />
        <Stack.Screen name="editar-perfil" options={{ presentation: 'card' }} />
        <Stack.Screen name="notificacoes" options={{ presentation: 'card' }} />
        <Stack.Screen name="estatisticas" options={{ presentation: 'card' }} />
        <Stack.Screen name="meta-detalhe" options={{ presentation: 'card' }} />
        <Stack.Screen name="nova-meta" options={{ presentation: 'modal' }} />
        <Stack.Screen name="nova-sessao" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
