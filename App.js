import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importa tus componentes de pantalla aquí
import Tickets from './src/Screens/Tickets';
import Notifications from './src/Screens/Notifications';
import MainStackScreen from './src/StackScreens/MainStackScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


// Componente para la barra de navegación común

function MainTabs() {
  return (
    <Tab.Navigator initialRouteName="Inicio" backBehavior="initialRoute" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Tickets" component={Tickets} />
      <Tab.Screen name="Inicio" component={MainStackScreen} />
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
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;