import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Constants from "expo-constants";
import HomeButtons from "../components/HomeButtons";
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

const Main = () => {

  const desc=["locales oficiales", "fiestas, previas, presentaciones", "Los mejores perfiles de la zona", "Accede rápidamente a Boliches y Eventos"]


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <HomeButtons local="BOLICHES" events="EVENTOS" organizers="ORGANIZADORES" explore="EXPLORAR" descriptions={desc}/>

      </Layout>
    </SafeAreaView>
  );
};

export default Main;
