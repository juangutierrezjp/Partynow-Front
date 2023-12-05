import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./src/components/Navbar";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { light } from "./src/themes";
import LoginScreen from "./src/Screens/LoginScreen"; // Asegúrate de importar tu pantalla de inicio de sesión
import RegisterScreen from "./src/Screens/RegisterScreen";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { MIPORT } from "@env"

if (__DEV__) {  
  loadDevMessages();
  loadErrorMessages();
}

const httpLink = createHttpLink({
  uri: `${MIPORT}/graphql`
})

const authLink = setContext(async(_, {headers})=>{  //CONFIGURACION DE TOKEN (AHORA ES NULL)
 // const token = await AsyncStorage.getItem('token')   // se debe instalar AsyncStorage como sugerencia para almacenar el token
 const token = null
  return{
    headers:{
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const Stack = createStackNavigator();

function App() {
  return (
    <>
    <ApolloProvider client={client}>
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
      </ApolloProvider>
    </>
  );
}

export default App;
