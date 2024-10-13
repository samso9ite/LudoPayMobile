import { ThemedText } from "@/components/ThemedText"
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form"
import { View, StyleSheet, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from "react-native"

export default function LoginScreen() {
    const { control, handleSubmit, formState: { errors:any } } = useForm();
    return(
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/images/authLarge.png")}
              style={{borderBottomLeftRadius:50}}
              >
                <SafeAreaView style={styles.safeAfrea}>
                    <ThemedText type="title" color="white" style={{paddingLeft:"7%"}}>
                        Welcome Back!
                    </ThemedText>
                    <ThemedText color="white" type="default"  style={{paddingLeft:"7%", paddingTop:"2%"}}>
                        Sign in to your LudoPay Account
                    </ThemedText>
                </SafeAreaView>
            </ImageBackground>

            {/* Login Form Section */}
            <View style={{padding:20, marginTop:40}}>
                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10}}>
                    Email Address *
                </ThemedText>
                <Controller
                control={control}
                render={({ field }) => (
                    <TextInput
                    {...field}
                    style={styles.input}
                    placeholder="youremail@gmail.com"
                    />
                )}
                name="name"
                rules={{ required: 'You must enter your name' }}
                />
                {/* {errors.name && <ThemedText style={styles.errorText}>{errors?.name.message}</ThemedText>} */}

                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10, marginTop:30}}>
                    Password *
                </ThemedText>
                <Controller
                control={control}
                render={({ field }) => (
                    <TextInput
                    {...field}
                    style={styles.input}
                    placeholder="youremail@gmail.com"
                    />
                )}
                name="name"
                rules={{ required: 'You must enter your name' }}
                />
                {/* {errors.name && <ThemedText style={styles.errorText}>{errors?.name.message}</ThemedText>} */}
                
                <ThemedText type="default" color="#1C70EB" style={{marginTop:20}}>
                  <Link href={"/"}>  Forgot Password ? </Link>
                </ThemedText>
            </View>

            <View style={{alignItems:"center", top:120}}>
                <ThemedText style={{marginBottom:30}}>
                    New to LudoPay ? <Link href={"/(tabs)/"} style={{color:"#1C70EB", fontWeight:700}}>Create an account </Link>
                </ThemedText>
                {/* <Link href={"/(tabs)"}>  */}
                    <TouchableOpacity style={{...styles.button}}>
                        <ThemedText type="subtitle" color="white" style={{padding:"4%"}}>Login</ThemedText>
                    </TouchableOpacity>
                {/* </Link> */}
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeAfrea:{
        paddingTop:"13%",
        height:"30%",
        top:"55%",
      },
      input: {
        height: 50,
        borderColor: '#BDBDBD',
        borderWidth: 1,
        borderRadius:6,
        marginBottom: 10,
        padding: 8,
        alignItems:"center",
        width:"100%"
      },
      errorText: {
        color: 'red',
        marginBottom: 10,
      },
      button: {
        backgroundColor: "#1C70EB",
        color:"white",
        width:"85%",
        alignItems:"center",
        marginHorizontal:"auto",
        borderRadius:5
       }
})