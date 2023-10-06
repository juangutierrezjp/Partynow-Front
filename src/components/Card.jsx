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
    backgroundColor = "#FFF3C9"; // Cambia a tu color deseado
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
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "#F5F5F5",
        borderRadius: 5,
        backgroundColor: backgroundColor,
        marginHorizontal: 15,
        marginVertical: 2,
      }}
    >
      <Image
        source={imageSource}
        style={{ width: 70, height: 70, borderRadius: 5, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{firstName}</Text>
        {typeOfParty}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
