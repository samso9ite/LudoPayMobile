import { ThemedText } from "@/components/ThemedText";
import { Link, useNavigation, useRouter } from "expo-router";
import { ImageBackground, SafeAreaView, Text, View, StyleSheet, Image,Button, Pressable, TouchableOpacity  } from "react-native";
import Swiper from "react-native-swiper";

export const getStartedContent = [
  { 
    image:require("../assets/images/loginImg.png"),
    text: "Get paid in crypto, receive the payments as fiat money. It’s fast and easy"
  },
  { 
    image:require("../assets/images/transactionImg.png"),
    text: "Transfer or send money to any local bank account. All on Ludopay"
  },
  { 
    image:require("../assets/images/scanImg.png"),
    text: "Our QR scan-and-pay model makes receiving payment very easy for your business"
  },
]

export default function Index() {
  const router = useRouter();

  const items:any = getStartedContent.map((item:any, index) => (
      <View style={styles.slider}>
        <Image source={item?.image}/>
          <ThemedText type="default" color="white" style={{width:"70%", textAlign:"center", paddingTop:"8%"}}>
           {item.text}
          </ThemedText>
      </View>
   ))
   
  return (
    <View
      style={{...styles.container}}>
      <ImageBackground source={require("../assets/images/blueGradientBg.png")}  
       >
        <SafeAreaView style={styles.safeAfrea}>
         <Swiper dotColor="" activeDotColor="white" dotStyle={{top:"15%"}}
          activeDotStyle={{top:"15%"}}> 
          {items}
          </Swiper>
        </SafeAreaView>
       </ImageBackground>
 
       <TouchableOpacity style={{...styles.button}} 
          onPress={() => router.push("/auth/signUp")}>
          <ThemedText type="subtitle" color="white" style={{padding:"4%"}}>Get Started</ThemedText>
       </TouchableOpacity>
       <ThemedText type="default" style={{textAlign:"center", marginTop:"10%"}}>Create an account or <Link href="/auth/login" style={{color:"#1C70EB"}}> sign in </Link> to Ludopay</ThemedText>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  safeAfrea:{
    alignItems:"center",
    marginTop:"25%",
    height:"60%"
  },
   slider:{
    flex: 1,
    alignItems: 'center',
   },
   button: {
    backgroundColor: "#1C70EB",
    color:"white",
    width:"85%",
    alignItems:"center",
    marginHorizontal:"auto",
    borderRadius:5,
    marginTop:"20%"
   }
})