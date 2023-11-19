// RegisterScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import Logo from "../../assets/logo.png";
import LogoGoogle from "../../assets/googleLogo.png";
import Line from "../../assets/Line.png";
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para registrar al usuario
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
          <Text style={styles.text}>Email:</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Ingresa tu email"
            style={styles.input}
          />

          <Text style={styles.text}>Contraseña:</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            placeholder="Ingresa tu contraseña"
            style={styles.input}
          />

          <Text style={styles.text}>Repetir Contraseña:</Text>
          <TextInput
            onChangeText={setRepeatPassword}
            value={repeatPassword}
            secureTextEntry
            placeholder="Repite tu contraseña"
            style={styles.input}
          />

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox
              value={acceptTerms}
              onValueChange={setAcceptTerms}
              style={{ marginRight: 4 }}
            />
            <Text style={styles.textWhite}>
              Acepto los términos y condiciones
            </Text>
          </View>

          <TouchableOpacity
            title="Crear cuenta"
            onPress={handleRegister}
            disabled={
              !acceptTerms || !email || !password || password !== repeatPassword
            }
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
              Crear cuenta
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={Line}
              style={{ padding: 1, margin: 20, width: 100 }}
            />
            <Text style={{ color: "white", fontStyle: "italic" }}>o</Text>
            <Image
              source={Line}
              style={{ padding: 1, margin: 20, width: 100 }}
            />
          </View>

          <TouchableOpacity
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
            <Text style={{ color: "#343434" }}>Registrarse con Google</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textWhite}>
              ¿Ya tienes una cuenta? Inicia Sesión
            </Text>
          </TouchableOpacity>
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

export default RegisterScreen;
