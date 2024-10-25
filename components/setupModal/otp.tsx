import { View } from "react-native"
import { ThemedText } from "../ThemedText"
import { OtpInput } from "react-native-otp-entry"
import { Button } from "@rneui/themed"
import { globalStyle } from "@/utils/styles"

const Otp = () => {
    return(
        <>
        <View>
            <ThemedText type="subtitle" color="#0B2253" style={{justifyContent:"center", textAlign:"center"}}>Set Transaction Pin</ThemedText>
            <ThemedText type="default" style={{textAlign:"center", marginTop:5, marginBottom:30}}> Protect your account, stay secured, input your payment pin here </ThemedText>
            <ThemedText style={{textAlign:"center", fontSize:18, marginBottom:20}}>Create your pin</ThemedText>
            <OtpInput numberOfDigits={4}/>
            <ThemedText style={{textAlign:"center", fontSize:18,marginTop:20, marginBottom:20}}>Confirm Pin</ThemedText>
            <OtpInput numberOfDigits={4}/>
            <Button radius={"lg"} size="lg" type="solid"
             buttonStyle={globalStyle.setUpBtn}>
                <ThemedText color="#fff">Set Pin</ThemedText>
            </Button>
        </View>
        </>
    )
}

export default Otp