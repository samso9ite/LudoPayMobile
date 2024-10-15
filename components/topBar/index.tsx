import { Image, StyleSheet, View } from "react-native"
import { ThemedText } from "../ThemedText"
import { globalStyle } from "@/utils/styles"
import {Button, Card, Icon} from'@rneui/themed'

export default function TopBar() {
    return(
        <View>
            <View style={[globalStyle.row, { justifyContent: 'space-between', alignItems: 'center' }]}>
                <View style={{borderRadius:100, ...globalStyle.row}}>
                <ThemedText type="subtitle" color="white" style={styles.avatarContainer}>
                        SA
                </ThemedText>
                <ThemedText type="default" style={{alignItems:"center", paddingTop:10}}> Hi, Samson </ThemedText>
                </View>
                <View style={{...globalStyle.row}}>
                    <Image source={require("../../assets/images/support.png")} style={{marginRight:20}}/> 
                    <Image source={require("../../assets/images/notif.png")} /> 
                </View>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    avatarContainer: {
        width: 50,          
        height: 50,        
        borderRadius: 25,
        backgroundColor: '#153E90',
        borderWidth: 2,     
        borderColor: '#1C70EB ',    
        paddingTop:10,
        overflow: 'hidden',  
        textAlign: 'center',
    },

})


