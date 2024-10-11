import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import VerifiedSVG from "@/constants/svgs"
// import verifiedSvgImg from "../../assets/images/verified.svg"
import Svg, { Path } from "react-native-svg"
import { ThemedText } from "@/components/ThemedText"

export default function VerifiedScreen() {
    return(
        <>
            <View style={styles.container}>
                <Image source={require("../../assets/images/verified.png")} />
                <ThemedText type="title" color="#1E1D1D" style={{marginTop:30}}>
                    Account Verified!
                </ThemedText>
                <ThemedText type="default" color="#4D4D4D" style={{paddingTop:10, width:"70%", textAlign:"center"}}>
                    Congrats! You have successfully verified your account
                </ThemedText>
                <TouchableOpacity style={{...styles.button}}>
                    <ThemedText type="subtitle" color="white" style={{padding:"4%"}}>Submit</ThemedText>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    button: {
        backgroundColor: "#1C70EB",
        color:"white",
        width:"85%",
        marginTop:50,
        alignItems:"center",
        marginHorizontal:"auto",
        borderRadius:5
       }
})