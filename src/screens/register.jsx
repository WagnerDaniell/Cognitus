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

export default function App({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [escolaridade, setEscolaridade] = useState("");

  const cadastro = () => {
    alert(nome);
    alert(email);
    alert(password);
    alert(escolaridade);
    //adicionar a lógica para enviar os dados para o backend wagner bora trabalhar bora
  };

  return (
    <LinearGradient colors={["#0F2851", "#000000"]} style={styles.container}>
      <View style={styles.ImageView}>
        <Image
          source={require("../assets/LogoNoTxT.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Crie sua Conta</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          <Ionicons name="person" size={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#fff"
            onChangeText={(text) => setNome(text)}
            value={nome}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="mail" size={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="lock-closed" size={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#fff"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicons name="school" size={20} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Escolaridade"
            placeholderTextColor="#fff"
            onChangeText={(text) => setEscolaridade(text)}
            value={escolaridade}
          />
        </View>
        <TouchableOpacity onPress={() => cadastro()} style={styles.button}>
          <Text style={styles.buttonText}>CRIAR CONTA</Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.line} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require("../assets/google.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Entre com o Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.LoginView}>
        <Text style={styles.LoginText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Index")}>
          <Text style={styles.LoginText2}> Entrar</Text>
        </TouchableOpacity>
      </View>
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
    width: 249,
    height: 159,
    marginBottom: 20,
  },
  ImageView: {
    position: "absolute",
    top: 50,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  header: {
    marginTop: 170,
    marginBottom: 30,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  form: {
    width: "90%",
    alignItems: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 20,
    paddingHorizontal: 15,
    width: "100%",
    height: 57,
    marginBottom: 15,
    borderColor: "#fff",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: "#fff",
  },
  icon: {
    marginRight: 10,
    color: "#fff",
  },
  button: {
    backgroundColor: "#FFC400",
    borderRadius: 20,
    height: 57,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  separatorText: {
    color: "#fff",
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "flex-start",
    marginTop: 10,
    position: "relative",
  },

  googleIcon: {
    width: 30,
    height: 30,
    left: 20,
    marginRight: 62,
  },

  googleButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  LoginView: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 50,
    position: "absolute",
    right: 140,
    bottom: 10,
    flexDirection: "row",
  },
  LoginText: {
    color: "#fff",
    fontSize: 16,
  },
  LoginText2: {
    color: "#FFC400",
    fontSize: 16,
    fontWeight: "bold",
  },
});
