import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
    row:{
        flexDirection:"row",
        flexWrap:"wrap"
    },

    box: {
        width:"50%"
    },
    hairline:{
        borderBottomColor: 'black',
        paddingTop:7,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    bannerStyle: {
       width:"100%",  
       overflow: 'hidden', 
       borderRadius:15
    },
    input: {
        height: 50,
        borderColor: '#BDBDBD',
        borderWidth: 1,
        borderRadius:6,
        marginBottom: 10,
        padding: 8,
        alignItems:"center",
        width:"100%"
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
    rowContainer:{
        display:"flex", 
        flexDirection:"row", 
        justifyContent:"space-between"
    },
    setUpBtn: {
        backgroundColor:"#1C70EB", 
        marginTop:40, 
        padding:20, 
        marginBottom:20
    }
})