import "../global.css";
import { Stack } from 'expo-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import Head from 'expo-router/head';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        </Head>
      )}
      <QueryClientProvider client={queryClient}>
        {Platform.OS !== 'web' && <StatusBar style="auto" />}
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </QueryClientProvider>
    </>
  );
}

