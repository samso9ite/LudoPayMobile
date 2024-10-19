import GraphComp from "@/components/Graph";
import { ThemedText } from "@/components/ThemedText";
import TitleBar from "@/components/topBar/titleBar";
import { globalStyle } from "@/utils/styles";
import { Card, Icon } from "@rneui/themed";
import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

const TransactionSummary = [
    {
        title: "Total Received",
        amount: "#50,000",
        icon: require("../../../assets/images/receivedIcon.png")
    },
    {
        title: "Total Sent",
        amount: "#50,000",
        icon: require("../../../assets/images/sentIcon.png")
    },
    {
        title: "No of Transactions",
        amount: "#50,000",
        icon: require("../../../assets/images/transactionsIcon.png")
    }
]

const TransactionCount = [
    {
        count: 12,
        title: "Receipt Completed",
        bgColor: "#F5FAFE",
        iconColor:"#038E83"
    },
  
    {
        count: 12,
        title: "No of Clients",
        bgColor:"#F6F6F6",
        iconColor:"#FF82AC"
    },
    {
        count: 13,
        title: "Uncompleted Transaction",
        bgColor:"#F5FAFE",
        iconColor:"#BDBDBD"
    },
    {
        count: 42,
        title: "Payment Completed",
        bgColor: "#FFF6F9",
        iconColor:"#038E83"
    },
]

export default function Wallet() {
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <TitleBar title="Wallet"/>
                <ScrollView
                 showsVerticalScrollIndicator={false} 
                 showsHorizontalScrollIndicator={false}
                >
                <View style={{marginTop:20, marginBottom:15}}>
                    <View style={{justifyContent:"space-between" ,...globalStyle.row}}>
                        <ThemedText type="default" color="#4D4D4D" style={{fontSize:18}}>Available Balance  
                            <Icon
                                name='eyeo'
                                type='antdesign'
                                color='#4D4D4D'
                                style={{paddingTop:5, paddingLeft:20}}
                            />
                        </ThemedText>
                        <ThemedText type="default" color="#4D4D4D" style={{paddingRight:20}}>
                            NGN
                        </ThemedText>
                    </View>
                    <View style={{marginTop:20}}>
                        <ThemedText type="titleRubik" color="#1C70EB" style={{fontSize:25}}>
                            #45,000.00
                        </ThemedText>
                     </View>
                    <ThemedText type="default" color="#BDBDBD" style={{width:"80%", paddingTop:10}}>
                        You can withdraw this amount directly to any bank account of your choice
                    </ThemedText>
                </View>

                <GraphComp title="Balance History" />
                <View style={{display:"flex", ...globalStyle.row}}>
                { 
                    TransactionSummary.map((item) => (
                        <Card containerStyle={{width:"47%", 
                            marginTop:6,
                            marginBottom:6,
                            marginLeft:0,
                            marginRight:11.1, 
                            borderRadius:10,
                            borderColor:"transparent"}}>
                            <View>
                                <ThemedText color="#4D4D4D" type="subtitleRubik" 
                                    style={{fontWeight:400, fontSize:17}}>{item.title}</ThemedText> 
                                <Icon 
                                    reverseColor= "white"
                                    color={item.title == "Total Received" ?  "#038E83" : item.title == "Total Sent" ? "#FF82AC" : "#1C70EB"}
                                    name={item.title == "Total Received" ?  "export2" : item.title == "Total Sent" ? "export" : "CodeSandbox"}
                                    type='antdesign'
                                    reverse
                                    style={{width:10}}
                                    iconStyle={{ fontSize: 20 }}
                                    size={15}
                                />
                                <ThemedText type="subtitleRubik" color="#4D4D4D" style={{marginTop:20}}>{item.amount}</ThemedText>
                                <ThemedText type="default" color="#4D4D4D" style={{marginTop:10}}> Up from past week</ThemedText>
                            </View>
                        </Card>
                    ))
                }
                </View>

                <View style={{marginBottom:40 ,...globalStyle.row}}>
                   { TransactionCount.map((item) => (
                        <Card
                            containerStyle={{width:"47%", 
                            marginTop:6,
                            marginBottom:6,
                            marginLeft:0,
                            marginRight:11.1, 
                            backgroundColor:item.bgColor,
                            borderRadius:10,
                            borderColor:"transparent"}}>
                                <Icon 
                                    reverseColor= "white"
                                    color={item.iconColor}
                                    name="list"
                                    type='fontawesome'
                                    reverse
                                    style={{width:10}}
                                    iconStyle={{ fontSize: 20 }}
                                    size={15}
                                />
                                <View style={{paddingLeft:10}}>
                                    <ThemedText type="subtitleRubik" >{item.count}</ThemedText>
                                    <ThemedText type="default" style={{width:99}}>{item.title}</ThemedText>
                                </View>
                        </Card>
                   ))
                       
                    }
                </View>
                </ScrollView>
            </SafeAreaView>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    }
})