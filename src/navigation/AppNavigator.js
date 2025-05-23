import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "../screens/index";
import HomeScreen from "../screens/home";
import QuestionScreen from "../screens/questions";
import RegisterScreen from "../screens/register";
import EndQuest from "../components/endQuest";
import LoginScreen from "../screens/login";
import MainScreen from "../screens/main";
import ErrorLogin from "../components/errorLogin";
import ErrorHome from "../components/errorHome";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Questions" component={QuestionScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="EndQuest" component={EndQuest} />
      <Stack.Screen name="ErrorLogin" component={ErrorLogin} />
      <Stack.Screen name="ErrorHome" component={ErrorHome} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
