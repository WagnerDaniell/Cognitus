import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View,StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ErrorHome= () => {
    const navigation = useNavigation()

  return (
    <LinearGradient colors={["#0F2851", "#000000"]} style={styles.container}>
        <Text style={styles.textMain}>Algo deu errado. Tente novamente mais tarde.</Text>
         <View style={styles.inputWrapper}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Login")}
                accessibilityLabel="button">
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
         </View>
        

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
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
        marginLeft: "37%"
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
});

export default ErrorHome;
