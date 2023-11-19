// RegisterScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
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
      <Text>Email:</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Ingresa tu email"
      />

      <Text>Contraseña:</Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Ingresa tu contraseña"
      />

      <Text>Repetir Contraseña:</Text>
      <TextInput
        onChangeText={setRepeatPassword}
        value={repeatPassword}
        secureTextEntry
        placeholder="Repite tu contraseña"
      />

      <Checkbox value={acceptTerms} onValueChange={setAcceptTerms} />
      <Text>Acepto los términos y condiciones</Text>

      <Button
        title="Crear cuenta"
        onPress={handleRegister}
        disabled={
          !acceptTerms || !email || !password || password !== repeatPassword
        }
      />

      <Button
        title="Registrarse con Google"
        onPress={() => {
          // Aquí puedes agregar la lógica para el inicio de sesión con Google
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>¿Ya tienes una cuenta?</Text>
      </TouchableOpacity>

      <Button
        title="Iniciar sesión"
        onPress={() => navigation.navigate("Home")}
      />
    </LinearGradient>
  );
};

export default RegisterScreen;
