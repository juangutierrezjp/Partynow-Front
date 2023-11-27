import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, StatusBar, RefreshControl, TouchableOpacity } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { DetailsLaroka } from '../Hardcoded';
import { useState, useCallback } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import LocalDetails from '../components/LocalDetails';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const DetailsView = ({ route }) => {
  const navigation = useNavigation();
  const [data, setData] = useState(DetailsLaroka);
  const [refreshing, setRefreshing] = useState(false);

  const handleGoBack = () => {
    console.log("back")
    navigation.goBack();
  };
  const onRefresh = useCallback(() => {
    // Aquí puedes realizar la petición de datos
    // Simulación de petición de datos asíncrona con un temporizador
    setRefreshing(true);
    setTimeout(() => {
      // Actualizar los datos con la nueva información
      setData(DetailsLaroka);
      setRefreshing(false);
    }, 1000); // Ajusta el tiempo según sea necesario
  }, []);  

  return (
    <ParallaxScrollView
      backgroundColor="#FF62EF"
      contentBackgroundColor="white"
      showsVerticalScrollIndicator={false}
      parallaxHeaderHeight={300}
      stickyHeaderHeight={80}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderForeground={() => (
        <View style={styles.coverContainer}>
          <Image
            source={{ uri: `${data.CoverPhoto}` }}
            style={styles.coverImage}
          />
          <View style={styles.overlayTextContainer}>                  

              
          </View>
        </View>
      )}
      renderStickyHeader={() => (<TouchableOpacity onPress={handleGoBack}>
        <View style={styles.stickyHeader}>
    <LinearGradient
      colors={["#FF62EF", "#D55A4B"]}
      style={{
        marginLeft:-20,
        width:700,
        height:200,
        flex: 1,
        backgroundColor: "#E8E8E8",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></LinearGradient>
            <View style={styles.stickyHeaderText}>
            <AntDesign name="arrowleft" size={28} color="#ffffff" style={{marginRight:7}}/>
            <Text style={{  fontSize: 20,fontWeight: 'bold',color: 'white'}}>{data.name}</Text>
            </View>
              
        </View>
        </TouchableOpacity>
      )}
    >
      {/* Contenido debajo del cover, como la foto de perfil y otros detalles */}
      <View style={styles.detailsContainer}>
        
        <View style={styles.profileContainer}>
          {data.type==="local"?<LocalDetails data={data}/>:null}
        </View>
        {/* Otros detalles de la disco */}
        {/* ... Más contenido ... */}
      </View>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  coverContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 300,
  },
  overlayTextContainer: {
    zIndex:2000,
    position: 'absolute',
    top:20,
    left: 0,
  },

  detailsContainer: {
    backgroundColor: 'white',
    paddingTop: 16,
  },
  profileContainer: {
    marginTop:-55,
    padding: 16,
  },
  stickyHeader: {
    backgroundColor: '#FF62EF',
    height: 80,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  stickyHeaderText: {
    top:30,
    flexDirection:"row",
    alignItems:"center",
    marginLeft:15,
    zIndex:2,
    position:"absolute",
  
  },
});

export default DetailsView;
