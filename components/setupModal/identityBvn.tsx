import { TextInput, View } from "react-native"
import { ThemedText } from "../ThemedText"
import { Controller, useForm } from "react-hook-form"
import { globalStyle } from "@/utils/styles";
import { Input, Button, Icon } from "@rneui/themed"

const IdentityBvn = () => {
    const { control, handleSubmit, formState: { errors:any } } = useForm();
    return(
        <>
        <View>
                <ThemedText type="subtitle" color="#0B2253" style={{width:"80%", lineHeight:35}}> Verify your identity with your BVN</ThemedText>
                <View style={{paddingTop:10, paddingLeft:6}}>
                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10}}>
                    Bank Verification Number(BVN)
                </ThemedText>
                    <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                        {...field}
                        style={globalStyle.input}
                        placeholder="your full name"
                        />
                    )}
                    name="name"
                    rules={{ required: 'You must enter your name' }}
                    />
                    <View style={{...globalStyle.row, alignItems:"center"}}>
                        <Icon
                            name="infocirlce"
                            type="antdesign"
                            size={15}
                            color={"#BDBDBD"}
                        />
                        <ThemedText type="default" color="#1C70EB"> Why do we need your BVN</ThemedText>
                    </View>
                    
                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10, marginTop:20}}>
                    Date of Birth 
                </ThemedText>
                    <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                        {...field}
                        style={globalStyle.input}
                        placeholder="20-10-2024"
                        />
                    )}
                    name="name"
                    rules={{ required: 'Please enter your mobile number' }}
                    />
                     <ThemedText type="default" color="#1C70EB"> Having issues adding your BVN?</ThemedText>
               
                     <Button radius={"lg"} size="lg" type="solid" buttonStyle={{backgroundColor:"#1C70EB", marginTop:30}}>
                        <ThemedText color="#fff">Proceed</ThemedText>
                    </Button>
                </View>
            </View>
        </>
    )
}

export default IdentityBvn