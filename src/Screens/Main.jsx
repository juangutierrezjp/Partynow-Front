import React from "react"
import { View, Text, TouchableHighlight } from "react-native"
import Constants from "expo-constants"
import { useNavigation } from '@react-navigation/native';

const Main = ()=>{
    const navigation = useNavigation();
    const goToBoliches = () => {
        navigation.navigate('Boliches');
      };

    return(
        <View style={{marginTop:Constants.statusBarHeight, flex:1, backgroundColor:"gray"}}>
            <TouchableHighlight onPress={goToBoliches}>  
            <Text>Primera version de la app</Text>
            </TouchableHighlight>
        </View>
    )

}

export default Main