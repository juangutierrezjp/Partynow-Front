import React from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";
import Card from "../components/Card"; // Corregimos la ruta del componente
import MapView, { Marker } from 'react-native-maps';
import StaticMap from "../components/StaticMap";

const Explore = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "#E8E8E8",
      }}
    >
      <Text
        style={{ color: "#000000", fontSize: 20, marginLeft: 10, padding: 10 }}
      >
       Explorar
      </Text>
      <StaticMap latitude={-24.8207734} longitude={-65.427048} name={"La roka"} description={"Boliche"}/>
    </View>
  );
};

export default Explore;
