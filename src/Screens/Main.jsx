import React from "react";
import { View, Text, TouchableHighlight, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useTheme } from "@ui-kitten/components";
import MainScroll from "../components/MainScroll";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { useState } from "react";
import { useEffect } from 'react';

const Main = () => {
  const getCurrentTime = () => {
    const currentDateTime = new Date();
    const currentTime = currentDateTime.toLocaleTimeString();
    return currentTime;
  };

  const theme= useTheme()
  const [loading, setloading]= useState(false)
  return (
    <View style={{marginTop:Constants.statusBarHeight, flex:1, backgroundColor:theme["primaryColor2"]}}>
      <View style={styles.alts}>
        <View style={styles.description}>
        <Feather name="menu" size={29} color="black" />
        </View>
        <View style={styles.description}>
        <Entypo name="location-pin" size={16} color="grey" />
        <Text style={{fontSize:15, textDecorationLine: 'underline', color:"grey",}}>Salta Capital</Text>
        </View>
      </View>
      <MainScroll />
      
      

</View>
  );
};



const styles = StyleSheet.create({
  container: {
    // Estilo para el contenedor que tendrá la sombra en la parte inferior
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  alts:{
      width:"100%",
      flexDirection:"row",
      alignContent:"space-between",
      alignItems:"center",
      justifyContent: "space-between",
      height:"7%",     
  },
  description: {
    color: '#000000',
    flexDirection:"row",
    marginLeft:"5%",
    marginRight:"5%"
  },
});
export default Main;
