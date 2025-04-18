import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../screens/index';
import HomeScreen from '../screens/home';
import QuestionScreen from '../screens/questions';
import RegisterScreen from '../screens/register';
import EndQuest from '../components/endQuest';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Index" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Questions" component={QuestionScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="EndQuest" component={EndQuest} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
