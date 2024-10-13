import { ThemedText } from "@/components/ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet } from "react-native";

export default function HomeScreen() {
    return(
        <View style={styles.container}>
        <Ionicons name="checkmark-circle" size={32} color="green" />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });