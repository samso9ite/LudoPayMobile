import { ThemedText } from "@/components/ThemedText";
import TitleBar from "@/components/topBar/titleBar";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function SettingScreen() {
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <TitleBar title="Settings"/>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    }
})