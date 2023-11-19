import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./src/components/Navbar";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { light } from "./src/themes";
import LoginScreen from "./src/Screens/LoginScreen"; // Asegúrate de importar tu pantalla de inicio de sesión
import RegisterScreen from "./src/Screens/RegisterScreen";
const Stack = createStackNavigator();

function App() {
  return (
    <>
      <ApplicationProvider {...eva} theme={light}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="NavigationBar" component={Navbar} />
            {/* Agrega otras pantallas según sea necesario */}
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}

export default App;
