import { StyleSheet, View } from "react-native"
import { ThemedText } from "../ThemedText"
import { globalStyle } from "@/utils/styles"
export default function TitleBar(props:any){
    return(
        <>
            <ThemedText type="subtitleRubik" color="#1E1D1D"> {props?.title}</ThemedText>
            <View
                style={globalStyle.hairline}
            />
        </>
    )
}

