import { TextInput, View } from "react-native"
import { ThemedText } from "../ThemedText"
import { Input, Button } from "@rneui/themed"
import { Controller, useForm } from "react-hook-form"
import { globalStyle } from "@/utils/styles"

const ProfileDetails = () => {
    const { control, handleSubmit, formState: { errors:any } } = useForm();
    return(
        <>
            <View>
                <ThemedText type="subtitle" color="#0B2253"> Complete your Profile </ThemedText>
                <ThemedText type="default" style={{paddingLeft:6}}>Setup your profile here</ThemedText>
                <View style={{paddingTop:10, paddingLeft:6}}>
                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10}}>
                    Full Name 
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
                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10}}>
                    Phone Number 
                </ThemedText>
                    <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                        {...field}
                        style={globalStyle.input}
                        placeholder="234811249329"
                        />
                    )}
                    name="name"
                    rules={{ required: 'Please enter your mobile number' }}
                    />
                <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10}}>
                    Address 
                </ThemedText>
                    <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                        {...field}
                        style={globalStyle.input}
                        placeholder="25 olabosun street lawanson"
                        />
                    )}
                    name="name"
                    rules={{ required: 'You must enter your name' }}
                    />
                    <ThemedText type="default" color="#4D4D4D" style={{marginBottom:10}}>
                    Gender 
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
                     <Button radius={"lg"} size="lg" type="solid" buttonStyle={globalStyle.setUpBtn}>
                        <ThemedText color="#fff">Complete your profile</ThemedText>
                    </Button>
                </View>
            </View>
        </>
    )
}
export default ProfileDetails