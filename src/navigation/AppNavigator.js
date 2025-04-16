import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "../screens/index"; // Verifique o caminho
import HomeScreen from "../screens/home";
import QuestionScreen from "../screens/questions";

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Home: HomeScreen,
    Questions: QuestionScreen,
  },
  {
    initialRouteName: "Index", // A tela inicial
    headerMode: "none", // Desabilita o cabeçalho
  }
);

export default createAppContainer(AppNavigator);
