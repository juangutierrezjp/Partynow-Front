import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './src/components/Navbar';


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="NavigationBar" component={Navbar} />
       {/* Pantalla de detalles sin barra de navegación */}
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;