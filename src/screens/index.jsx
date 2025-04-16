import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function index({ navigation }) {
  return (
    <LinearGradient colors={["#0F2851", "#000000"]} style={styles.container}>
      <Text style={styles.textMain}>Tela inicial!</Text>

      <Button
        title="Ir para Home"
        onPress={() => navigation.navigate("Home")} // Navega para a tela "Home"
      />
      <Button
        title="Ir para Questions"
        onPress={() => navigation.navigate("Questions")} // Navega para a tela "Home"
      />
      <Button
        title="Ir para Register"
        onPress={() => navigation.navigate("Register")}
      />
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
  textMain: {
    color: "white",
    fontSize: 25,
    marginBottom: 25,
  },
});
