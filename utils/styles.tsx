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
    }
})