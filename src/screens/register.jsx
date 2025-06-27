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
import { Alert } from "react-native";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import Loading from "../components/loading";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native";
const { width, height } = Dimensions.get("window");

export default function Register({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [escolaridade, setEscolaridade] = useState("");
  const [loading, setLoading] = useState(false);

  const body = {
    Name: nome,
    Email: email,
    Password: password,
    Schooling: escolaridade,
  };

  const cadastro = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://cognitusbackend.onrender.com/api/c/register",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      await SecureStore.setItemAsync("token", response.data.token);
      navigation.navigate("Home");
    } catch (error) {
      Alert.alert("Error: " + error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading == true) {
    return <Loading />;
  }

  return (
    <LinearGradient colors={["#0F2851", "#000000"]} style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
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
      </ScrollView>
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
    width: width * 0.6,
    height: height * 0.2,
    resizeMode: "contain",
    marginBottom: 20,
  },
  ImageView: {
    top: height * 0.05,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 50,
    width: "100%",
  },
  header: {
    marginTop: height * 0.01,
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
    height: height * 0.06,
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
    height: height * 0.06,
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
    width: width * 0.08,
    height: height * 0.03,
    resizeMode: "contain",
    marginRight: 20,
  },

  googleButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  LoginView: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 20,
    alignSelf: "flex-start",
    marginLeft: 30,
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
