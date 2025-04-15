import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from '../screens/index';
import HomeScreen from '../screens/home';

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Index', // Rota inicial se liga e, dps nós troca pra A main lá
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
