import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text } from "react-native";

export default function MyAccountScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("My Account")}>My Account</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 50,
    fontSize: 20,
    fontWeight: "bold",
  },
});
