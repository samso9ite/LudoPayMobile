import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

export default function AuthLayout() {
    return(
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" options={{headerShown:false}}/>
            <Stack.Screen name="signUp" options={{headerShown:false}} />
            <Stack.Screen name="createAccount" options={{headerShown:false}} />
        </Stack>
    )
}