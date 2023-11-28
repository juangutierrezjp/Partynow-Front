import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet, Image } from 'react-native';

const StaticMap = ({ latitude, longitude, name, description, image }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
        zoomEnabled={false}
        scrollEnabled={false}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        
          title={name}
          description={description}
        >
         <Image
            source={{ uri:  `${image}` }}
            style={styles.customMarker}
          />
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  customMarker: {
    width: 40,  // Ajusta el ancho según tu preferencia
    height: 40, // Ajusta la altura según tu preferencia
    borderRadius: 100, // La mitad del ancho o altura para hacer un círculo
    borderWidth: 2, // Ancho del borde
    borderColor: '#FF62EF', // Color del borde
  },
});

export default StaticMap;
