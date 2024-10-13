import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    BaseNuewRegular: require('../assets/fonts/basenuew/BaseNeueTrial-Regular.ttf'),
    BaseNuewSemiBold: require('../assets/fonts/basenuew/BaseNeueTrial-SemiBold.ttf'),
    BaseNuewBold: require('../assets/fonts/basenuew/BaseNeueTrial-Bold.ttf'),
    RubikRegular: ('../assets/fonts/rubik/Rubik-Light.ttf'),
    RubikSemiBold: ('../assets/fonts/rubik/Rubik-SemiBold.ttf'),
    RubikBold: ('../assets/fonts/rubik/Rubik-Bold.ttf'),
  })

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown:false}}/>
      {/* <Stack.Screen name="(tabs)" /> */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
