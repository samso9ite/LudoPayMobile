import { ThemedText } from "@/components/ThemedText";
import TitleBar from "@/components/topBar/titleBar";
import { globalStyle } from "@/utils/styles";
import { SearchBar } from "@rneui/themed";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";

const transactions = [
    {
        image: require("../../../assets/images/bitCoin.png"),
        desc: "BTC from Sandra",
        type:"receive",
        amount: "#45,000",
        status: "Successful"
    },
    {
        image: require("../../../assets/images/bitCoin.png"),
        desc: "BTC to Semilore ",
        type:"send",
        amount: "#45,000",
        status: "Pending"
    },
    {
        image: require("../../../assets/images/bitCoin.png"),
        desc: "BTC from Sandra",
        type:"receive",
        amount: "#45,000",
        status: "Successful"
    }
]

export default function Transactions(){
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <TitleBar title="Transaction History"/>
                <SearchBar
                    lightTheme={true}
                    placeholder="Search transaction by name..."
                    inputStyle={{backgroundColor:"white"}}
                    // leftIconContainerStyle={{backgroundColor:"white"}}
                    containerStyle={{
                        backgroundColor:"transparent",
                        borderBlockColor:"transparent"
                    }}
                    // onChangeText={updateSearch}
                    // value={search}
                />

                {transactions.map((item) => (
                    <View style={{justifyContent:"space-between", alignItems:"center",
                        ...globalStyle.row, marginLeft:-17, ...globalStyle.hairline}}>
                        <Image source={item.image} /> 
                        <ThemedText type="subtitleRubik" 
                            style={{fontWeight:400, textAlign:"left"}}>{item.desc}</ThemedText>
                        <View>
                            <ThemedText> {item.type == "receive" ? "+" : "-" } {item.amount}</ThemedText>
                            <ThemedText type="default" color="green">{item.status}</ThemedText>
                        </View>
                    </View>    
                ))
                    
                }
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 30
    }
})