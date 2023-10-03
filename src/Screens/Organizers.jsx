import React from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";
import Card from "../components/Card"; // Corregimos la ruta del componente

const Organizers = () => {
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
        ORGANIZADORES
      </Text>
      
    </View>
  );
};

export default Organizers;
