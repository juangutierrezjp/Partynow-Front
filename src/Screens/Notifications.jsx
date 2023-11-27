import React from "react";
import { View, Text, Image } from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { notificationsData } from "../Hardcoded";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }
  return text;
};

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
        {notificationsData.groups.map((group, index) => (
          <View key={index}>
            <Text
              style={{
                color: "#343434",
                fontWeight: "bold",
                fontSize: 17,
                marginTop: 12,
                marginLeft: 12,
              }}
            >
              {group.title}
            </Text>
            {group.notifications.map((notification, subIndex) => (
              <View
                key={subIndex}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 12,
                  marginTop: 4,
                }}
              >
                <Image
                  source={{ uri: notification.avatar }}
                  style={{ width: 40, height: 40, borderRadius: 40 }}
                />
                <Text style={{ marginLeft: 4 }}>{notification.name}</Text>
                <Text style={{ marginLeft: 4 }}>{notification.title}</Text>
                <Text style={{ marginLeft: 4 }}>
                  {truncateText(notification.text, 20)}
                </Text>
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
