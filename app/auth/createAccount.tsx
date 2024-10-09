import { ThemedText } from "@/components/ThemedText"
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form"
import { View, StyleSheet, ImageBackground, SafeAreaView, TextInput, TouchableOpacity } from "react-native"

export default function CreateAccountScreen() {
    const { control, handleSubmit, formState: { errors:any } } = useForm();
    return(
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/images/authLarge.png")}
              style={{borderBottomLeftRadius:50}}
              >
                <SafeAreaView style={styles.safeAfrea}>
                    <ThemedText type="title" color="white" style={{paddingLeft:"7%"}}>
                        Create Account!
                    </ThemedText>
                    <ThemedText color="white" type="default"  style={{paddingLeft:"7%", paddingTop:"2%"}}>
                        Enter your details to create an account
                    </ThemedText>
                </SafeAreaView>
            </ImageBackground>

            {/* Login Form Section */}
            <View style={{padding:20, marginTop:40}}>
                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10}}>
                    Full Name *
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

                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:5, marginTop:10}}>
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
                

                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:5, marginTop:10}}>
                    Referral Code (Optional) *
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
               
               
                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10, marginTop:10}}>
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

            </View>

            <View style={{alignItems:"center", top:20}}>
                <TouchableOpacity style={{...styles.button}}>
                    <ThemedText type="subtitle" color="white" style={{padding:"4%"}}>Login</ThemedText>
                </TouchableOpacity>
                <ThemedText style={{top:10}}>
                   Already have an account ? <Link href={"/"} style={{color:"#1C70EB", fontWeight:700}}>Sign In </Link>
                </ThemedText>
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