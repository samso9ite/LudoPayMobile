import { ThemedText } from "@/components/ThemedText"
import TitleBar from "@/components/topBar/titleBar"
import { globalStyle } from "@/utils/styles"
import { Button } from "@rneui/themed"
import { SafeAreaView, StyleSheet } from "react-native"
import { View } from "react-native"

const ProfileDetail = () => {
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <TitleBar title="My Profile" />
                <View style={{alignItems:"center"}}>
                    <ThemedText type="subtitle" color="white" 
                        style={globalStyle.avatarContainer}>
                        SA
                    </ThemedText>
                    <ThemedText type="default" style={{fontSize:20, marginTop:10}}>
                        Hi, Samson Ajayi
                    </ThemedText>
                </View>
                <View>
                    <View style={{...styles.rowContainer, paddingTop:20}}>
                        <ThemedText type="default" style={{fontWeight:500}}> Full Name</ThemedText>
                        <ThemedText type="default">Samson Amos</ThemedText>
                    </View>
                    <View style={styles.rowContainer}>
                        <ThemedText type="default" style={{fontWeight:500}}> Postal Address</ThemedText>
                        <ThemedText>No 2 , Ibadan Road Lagos</ThemedText>
                    </View>
                    <View style={styles.rowContainer}>
                        <ThemedText type="default" style={{fontWeight:500}}> Date of Birth</ThemedText>
                        <ThemedText>June 2nd 1993</ThemedText>
                    </View>
                    <View style={styles.rowContainer}>
                        <ThemedText type="default" style={{fontWeight:500}}> Gender</ThemedText>
                        <ThemedText>Male</ThemedText>
                    </View>
                </View>
                <View style={{marginTop:40}}>
                    <ThemedText type="default" style={{color:"#BDBDBD"}}>Verified Information</ThemedText>
                    <View style={globalStyle.hairline}></View>
                    <View style={{...styles.rowContainer, paddingTop:20}}>
                        <ThemedText type="default" style={{fontWeight:500}}> Email Address</ThemedText>
                        <ThemedText type="default">samso9ite@gmail.com</ThemedText>
                    </View>
                    <View style={{...styles.rowContainer, paddingTop:20}}>
                        <ThemedText type="default" style={{fontWeight:500}}> Phone Number</ThemedText>
                        <ThemedText type="default">08112417082</ThemedText>
                    </View>
                    <View style={{...styles.rowContainer, paddingTop:20}}>
                        <ThemedText type="default" style={{fontWeight:500}}> BVN</ThemedText>
                        <ThemedText type="default">2216051*****</ThemedText>
                    </View>
                </View>
                <View style={{display:"flex", alignItems:"flex-end"}}>
                <Button radius={"lg"} size="sm" type="solid"  
                    buttonStyle={styles.btnStyle}>
                    <ThemedText color="white" type="default" style={{fontSize:17}}> Save Changes </ThemedText>
                </Button>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default ProfileDetail

const styles = StyleSheet.create({
    container: {
        padding:20
    },
    rowContainer: {
        display:"flex", 
        flexDirection:"row", 
        justifyContent:"space-between",
        marginTop:20
    },
    btnStyle: {
        backgroundColor:"#1C70EB", 
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:25,
        paddingRight:25,
        marginTop:40,
        // width:"7%",
       
    }
})