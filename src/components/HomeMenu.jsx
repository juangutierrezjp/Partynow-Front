import React from "react";
import { View, StyleSheet } from "react-native";
import { Drawer, Button } from "react-native-material-ui";

const HomeScreen = () => {
  const handleBolichesPress = () => {
    // Acción para el botón "Boliches"
    console.log("Boliches button pressed");
  };

  const handleEventosPress = () => {
    // Acción para el botón "Eventos"
    console.log("Eventos button pressed");
  };

  const handleOrganizadoresPress = () => {
    // Acción para el botón "Organizadores"
    console.log("Organizadores button pressed");
  };

  return (
    <View style={styles.container}>
      <Drawer>
        <Drawer.Section>
          <Drawer.Item
            icon="place"
            label="Boliches"
            onPress={handleBolichesPress}
          />
        </Drawer.Section>
        <Drawer.Section title="Otros">
          <Drawer.Item
            icon="event"
            label="Eventos"
            onPress={handleEventosPress}
          />
          <Drawer.Item
            icon="people"
            label="Organizadores"
            onPress={handleOrganizadoresPress}
          />
        </Drawer.Section>
      </Drawer>
      <View style={styles.content}>{/* Contenido de la pantalla */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
