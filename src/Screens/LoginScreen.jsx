// screens/LoginScreen.js
import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../assets/logo.png";
import Line from "../../assets/Line.png";
import LogoGoogle from "../../assets/googleLogo.png";
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
            alignItems: "center", // Agregado
            justifyContent: "center", // Agregado
          }}
        >
          <View
            style={{
              margin: 0,
              alignItems: "center", // Agregado
              justifyContent: "center", // Agregado
            }}
          >
            <Text style={styles.text}>Email</Text>
            <TextInput
              placeholder="Ingrese su correo electrónico o nombre"
              style={styles.input}
            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
              placeholder="Ingrese tu contraseña"
              secureTextEntry
              style={styles.input}
            />
            <TouchableOpacity onPress={handleForgotPassword} style={{}}>
              <Text style={styles.textWhite}>¿Olvidaste tú contraseña?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="Iniciar sesión"
              onPress={handleLogin}
              style={{
                backgroundColor: "white",
                padding: 7,
                width: 290,
                borderRadius: 13,
              }}
            >
              <Text
                style={{
                  color: "#FF62EF",
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                Ingresar
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={Line}
                style={{ padding: 1, margin: 20, width: 100 }}
              />
              <Text style={{ color: "white" }}>o</Text>
              <Image
                source={Line}
                style={{ padding: 1, margin: 20, width: 100 }}
              />
            </View>

            <TouchableOpacity
              onPress={handleGoogleLogin}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center", // Centrar el contenido horizontalmente
                backgroundColor: "white",
                padding: 7,
                width: 230,
                borderRadius: 13,
              }}
            >
              <Image
                source={LogoGoogle}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10, // Agregado para dar espacio entre la imagen y el texto
                }}
              />
              <Text style={{ color: "#343434" }}>Continuar con Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister} style={{}}>
              <Text style={styles.textWhite}>
                ¿Aun no eres parte? Registrate Gratis
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  text: { color: "#343434", textAlign: "center" },
  textWhite: {
    color: "white",
    textDecorationLine: "underline",
    textAlign: "center",
    marginVertical: 10,
    fontStyle: "italic",
  },
  input: {
    backgroundColor: "white",
    color: "#8B8181",
    padding: 10,
    fontSize: 12,
    borderRadius: 13,
    fontStyle: "italic",
    marginVertical: 10,
    width: 230,
  },
});
export default LoginScreen;
