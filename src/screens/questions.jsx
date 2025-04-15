import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function App() {
  const [message, setMessage] = useState("");

  return (
    <LinearGradient colors={["#0F2851", "#000000"]} style={styles.container}>
      <View style={styles.topLeftView}>
        <Text style={styles.textLast}>
          Revisando – <Text style={styles.highlight}>C#</Text>
        </Text>
      </View>

      <View style={styles.topLeftView2}>
        <Text style={styles.SubTittle}>
          Questões <Text style={styles.NumberIn}>1</Text> de
          <Text style={styles.NumberOut}>10</Text>
        </Text>
      </View>

      <View style={styles.MainView}>
        <Text style={styles.textMain}>
          Qual é a palavra-chave usada para definir uma classe em C#?
        </Text>
      </View>

      <View style={styles.inputWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Botão A clicado!")}
          accessibilityLabel="buttonA"
        >
          <Text style={styles.buttonText}>A - struct</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Botão B clicado!")}
          accessibilityLabel="buttonB"
        >
          <Text style={styles.buttonText}>B - struct</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Botão C clicado!")}
          accessibilityLabel="buttonC"
        >
          <Text style={styles.buttonText}>C - struct</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Botão D clicado!")}
          accessibilityLabel="buttonD"
        >
          <Text style={styles.buttonText}>D - struct</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  topLeftView: {
    position: "absolute",
    top: 45,
    left: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 50,
  },
  topLeftView2: {
    position: "absolute",
    top: 80,
    left: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  textLast: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  highlight: {
    color: "#FFD233",
    fontWeight: "bold",
  },
  SubTittle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  MainView: {
    position: "absolute",
    top: 250,
    left: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 50,
  },
  textMain: {
    color: "white",
    fontSize: 20,
    marginBottom: 25,
    fontWeight: "medium",
  },

  inputWrapper: {
    width: "80%",
    height: 45,
    justifyContent: "center",
    top: 50,
  },

  button: {
    backgroundColor: "#FFC400",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    paddingLeft: 20,
    marginBottom: 19,
    shadowColor: "#B2B2B2",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
