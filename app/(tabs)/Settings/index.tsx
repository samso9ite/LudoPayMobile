import { ThemedText } from "@/components/ThemedText";
import TitleBar from "@/components/topBar/titleBar";
import { IonIcon } from "@/utils/Icons";
import { globalStyle } from "@/utils/styles";
import { Button, Card, Icon } from "@rneui/themed";
import { SafeAreaView, StyleSheet, View } from "react-native";

const settingsConstant = [
    {
        icon:"settings",
        title: "Settings",
        link:"",
        iconType:"Ionicons"
    },
    {
        icon:"bell",
        title: "Notifications",
        link:"",
        iconType:"feather"
    },
    {
        icon:"person",
        title: "Referrals",
        link:"",
        iconType:"Ionicons"
    },
    {
        icon:"support-agent",
        title: "Support",
        link:"",
        iconType:"materialicons"
    }
]

const othersLinkConstant = [
    {
        icon:"shield",
        title: "Privacy Policy",
        link:"",
        iconType:"feather"
    },
    {
        icon:"infocirlceo",
        title: "About",
        link:"",
        iconType:"antdesign"
    },
]

export default function SettingScreen() {
    return(
        <View style={styles.container}>
            <SafeAreaView>
                <TitleBar title="Profile"/>
                <View style={{alignItems:"center"}}>
                    <ThemedText type="subtitle" color="white" 
                        style={styles.avatarContainer}>
                        SA
                    </ThemedText>
                    <ThemedText type="default" style={{fontSize:20, marginTop:10}}>
                        Hi, Samson Ajayi
                    </ThemedText>
                    <Button radius={"lg"} size="lg" type="solid"  
                        buttonStyle={styles.btnStyle}>
                        <ThemedText color="white" type="default" style={{fontWeight:600}}> 
                            Edit Profile 
                        </ThemedText>
                    </Button>
                </View>
                <Card containerStyle={styles.cardStyle}>
                    {settingsConstant.map((item) => (
                        <View style={[globalStyle.row, { justifyContent: 'space-between', alignItems: 'center', marginBottom:25 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon
                                    name={item.icon}
                                    color='#1C70EB'
                                    size={30}
                                    style={{ padding: 3 }}
                                    type={item.iconType}
                                />
                                <ThemedText type="default" style={styles.linkTxt}>
                                    {item.title}
                                </ThemedText>
                            </View>
                            <Icon
                                name='right'
                                color='#4D4D4D'
                                type="antdesign"
                            />
                        </View>
                    )) 
                   }
                </Card>
                <Card containerStyle={styles.cardStyle}>
                    {othersLinkConstant.map((item) => (
                        <View style={[globalStyle.row, { justifyContent: 'space-between', alignItems: 'center', marginBottom:25 }]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon
                                    name={item.icon}
                                    color='#1C70EB'
                                    size={25}
                                    style={{ padding: 3 }}
                                    type={item.iconType}
                                />
                                <ThemedText type="default" style={styles.linkTxt}>
                                    {item.title}
                                </ThemedText>
                            </View>
                            <Icon
                                name='right'
                                color='#4D4D4D'
                                type="antdesign"
                            />
                        </View>
                    )) 
                   }
                </Card>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // padding: 30
    },
    avatarContainer: {
        width: 100,          
        height: 100,        
        borderRadius: 50,
        backgroundColor: '#C0E4FA',
        paddingTop:35,
        overflow: 'hidden', 
        textAlign: 'center',
        color:"black",
        marginTop:30
    },
    btnStyle:{
        backgroundColor:"#1C70EB", 
        paddingLeft:40, 
        paddingRight:40, 
        marginTop:15
    },
    cardStyle: {
        borderRadius:15,
        borderColor:"white"
    },
    linkTxt: {
        fontSize:18,
        color:"#4D4D4D",
        paddingLeft:35
    }
})