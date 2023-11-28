import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import { AntDesign } from "@expo/vector-icons";
import { notificationsData } from "../Hardcoded";
import ModalContent from "../components/ModalContent";

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 3) + "...";
  }
  return text;
};

const Notifications = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleNotificationPress = (notification) => {
    setSelectedNotification(notification);
    // Marcar la notificación como leída
    notification.unread && (notification.unread = false);
  };

  const handleModalClose = () => {
    setSelectedNotification(null);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        marginTop: Constants.statusBarHeight,
      }}
    >
      <View style={{ flexDirection: "row", margin: 2, alignItems: "center" }}>
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
                margin: 12,
              }}
            >
              {group.title}
            </Text>
            {group.notifications.length === 0 ? (
              <Text
                style={{
                  textAlign: "center",
                  color: "#808080",
                  fontSize: 16,
                  marginBottom: 12,
                }}
              >
                No hay notificaciones
              </Text>
            ) : (
              group.notifications.map((notification, subIndex) => (
                <TouchableOpacity
                  key={subIndex}
                  onPress={() => handleNotificationPress(notification)}
                >
                  <View style={styles.notificationContainer}>
                    <Image
                      source={{ uri: notification.avatar }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 40,
                        marginRight: 8,
                      }}
                    />
                    {notification.unread && (
                      <View style={styles.unreadIndicator} />
                    )}
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ marginLeft: 4, fontWeight: "bold" }}>
                        {notification.name}
                      </Text>
                      <Text style={{ marginLeft: 4 }}>
                        {notification.title}
                      </Text>
                      <Text style={{ marginLeft: 4 }}>
                        {truncateText(notification.text, 25)}
                      </Text>
                      <Text style={{ marginLeft: 4, fontStyle: "italic" }}>
                        {notification.time}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        ))}
      </View>
      {/* Modal para mostrar la notificación completa */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={selectedNotification !== null}
        onRequestClose={handleModalClose}
      >
        <ModalContent
          notification={selectedNotification}
          onClose={handleModalClose}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginBottom: 8,
  },
  unreadIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FF62EF",
    marginRight: 8,
    position: "absolute",
    bottom: 0,
  },
});

export default Notifications;
