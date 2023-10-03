import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './src/components/Navbar';
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import { light } from './src/themes';




const Stack = createStackNavigator();
function App() {

  return (
    <>
    <ApplicationProvider {...eva} theme={light}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="NavigationBar" component={Navbar} />
       {/* Pantallas sin barra de navegación */}
      </Stack.Navigator>
    </NavigationContainer>
    </ApplicationProvider>
    </>
  );
}

export default App;