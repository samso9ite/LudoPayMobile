import { ThemedText } from "@/components/ThemedText";
import TitleBar from "@/components/topBar/titleBar";
import { globalStyle } from "@/utils/styles";
import { Button, Card, Icon } from "@rneui/themed";
import { SafeAreaView, StyleSheet, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function PaymentSummary(){
    let logo = require("../../assets/images/btcQr.png")
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <TitleBar title="Payment Summary"/>
                <ThemedText type="default" color="4D4D4D" style={{marginTop:15}}>
                    Make payment via the QR code generated here, or simply 
                    copy the wallet address to get paid
                </ThemedText>

                <View style={{marginTop:20}}>
                    <Card containerStyle={styles.cardStyle}>
                       <View style={{alignItems:"center", marginBottom:20, marginTop:20}}> 
                            <QRCode
                                logo={logo}
                                value="372980ryujjkj9398ik"
                                size={130}
                            />
                        </View>
                        <ThemedText type="default" style={{fontWeight:500}}>Wallet Address:</ThemedText>
                        <ThemedText type="default" color="#4D4D4D"> 0Xeb432268dHgs880djnudbg7sbt88ytab</ThemedText>
                        <View style={{marginTop:15,...globalStyle.row}}>
                            <ThemedText type="default" color="#4D4D4D">Email Address:</ThemedText>
                            <ThemedText type="default" style={{paddingLeft:10}}>samso9ite@gmail.com</ThemedText>
                        </View>
                        <View style={{marginTop:15,...globalStyle.row}}>
                            <ThemedText type="default" color="#4D4D4D">Sender's Name :</ThemedText>
                            <ThemedText type="default" style={{paddingLeft:10}}>samso9ite@gmail.com</ThemedText>
                        </View>
                        <View style={{marginTop:15,...globalStyle.row}}>
                            <ThemedText type="default" color="#4D4D4D">Amount to Receive (NGN):</ThemedText>
                            <ThemedText type="default" style={{paddingLeft:10}}>#200,0000</ThemedText>
                        </View>
                        <View style={{marginTop:15,...globalStyle.row}}>
                            <ThemedText type="default" color="#4D4D4D">Payment Chain:</ThemedText>
                            <ThemedText type="default" style={{paddingLeft:10}}>#200,0000</ThemedText>
                        </View>
                        <View style={{marginTop:15,...globalStyle.row}}>
                            <ThemedText type="default" color="#4D4D4D">Amount to Receive (BTC):</ThemedText>
                            <ThemedText type="default" style={{paddingLeft:10}}>0.012387.93</ThemedText>
                        </View>
                        <ThemedText type="default" color="#4D4D4D" style={{marginTop:20, fontSize:14, marginBottom:20}}>
                            Send only BTC to this address. Ensure the network is Binance Smart Chain (TRC20)
                        </ThemedText>
                    </Card>

                    <Card containerStyle={{...styles.cardStyle, backgroundColor:"#EDEDED", marginTop:20, padding:7}}>
                        <ThemedText type="default" style={{fontSize:15, textAlign:"center"}}>
                            After payment is confirmed we will send you a confirmation updates about your transaction
                        </ThemedText>
                    </Card>
                    <Button radius={"lg"} size="lg" 
                        buttonStyle={{backgroundColor:"transparent", 
                        borderWidth:1, borderColor:"#153E90", marginTop:20}}>
                            <Icon
                                name="home"
                                type="antdesign"
                                color={"#153E90"}
                            />
                    <ThemedText color="#153E90" type="default"> Get Home </ThemedText>
                    </Button>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    cardStyle:{
        backgroundColor: "#F5FAFE",
        borderRadius:12,
        margin:0,
        borderColor:"transparent"
    }
})