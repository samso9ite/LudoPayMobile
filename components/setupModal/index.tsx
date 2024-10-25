import { Card, Button } from "@rneui/themed"
import { ThemedText } from "../ThemedText"
import { StyleSheet, View } from "react-native"
import * as Progress from 'react-native-progress';
import { globalStyle } from "@/utils/styles";

const ProgressBar = () => {
  return(
    <>
        <Card containerStyle={{...styles.cardContainer}}>
            <View style={{...globalStyle.rowContainer}}>
                <Progress.Circle size={90} progress={0.7} color="white" showsText/>
                <View style={{ flexShrink: 1, paddingLeft:7 }}>
                    <ThemedText type="subtitleRubik" color="white">Profile Information</ThemedText>
                    <ThemedText color="white" type="default">Setup your profile data to continue</ThemedText>
                    <Button radius={"lg"} size="sm" type="solid" buttonStyle={{backgroundColor:"white", marginTop:3}}>
                        <ThemedText color="#1F64FF">Complete your profile</ThemedText>
                    </Button>
                </View>
                
            </View>
        </Card>
    </>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:"#1F64FF",
        color:"white",
        borderRadius:10
    }
})