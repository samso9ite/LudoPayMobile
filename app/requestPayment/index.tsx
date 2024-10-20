import { ThemedText } from "@/components/ThemedText";
import TitleBar from "@/components/topBar/titleBar";
import { globalStyle } from "@/utils/styles";
import { Button, Card, Icon } from "@rneui/themed";
import { Controller, useForm } from "react-hook-form";
import { Image, SafeAreaView, StyleSheet, TextInput, View } from "react-native";

export default function requestPayment(){
    const { control, handleSubmit, formState: { errors:any } } = useForm();

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <TitleBar title="Request Payment" />
                <View>
                    <Image source={require("../../assets/images/banner.png")} 
                        style={{marginTop:20, marginBottom:20, ...globalStyle.bannerStyle}}/>
                        <Card containerStyle={styles.cardStyle}>
                            <View style={{justifyContent:"flex-end",...globalStyle.row}}>
                                <Icon
                                    type="antdesign"
                                    name="questioncircle"
                                    color={"#FFDC8E"}
                                    style={{paddingRight:10}}
                                />
                                <ThemedText type="default">
                                    1 USDT ~ 1,446.64 NGN
                                </ThemedText>
                            </View>

                            <View style={{marginTop:10}}>
                                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10}}>
                                  Sender's Email Address 
                                </ThemedText>
                                <Controller
                                    control={control}
                                    render={({ field }) => (
                                    <TextInput
                                    {...field}
                                    style={globalStyle.input}
                                    placeholder="youremail@gmail.com"
                                    
                                />
                                )}
                                name="name"
                                rules={{ required: 'You must enter your name' }}
                                />

                                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10}}>
                                  Sender's Name
                                </ThemedText>
                                <Controller
                                    control={control}
                                    render={({ field }) => (
                                    <TextInput
                                    {...field}
                                    style={globalStyle.input}
                                    placeholder="youremail@gmail.com"
                                    
                                />
                                )}
                                name="name"
                                rules={{ required: 'You must enter your name' }}
                                />
                               
                                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10}}>
                                  Input Amount
                                </ThemedText>
                                <Controller
                                    control={control}
                                    render={({ field }) => (
                                    <TextInput
                                    {...field}
                                    style={globalStyle.input}
                                    placeholder="youremail@gmail.com"
                                    
                                />
                                )}
                                name="name"
                                rules={{ required: 'You must enter your name' }}
                                />
                                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10}}>
                                  Select Payment Chain
                                </ThemedText>
                                <Controller
                                    control={control}
                                    render={({ field }) => (
                                    <TextInput
                                    {...field}
                                    style={globalStyle.input}
                                    placeholder="youremail@gmail.com"
                                    
                                />
                                )}
                                name="name"
                                rules={{ required: 'You must enter your name' }}
                                />

                                <View style={{marginTop:20, ...globalStyle.row, justifyContent:"space-between"}}>
                                    <Button radius={"lg"} size="lg" type="solid"  
                                    buttonStyle={{backgroundColor:"#153E90", paddingLeft:40, paddingRight:40}}>
                                        <ThemedText color="white" type="default"> Cancel </ThemedText>
                                    </Button>
                                    <Button radius={"lg"} size="lg" type="outline"  
                                    buttonStyle={{backgroundColor:"transparent", paddingLeft:45, paddingRight:45, borderWidth:1, borderColor:"#153E90"}}>
                                    <ThemedText color="#153E90" type="default"> Get QR Code </ThemedText>
                                    </Button>
                                </View>
                            </View>
                        </Card>
                    
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    cardStyle:{
        margin:0,
        borderColor:"white",
        borderRadius:15
    }
})