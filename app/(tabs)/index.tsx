import { ThemedText } from "@/components/ThemedText";
import TopBar from "@/components/topBar";
import { View, StyleSheet, SafeAreaView, Image } from "react-native";
import {Button, Card, Icon} from'@rneui/themed'
import { globalStyle } from "@/utils/styles";
import Swiper from "react-native-swiper";



export default function HomeScreen() {
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
             buttonStyle={{backgroundColor:"transparent", paddingLeft:40, paddingRight:40, borderWidth:1, borderColor:"#153E90"}}>
                <Icon
                    name='keyboard-double-arrow-down'
                    type='materialicons'
                    color='#153E90'
                    style={{padding:3}}
                />
                <ThemedText color="#153E90" type="default"> Receive </ThemedText>
            </Button>
            </View>
            </View>
            <View style={{paddingTop:20, justifyContent:"center"}}>
            <Image source={require("../../assets/images/banner.png")}/>
            <Swiper dotColor="" activeDotColor="white" dotStyle={{top:"15%"}}
          activeDotStyle={{top:"15%"}}> 
                <View>
                    <Image source={require("../../assets/images/banner.png")} />
                </View>
          </Swiper>
          </View>
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
});