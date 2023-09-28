import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Importa tus componentes de pantalla aquí
import Main from './src/components/Main';
import Tickets from './src/components/Tickets';
import Notifications from './src/components/Notifications';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Componente para la barra de navegación común
function MainTabs() {
  return (
    <Tab.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Tickets" component={Tickets} />
      <Tab.Screen name="Inicio" component={Main} />
      <Tab.Screen name="Notifications" component={Notifications} />



    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
       {/* Pantalla de detalles sin barra de navegación */}
       {/* <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;