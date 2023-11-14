import React from "react";
import { Locals1 } from "../Hardcoded";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Constants from "expo-constants";
const UserDetailsScreen = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "#E8E8E8",
        padding: 10,
      }}
    >
      <View style={styles.userHeader}>
        <Image
          source={{ uri: Locals1[0].ProfilePhoto }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <View style={styles.userStats}>
            <Text>{Locals1[0].name}</Text>

            <Image
              source={require("../../assets/verificado.png")}
              style={styles.verifiedIcon}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <FontAwesome name="user" size={24} color="black" />
            <Text style={{ marginLeft: 5 }}>@{Locals1[0].Organizer}</Text>
          </View>
        </View>
      </View>
      <View style={styles.userStats}>
        <View style={styles.statsItem}>
          <Text>666</Text>
          <Text>Seguidores</Text>
        </View>
        <View style={styles.statsItem}>
          <Text>666</Text>
          <Text>Seguidos</Text>
        </View>
        <View style={styles.statsItem}>
          <Button
            title="Seguir"
            onPress={() => {
              /* Lógica para seguir al usuario */
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userInfo: {
    marginLeft: 16,
  },
  verifiedIcon: {
    width: 20,
    height: 20,
  },
  userStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  statsItem: {
    alignItems: "center",
  },
});

export default UserDetailsScreen;
