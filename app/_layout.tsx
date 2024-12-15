import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FIREBASE_AUTH } from '../FirebaseConfig';

import Login from "./screens/Login/Login";
import Main from "./screens/Main/Main";
import Details from "./screens/Details/Details";
import { useColorScheme } from '@/components/useColorScheme';
import { User, onAuthStateChanged } from 'firebase/auth';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'screens/Login',
};

const Stack = createNativeStackNavigator();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme(),
        [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        })
    }, [user])

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Text>USER: {user && user.email}</Text>
        <Stack.Navigator>
        {user ? (
            <>
              <Stack.Screen name="Main" component={Main} options={{ headerShown: true }} />
              <Stack.Screen name="Details" component={Details} options={{ headerShown: true }} />
            </>
        ) : (
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        )}
        </Stack.Navigator>
    </ThemeProvider>
  );
}


// <Stack>
//     <Stack.Screen name="screens/Login" options={{ headerShown: false }} />
//     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
// </Stack>
