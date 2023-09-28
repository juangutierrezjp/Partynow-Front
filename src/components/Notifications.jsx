import React from "react"
import { View, Text } from "react-native"
import Constants from "expo-constants"


const Notifications = ()=>{

    return(
        <View style={{marginTop:Constants.statusBarHeight, flex:1, backgroundColor:"gray"}}>
            <Text>Notificaciones</Text>
        </View>
    )

}

export default Notifications