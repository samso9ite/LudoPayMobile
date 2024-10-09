import { ThemedText } from "@/components/ThemedText"
import { Link, router, useRouter } from "expo-router"
import { ImageBackground, SafeAreaView, StyleSheet, View, TouchableOpacity, Image } from "react-native"

export default function SignupScreen() {
    const router = useRouter()
    return(
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/images/authMini.png")}>
                <SafeAreaView style={styles.safeAfrea}>
                    <ThemedText type="title" color="white" style={{paddingLeft:"7%", top:20}}>
                        Sign up to Ludopay
                    </ThemedText>
                </SafeAreaView>
            </ImageBackground>
            <View>
                <TouchableOpacity style={{...styles.button, backgroundColor:"#1E1D1D"}}>
                    <ThemedText type="default" color="white" style={{padding:"4%"}}>
                        <Image source={require("../../assets/images/gmail.png")} style={{top:20}} /> 
                        Sign up with Google
                    </ThemedText>
                </TouchableOpacity>
                <ThemedText style={{top:45, textAlign:"center"}}>Or</ThemedText>
                <TouchableOpacity style={{...styles.button, borderColor:"#000"}} onPress={() => router.push("/auth/createAccount")}>
                    <ThemedText type="default" color="#000" style={{padding:"4%", fontWeight:500}}>
                        Continue with Email
                    </ThemedText>
                </TouchableOpacity>
            </View>

            <View style={{alignItems:"center", marginTop:"15%"}}>
                <ThemedText type="default">Already have an account ? 
                    <Link href="/auth/login" style={{color:"#1A4DA7"}}> Sign In</Link>
                </ThemedText>
                <ThemedText type="default" style={{width:"90%", textAlign:"center", marginTop:25}}>
                    By clicking on "Create Account", you have agreed to our 
                    <Link href={"/"} style={{color:"#1A4DA7"}}> Terms & Conditions. </Link>
                </ThemedText>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    safeAfrea:{
        paddingTop:"13%",
        height:"22%",
        top:"55%",
        justifyContent:"flex-end"
    },
    button: {
        // backgroundColor: "#1C70EB",
        color:"white",
        width:"85%",
        alignItems:"center",
        marginHorizontal:"auto",
        borderRadius:5,
        marginTop:"20%",
        borderWidth:1
       }
})


