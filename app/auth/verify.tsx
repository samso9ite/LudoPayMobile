import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";

export default function VerifyAccountScreen() {
    return(
        <View style={styles.container}>
            <ThemedText type="title" color="#1E1D1D">
                Verify Your Account
            </ThemedText>
            <ThemedText type="default" color="#4D4D4D" style={{paddingTop:10}}>
                Please verify your account by entering the authorization code sent to your email
            </ThemedText>
            <ThemedText type="default" color="#4D4D4D" style={{fontWeight:"700", paddingTop:5, fontSize:19}}>
                Samso9i****
            </ThemedText>

            <View>
                <OtpInput
                    numberOfDigits={6}
                    focusColor="#1C70EB"
                    focusStickBlinkingDuration={500}
                    onTextChange={(text) => console.log(text)}
                    onFilled={(text) => console.log(`OTP is ${text}`)}
                    textInputProps={{
                        accessibilityLabel: "One-Time Password",
                    }}
                    theme={{
                        containerStyle: styles.otpContainer,
                    }}
                    />
            </View>
            <TouchableOpacity style={{...styles.button}}>
                <ThemedText type="subtitle" color="white" style={{padding:"4%"}}>Submit</ThemedText>
            </TouchableOpacity>
            <ThemedText type="default" color="#4D4D4D" style={{textAlign:"center", marginTop:30}}>
                It may take a while to receive your code.
                Haven’t received it? <Link href={"/auth/createAccount"} style={{color:"#1C70EB"}}> Resend a new code </Link>
            </ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent: 'center', 
        padding:15
    },
    otpContainer:{
        width:"90%",
        paddingTop:50
    },
    button: {
        backgroundColor: "#1C70EB",
        color:"white",
        width:"100%",
        marginTop:50,
        alignItems:"center",
        marginHorizontal:"auto",
        borderRadius:5
       }
})