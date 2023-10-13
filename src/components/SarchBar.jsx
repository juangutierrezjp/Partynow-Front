import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "@ui-kitten/components";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@ui-kitten/components";

const InputSimpleUsageShowcase = () => {
  const [value, setValue] = useState("");
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Input
        placeholder="Place your Text"
        placeholderTextColor="rgb(255, 255, 255)"
        style={styles.input}
        textStyle={styles.textStyle}
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />
      <Icon
        name="search"
        size={30}
        color="#ffffff"
        style={{ ...styles.icon, backgroundColor: theme["primary1"] }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  input: {
    flex: 1,
  },
  icon: {
    backgroundColor: "#8A1E94",
    padding: 5,
    marginLeft: 5,
  },
  textStyle: { fontSize: 20, color: "#f0f" },
});

export default InputSimpleUsageShowcase;
