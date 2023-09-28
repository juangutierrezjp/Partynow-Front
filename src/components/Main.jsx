import React from "react"
import { View, Text } from "react-native"
import Constants from "expo-constants"


const Main = ()=>{

    return(
        <View style={{marginTop:Constants.statusBarHeight, flex:1, backgroundColor:"gray"}}>
            <Text>Primera version de la app</Text>
        </View>
    )

}

export default Main