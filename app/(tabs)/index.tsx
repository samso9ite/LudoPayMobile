import { ThemedText } from "@/components/ThemedText";
import TopBar from "@/components/topBar";
import { View, StyleSheet, SafeAreaView, Image, Text } from "react-native";
import {Button, Card, Icon} from'@rneui/themed'
import { globalStyle } from "@/utils/styles";
import Modal from "react-native-modal";
import { useState } from "react";
import ProgressBar from "@/components/setupModal";
import ProfileDetails from "@/components/setupModal/profileDetails";
import IdentityBvn from "@/components/setupModal/identityBvn";
import Otp from "@/components/setupModal/otp";
import SetupCompleted from "@/components/setupModal/setupCompleted";

export default function HomeScreen() {
    const [isModalVisible, setModalVisible] = useState(true);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    return(
        <View style={styles.container}>
            <SafeAreaView >
                <TopBar />
            <View>
            <View style={{marginTop:20}}>
                <Card containerStyle={{backgroundColor:"#1C70EB", borderRadius:10, margin:0}}>
                    <View style={{justifyContent:"space-between" ,...globalStyle.row}}>
                        <ThemedText type="default" color="white">Available Balance  
                            <Icon
                                name='eyeo'
                                type='antdesign'
                                color='#fff'
                                style={{paddingTop:5, paddingLeft:20}}
                            />
                        </ThemedText>
                        <ThemedText type="default" color="white" style={{paddingRight:20}}>
                            NGN
                        </ThemedText>
                    </View>
                    <View style={{marginTop:20}}>
                        <ThemedText type="title" color="white">
                            #45,000.00
                        </ThemedText>
                        
                    </View>
                </Card>
            </View>
            <View style={{marginTop:20, ...globalStyle.row, justifyContent:"space-between"}}>
            <Button radius={"lg"} size="lg" type="solid"  
             buttonStyle={{backgroundColor:"#153E90", paddingLeft:40, paddingRight:40}}>
                <Icon
                    name='keyboard-double-arrow-down'
                    type='materialicons'
                    color='#fff'
                    style={{padding:3}}
                />
                <ThemedText color="white" type="default"> Receive </ThemedText>
            </Button>
            <Button radius={"lg"} size="lg" type="outline"  
             buttonStyle={{backgroundColor:"transparent", paddingLeft:45, paddingRight:45, borderWidth:1, borderColor:"#153E90"}}>
                <Icon
                    name='keyboard-double-arrow-up'
                    type='materialicons'
                    color='#153E90'
                    style={{padding:3}}
                />
                <ThemedText color="#153E90" type="default"> Send </ThemedText>
            </Button>
            </View>
            </View>
            <View style={{paddingTop:20, justifyContent:"center"}}>
                <Image source={require("../../assets/images/banner.png")} 
                    style={globalStyle.bannerStyle}
                />
            </View>
            <View style={{marginTop:25}}>
                <Card containerStyle={{margin:0, borderColor:"transparent", borderRadius:15}} >
                    <View style={[globalStyle.row, { alignItems: 'center' }]}>
                        <Icon
                            reverse
                            name="gift"
                            containerStyle={{ backgroundColor: "green" }}
                            type="antdesign"
                            reverseColor="#1C70EB"
                            color="#f2f2f2"
                            iconStyle={{ fontSize: 39 }}
                            size={30}
                        />
                        <View style={{ flex: 1, paddingLeft: 10 }}>
                            <ThemedText
                                type="subtitleRubik"
                                color="#4D4D4D"
                                style={{ flexWrap: "wrap" }}
                            >
                                Cash up for grabs!
                            </ThemedText>
                            <ThemedText
                                type="default"
                                color="#BDBDBD"
                                style={{ paddingTop: 10 }}
                            >
                                Invite your friends and get to earn as high as #2,000 cash
                            </ThemedText>
                        </View>
                    </View>
                </Card>
            </View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <Card containerStyle={styles.setupCard}>
                        <View  style={{...globalStyle.rowContainer, justifyContent:"flex-end", alignItems:"center"}}>
                            <Icon 
                                name="closecircleo"
                                type="antdesign"
                                size={15}
                                style={{paddingRight:10}}
                                onPress={toggleModal}
                            />
                            <ThemedText onPress={toggleModal}>Close</ThemedText>
                        </View>
                        {/* <ProgressBar /> */}
                        {/* <ProfileDetails /> */}
                        {/* <IdentityBvn /> */}
                        {/* <Otp /> */}
                        <SetupCompleted />
                    </Card>
               
                {/* <Button title="Hide modal" onPress={toggleModal} /> */}
                </View>
            </Modal>
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:30
    },
    slider:{
        flex: 1,
        alignItems: 'center',
    },
    setupCard: {
        backgroundColor: "#F5FAFE",
        borderRadius:10,
        width:"100%"
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
});