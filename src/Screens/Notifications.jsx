import React from "react";
import { View, Text, Image } from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { notificationsData } from "../Hardcoded";

const Notifications = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 2,
          alignItems: "center",
        }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text
          style={{
            color: "#343434",
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 16,
          }}
        >
          Notificaciones
        </Text>
      </View>
      <View>
        {Object.keys(notificationsData).map((period, index) => (
          <View key={index}>
            <Text
              style={{
                color: "#343434",
                fontWeight: "bold",
                fontSize: 17,
                margin: 12,
              }}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </Text>
            {notificationsData[period] &&
              notificationsData[period].map((notification, subIndex) => (
                <View
                  key={subIndex}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 12,
                  }}
                >
                  <Image
                    source={{ uri: notification.avatar }}
                    style={{ width: 40, height: 40, borderRadius: 40 }}
                  />
                  <Text style={{ marginLeft: 4 }}>{notification.name}</Text>
                  <Text style={{ marginLeft: 4 }}>{notification.title}</Text>
                  <Text style={{ marginLeft: 4 }}>{notification.text}</Text>
                  <Text style={{ marginLeft: 4 }}>{notification.time}</Text>
                </View>
              ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Notifications;
