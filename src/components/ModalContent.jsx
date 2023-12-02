import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ModalContent = ({ notification, onClose }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.innerContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {notification.name}
        </Text>
        <Text>{notification.title}</Text>
        <Text style={{ fontSize: 14 }}>{notification.text}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontStyle: "italic" }}>Hace </Text>
          <Text style={{ fontStyle: "italic" }}>{notification.time}</Text>
        </View>

        <Button title="Cerrar" onPress={onClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%", // Puedes ajustar el ancho según tus necesidades
    elevation: 5, // Sombra en Android
    shadowColor: "#000", // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});

export default ModalContent;
