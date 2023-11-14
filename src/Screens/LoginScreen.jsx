// screens/LoginScreen.js
import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Implementar la lógica de inicio de sesión real aquí
    console.log("Iniciar sesión");

    // Navegar a la pantalla de inicio (reemplaza 'Home' con el nombre real de tu pantalla de inicio)
    navigation.navigate("NavigationBar");
  };

  const handleForgotPassword = () => {
    // Implementar la lógica de olvidar contraseña aquí
    console.log("Olvidé mi contraseña");
  };

  const handleGoogleLogin = () => {
    // Implementar la lógica de inicio de sesión con Google aquí
    console.log("Iniciar sesión con Google");
  };

  const handleRegister = () => {
    // Implementar la lógica de registro aquí
    console.log("Registrarse");
  };

  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "#E8E8E8",
        padding: 10,
        alignItems: "center", // Centrar verticalmente en el eje Y
        justifyContent: "center", // Ajustar si es necesario
      }}
    >
      <Text>Correo electrónico:</Text>
      <TextInput placeholder="Ingrese su correo electrónico" />

      <Text>Contraseña:</Text>
      <TextInput placeholder="Ingrese su contraseña" secureTextEntry />

      <Button title="Olvidé mi contraseña" onPress={handleForgotPassword} />
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Button title="Iniciar sesión con Google" onPress={handleGoogleLogin} />
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

export default LoginScreen;
