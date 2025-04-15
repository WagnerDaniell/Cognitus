import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <LinearGradient colors={["#0F2851", "#000000"]} style={styles.container}>
      <View style={styles.topLeftView}>
        <Ionicons
          name="person-circle-outline"
          size={30}
          color="#FFFFFF"
          style={styles.iconProfile}
        />
        <Text style={styles.textLast}>Olá, Wagner Daniel</Text>
      </View>

      <Text style={styles.textMain}>O que você que revisar hoje?</Text>
      <View style={styles.inputWrapper}>
        <Ionicons
          name="search"
          size={20}
          color="#0F2851"
          style={styles.iconSearch}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o assunto..."
          placeholderTextColor="#0F2851"
          value={message}
          onChangeText={setMessage}
        />
      </View>

      <View style={styles.ViewLast}>
        <Text style={styles.textLast}>Seus últimos assuntos revisados</Text>
        <Ionicons name="albums-outline" size={20} color="#FFC400" />
      </View>

      <View style={styles.bar}>
        <Ionicons
          name="home-outline"
          size={27}
          color="#FFC400"
          style={styles.iconBarSelect}
        />
        <Ionicons
          name="trophy-outline"
          size={27}
          color="#FFC400"
          style={styles.iconBar}
        />
        <Ionicons
          name="person-outline"
          size={27}
          color="#FFC400"
          style={styles.iconBar}
        />
      </View>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  topLeftView: {
    position: "absolute",
    top: 45,
    left: 20,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 50,
  },

  textMain: {
    color: "white",
    fontSize: 25,
    marginBottom: 25,
  },

  inputWrapper: {
    width: "80%",
    height: 45,
    position: "relative",
    justifyContent: "center",
  },

  input: {
    backgroundColor: "white",
    borderRadius: 5,
    height: 45,
    padding: 10,
    paddingLeft: 40,
  },

  iconSearch: {
    position: "absolute",
    left: 12,
    zIndex: 1,
  },
  iconProfile: {
    position: "absolute",
    left: 12,
    top: 8,
    zIndex: 1,
  },
  ViewLast: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 40,
  },

  textLast: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  bar: {
    gap: 70,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  iconBar: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 30,
  },

  iconBarSelect: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
  },
});
