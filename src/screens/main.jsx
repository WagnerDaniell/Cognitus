import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  return (
    <LinearGradient colors={["#fff", "#fff"]} style={styles.container}>
      <View style={styles.ImageView}>
        <Image
          source={require("../assets/LogoForBgWhite.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>
          O aplicativo ideal para revisar qualquer{"\n"} assunto que você
          imaginar!
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.buttonlogin}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>CRIAR CONTA</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 243,
    height: 234,
    marginBottom: 20,
  },

  header: {
    marginBottom: 180,
  },
  title: {
    color: "#081D3C",
    fontSize: 16,
    fontWeight: "Regular",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FFC400",
    borderRadius: 15,
    height: 57,
    width: "356",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonlogin: {
    backgroundColor: "#081D3C",
    borderRadius: 15,
    height: 57,
    width: "356",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
