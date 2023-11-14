import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = ({
  imageSource,
  firstName,
  party,
  distance,
  location,
  date,
  stars,
  onPress,
}) => {
  let backgroundColor = "white";
  let typeOfParty = (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <MaterialIcons name="location-on" size={20} color="#231F20" />
        <Text style={{ fontWeight: "normal" }}>{party}</Text>
      </View>
      <Text style={{ fontWeight: "normal", marginLeft: 5 }}>{distance}km</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {[1, 2, 3, 4, 5].map((index) => (
          <MaterialIcons
            key={index}
            name={index <= (stars || 0) ? "star" : "star-border"}
            size={20}
            color={index <= (stars || 0) ? "#231F20" : "#000000"}
          />
        ))}
      </View>
    </View>
  );

  // Convertimos a minúsculas para hacer la comparación sin importar mayúsculas o minúsculas
  if (party.toLowerCase() !== "boliche") {
    typeOfParty = (
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="date-range" size={24} color="black" />
          <Text style={{ fontWeight: "normal" }}>Evento - {date}</Text>
        </View>
        <Text style={{ fontWeight: "normal", marginLeft: 5 }}>
          En {location}
        </Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 5,
        borderWidth: 1,
        borderColor: "#F5F5F5",
        borderRadius: 20,
        backgroundColor: backgroundColor,
        marginHorizontal: 17,
        marginVertical: 2,
      }}
    >
      <Image
        source={imageSource}
        style={{ width: 75, height: 75, borderRadius: 17, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{firstName}</Text>
        {typeOfParty}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
