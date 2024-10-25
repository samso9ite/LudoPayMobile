import { Button, Icon } from "@rneui/themed"
import { View } from "react-native"
import { ThemedText } from "../ThemedText"
import { globalStyle } from "@/utils/styles"

const SetupCompleted = () => {
    return(
        <View>
            <Icon
                name="check-decagram"          
                type="material-community"      
                size={60}                       
                color="#41D4A8"               
            />
            <ThemedText type="subtitle" style={{textAlign:"center", fontSize:24, marginTop:20}}>Profile all set</ThemedText>
            <ThemedText type="default" style={{textAlign:"center", marginTop:20}}>Your profile is all set and you’re ready to enjoy our Ludopay features</ThemedText>
            <Button radius={"lg"} size="lg" type="solid"
                buttonStyle={globalStyle.setUpBtn}>
                <ThemedText color="#fff">Go Home</ThemedText>
            </Button>
        </View>
    )
}

export default SetupCompleted