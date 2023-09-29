import React from "react";
import { View, Text } from "react-native";
import Constants from "expo-constants";
import Card from "../components/Card"; // Corregimos la ruta del componente

const Boliches = () => {
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
        Boliches
      </Text>
      <View style={{ flex: 1, justifyContent: "top", alignItems: "center" }}>
        <Card
          imageSource={{
            uri: "https://viapais.com.ar/resizer/Q0-7t4AZiZdry4y-pRVCpyDh1ZM=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/6VZREZL32NA5TB5UBTMYYALDLI.jpg",
          }} // Corregimos la forma en que se pasa la fuente de la imagen
          firstName="Boliche Otaku"
          distance="3.5"
          stars={3}
        />
        <Card
          imageSource={{
            uri: "https://viapais.com.ar/resizer/Q0-7t4AZiZdry4y-pRVCpyDh1ZM=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/6VZREZL32NA5TB5UBTMYYALDLI.jpg",
          }} // Corregimos la forma en que se pasa la fuente de la imagen
          firstName="Boliche Otaku"
          distance="3.5"
          stars={3}
        />
      </View>
    </View>
  );
};

export default Boliches;
