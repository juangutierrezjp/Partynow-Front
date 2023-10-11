import React from "react"
import { View, Text, ScrollView } from "react-native"
import Constants from "expo-constants"
import { useTheme } from "@ui-kitten/components";
import TicketContainer from "../components/TicketContainer";

const Tickets = ()=>{
    const theme= useTheme()
    return(
        <View style={{marginTop:Constants.statusBarHeight, flex:1, backgroundColor:theme["primaryColor2"]}}>
            <Text> Tus Entradas</Text>
            <TicketContainer></TicketContainer>
        </View>
    )

}

export default Tickets