import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CustomButton = ({ imageSource, firstName, distance, stars }) => {
  return (
    <TouchableOpacity
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
      <Image
        source={imageSource}
        style={{ width: 70, height: 70, borderRadius: 5, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{firstName}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="location-on" size={20} color="#000000" />
          <Text style={{ marginLeft: 5 }}>{`Distancia: ${distance} km`}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {[1, 2, 3, 4, 5].map((index) => (
            <MaterialIcons
              key={index}
              name={index <= (stars || 0) ? "star" : "star-border"} // Usamos 'star' o 'star-border' según la puntuación
              size={20}
              color={index <= (stars || 0) ? "yellow" : "#000000"} // Cambiamos el color según la puntuación
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
