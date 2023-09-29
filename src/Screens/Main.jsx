import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

const Main = () => {
  const navigation = useNavigation();
  const goToBoliches = () => {
    navigation.navigate("Boliches");
  };

  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "#E8E8E8",
      }}
    >
      <TouchableHighlight
        onPress={goToBoliches}
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderWidth: 3,
          borderColor: "#ccc",
          borderRadius: 15,
          backgroundColor: "#D9D9D9",
          marginHorizontal: 5,
          marginVertical: 2,
        }}
      >
        <Text
          style={{ color: "black", fontSize: 20, marginLeft: 10, padding: 10 }}
        >
          Boliches
        </Text>
      </TouchableHighlight>
    </View>
  );
};

export default Main;
