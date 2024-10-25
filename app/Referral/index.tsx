import { ThemedText } from "@/components/ThemedText"
import TitleBar from "@/components/topBar/titleBar"
import { globalStyle } from "@/utils/styles"
import { Card, Icon } from "@rneui/themed"
import { Image, SafeAreaView, StyleSheet, View } from "react-native"

export default function Referral(){
    return(
       <View style={styles.container}>
            <SafeAreaView>
                <TitleBar  title="Referral" />
                <ThemedText type="default"color="#4D4D4D" style={{marginTop:15, marginBottom:20}}>
                    Welcome to your Referrals Page!
                </ThemedText>
                <Card containerStyle={{padding:25,...styles.card}}>
                    <View style={globalStyle.rowContainer}>
                        <ThemedText type="default" color="#4D4D4D" style={{fontSize:16}}>
                            Total Referral Bonus
                        </ThemedText>
                        <ThemedText type="subtitleRubik" color="#1C70EB">#500,000.00</ThemedText>
                    </View>
                </Card>
                <Card containerStyle={{...styles.card, marginTop:15}}>
                    <Icon
                        name="gift"
                        type="antdesign"
                        color="#1C70EB"
                        size={90}
                    />
                    <ThemedText color="#153E90" type="default" style={styles.commisionTitle}>
                        Get Referral Commissions
                    </ThemedText>
                    <ThemedText type="default" style={{marginTop:15, textAlign:"center"}}>
                        Do you love our products/services?  Share the love and earn rewards! 
                        Invite your friends, family, and colleagues to join our community, 
                        and both you and your referrals will receive exclusive bonus of up 
                        to #10,000
                    </ThemedText>
                    <ThemedText type="default" style={{...styles.commisionTitle, fontSize:17}} color="#1C70EB">
                        Read terms and conditions
                    </ThemedText>
                </Card>
                <View style={{marginTop:15}}>
                    <ThemedText type="default" color="#1C70EB">Share</ThemedText>
                    <Card containerStyle={{marginTop:10,...styles.card}}>
                        <View style={globalStyle.rowContainer}>
                            <View style={globalStyle.rowContainer}>
                                <ThemedText type="default" color="#BDBDBD">Code</ThemedText>
                                <ThemedText style={{paddingLeft:20}}>MICHAEL112</ThemedText>
                                </View>
                                <Icon
                                    name="copy"
                                    type="feather"
                                    color={"#4D4D4D"}
                                    size={30}
                                />
                        </View>
                    </Card>
                    <Card containerStyle={{marginTop:10,...styles.card}}>
                        <View style={globalStyle.rowContainer}>
                                <ThemedText type="default" color="#BDBDBD">Link</ThemedText>
                                <ThemedText>https://ludopay.com/micheal112</ThemedText>
                                <Icon
                                    name="copy"
                                    type="feather"
                                    color={"#4D4D4D"}
                                    size={30}
                                />
                        </View>
                    </Card>
                    <View style={{marginTop:30, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                        <Icon
                            name="facebook-with-circle"
                            type="entypo"
                            size={35}
                        />
                        <Image source={require("../../assets/images/twitter.png")} style={{marginLeft:20}}  />
                        
                    </View>
                    <ThemedText type="default" color="#1C70EB" style={{textAlign:"center", marginTop:20, fontWeight:500}}>View Referral History</ThemedText>
                </View>
            </SafeAreaView>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:"#f5fafe"
    },
    card: {
        margin:0,
        borderRadius:10,
        borderColor:"transparent",
    },
    commisionTitle:{
        fontSize:20, 
        fontWeight:600, 
        textAlign:"center",
        marginTop:13
    },
})