// components/Loading.tsx
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Loading= () => {
  return (
    <LinearGradient colors={["#0F2851", "#000000"]} style={styles.container}>
        <ActivityIndicator size="large" color="#FFC400" />
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
});

export default Loading;
