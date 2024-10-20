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
})