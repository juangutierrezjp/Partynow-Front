import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

const HomeButtons = ({ local, events, organizers, explore, descriptions }) => {
  const navigation = useNavigation();
  const goLocals = (e) => {
    navigation.navigate("Locals"); // Reemplaza 'Screen1' con el nombre de tu primera vista
  };

  return (
    <>
      <View
        style={{
          flexDirection: "col",
          justifyContent: "space-around",
          alignItems: "center",
          width: 400,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: 400,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Locals");
            }}
            name="Locals"
            style={styles.touchable}
          >
            <>
              <Image
                source={require("../../assets/local.png")}
                style={styles.image1}
              />
              <Text style={{ ...styles.text, fontSize: 30 }}>{local}</Text>
              <Text
                style={{
                  ...styles.text,
                  fontWeight: "semibold",
                  fontSize: 10,
                  bottom: 50,
                }}
              >
                {descriptions[0]}
              </Text>
            </>
          </TouchableOpacity>

          <View style={{ justifyContent: "flex" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Events");
              }}
              style={styles.touchable2}
            >
              <>
                <Image
                  source={require("../../assets/events.png")}
                  style={styles.image2}
                />
                <Text style={styles.text}>{events}</Text>
                <Text
                  style={{
                    ...styles.text,
                    fontWeight: "semibold",
                    fontSize: 9,
                    bottom: "15%",
                  }}
                >
                  {descriptions[1]}
                </Text>
              </>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Organizers");
              }}
              style={{ ...styles.touchable2, marginTop: 6 }}
            >
              <>
                <Image
                  source={require("../../assets/organizers.png")}
                  style={styles.image2}
                />
                <Text style={{ ...styles.text, fontSize: 15 }}>
                  {organizers}
                </Text>
                <Text
                  style={{
                    ...styles.text,
                    fontWeight: "semibold",
                    fontSize: 9,
                    bottom: "10%",
                  }}
                >
                  {descriptions[2]}
                </Text>
              </>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Explore");
          }}
          style={styles.touchable3}
        >
          <>
            <Image
              source={require("../../assets/explore.png")}
              style={styles.image3}
            />
            <Text style={{ ...styles.text, fontSize: 25 }}>{explore}</Text>
            <Text
              style={{
                ...styles.text,
                fontWeight: "semibold",
                fontSize: 15,
                bottom: "5%",
              }}
            >
              {descriptions[3]}
            </Text>
          </>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  touchable: {
    justifyContent: "center",
    alignItems: "center",
    height: 190,
    width: 190,
    marginLeft: -20,
  },
  touchable2: {
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    width: 150,
    marginLeft: -25,
  },
  touchable3: {
    justifyContent: "center",
    alignItems: "center",
    height: 105,
    width: "90%",
    marginTop: 15,
  },
  image1: {
    width: 180,
    height: 190,
  },
  image2: {
    width: 185,
    height: 90,
  },
  image3: {
    width: 380,
    height: 107,
  },
  text: {
    position: "absolute", // Permite superponer el texto sobre la imagen
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff", // Color del texto
    padding: 10, // Espacio alrededor del texto
    textShadowColor: "rgba(0, 0, 0, 0.5)", // Color de la sombra
    textShadowOffset: { width: 2, height: 2 }, // Desplazamiento de la sombra en píxeles
    textShadowRadius: 10, // Radio de la sombra en píxeles
  },
});

export default HomeButtons;
