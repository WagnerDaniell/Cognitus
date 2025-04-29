import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import Loading from "../components/loading";
import ErrorGenerate from "../components/errorGenerate";
import * as SecureStore from 'expo-secure-store';
import { useRoute } from '@react-navigation/native';

export default function Questions({ navigation }) {
  const [questAtual, setQuestAtual] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [corResposta, setCorResposta] = useState({
    a: "#FFC400",
    b: "#FFC400",
    c: "#FFC400",
    d: "#FFC400",
  });

  const route = useRoute();
  const tema = route.params.tema;

  const body = {
    Message: `${tema}`,
  };

  useEffect(() => {
    const requestQuestions = async () => {
      try {

        const token = await SecureStore.getItemAsync('token');

        if (token == null){
          navigation.navigate("Login")
        }

        const response = await axios.post(
          "https://cognitusbackend.onrender.com/api/c/generate",
          body,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setQuestions(response.data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setCarregando(false);
      }
    };

    requestQuestions();
  }, []);

  if (error !== null) {
    return <ErrorGenerate />;
  }

  const questao = questions[questAtual];

  const verificarResposta = (resposta) => {
    if (resposta === questao.correta) {
      setCorResposta({
        a: "#FFC400",
        b: "#FFC400",
        c: "#FFC400",
        d: "#FFC400",
      });

      if (questAtual + 1 >= questions.length) {
        navigation.navigate("EndQuest");
      } else {
        setQuestAtual(questAtual + 1);
      }
    } else {
      setCorResposta((prevState) => ({
        ...prevState,
        [resposta]: "#D10000",
      }));
    }
  };

  if (carregando === true) {
    return <Loading />;
  }

  return (
    <LinearGradient colors={["#0F2851", "#000000"]} style={styles.container}>
      <View style={styles.topLeftView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="close-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.topCenterView}>
        <Text style={styles.textLast}>
          Revisando – <Text style={styles.highlight}>{questao.tema}</Text>
        </Text>
      </View>

      <View style={styles.topCenterView2}>
        <Text style={styles.SubTittle}>
          Questões <Text style={styles.NumberIn}>{questAtual}</Text> de
          <Text style={styles.NumberOut}> 10</Text>
        </Text>
      </View>

      <View style={styles.MainView}>
        <Text style={styles.textMain}>{questao.pergunta}</Text>
      </View>

      <View style={styles.inputWrapper}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: corResposta.a }]}
          onPress={() => verificarResposta("a")}
          accessibilityLabel="buttonA"
        >
          <Text style={styles.buttonText}>A - {questao.alternativas.a}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: corResposta.b }]}
          onPress={() => verificarResposta("b")}
          accessibilityLabel="buttonB"
        >
          <Text style={styles.buttonText}>B - {questao.alternativas.b}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: corResposta.c }]}
          onPress={() => verificarResposta("c")}
          accessibilityLabel="buttonC"
        >
          <Text style={styles.buttonText}>C - {questao.alternativas.c}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: corResposta.d }]}
          onPress={() => verificarResposta("d")}
          accessibilityLabel="buttonD"
        >
          <Text style={styles.buttonText}>D - {questao.alternativas.d}</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  topLeftView: {
    position: "absolute",
    top: 15,
    right: 315,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 50,
  },
  topCenterView: {
    position: "absolute",
    top: 65,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  topCenterView2: {
    position: "absolute",
    top: 100,
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
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
