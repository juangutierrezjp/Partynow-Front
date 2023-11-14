// screens/LoginScreen.js
import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/logo.png";
import { LinearGradient } from "expo-linear-gradient";
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
    <LinearGradient
      colors={["#FFA865", "#D55A4B", "#6A1372"]}
      style={{
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: "#E8E8E8",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={Logo}
          style={{
            width: 197.72,
            height: 120.84,
          }}
        />
        <LinearGradient
          colors={["#DDEBF9", "#FF29EA"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            padding: 20,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              margin: 20,
            }}
          >
            <Text
              style={{
                color: "#343434",
              }}
            >
              Email
            </Text>
            <TextInput
              placeholder="Ingrese su correo electrónico o nombre"
              style={{
                backgroundColor: "white",
                color: "#8B8181",
                padding: 10,
                fontSize: 12,
                borderRadius: 13,
                fontStyle: "italic",
                marginVertical: 10,
              }}
            />

            <Text style={{ color: "#343434" }}>Contraseña</Text>
            <TextInput
              placeholder="Ingrese tu contraseña"
              secureTextEntry
              style={{
                backgroundColor: "white",
                color: "#8B8181",
                padding: 10,
                fontSize: 12,
                borderRadius: 13,
                fontStyle: "italic",
                marginVertical: 10,
              }}
            />

            <Button
              title="Olvidaste tú contraseña"
              onPress={handleForgotPassword}
              style={{ opacity: "2" }}
            />
            <Button title="Iniciar sesión" onPress={handleLogin} />
            <Button
              title="Iniciar sesión con Google"
              onPress={handleGoogleLogin}
            />
            <Button title="Registrarse" onPress={handleRegister} />
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
