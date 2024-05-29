import CategoryContextProvider from '@/providers/CategoryContext';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function RootLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CategoryContextProvider>
        <QueryClientProvider client={queryClient}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </Stack>
        </QueryClientProvider>
      </CategoryContextProvider>
    </GestureHandlerRootView>

  );
}
