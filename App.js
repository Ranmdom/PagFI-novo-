const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import TelaDeCadastro1 from "./screens/TelaDeCadastro1";
import TelaDeLogin from "./screens/TelaDeLogin";
import TelaPrincipal from "./screens/TelaPrincipal";
import MeuPerfil from "./screens/MeuPerfil";
import Devedores from "./screens/Devedores";
import FrameScreen from "./screens/FrameScreen";
import FrameScreen1 from "./screens/FrameScreen1";
import Emprestar from "./screens/Emprestar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Ubuntu_regular: require("./assets/fonts/Ubuntu_regular.ttf"),
    Ubuntu_medium: require("./assets/fonts/Ubuntu_medium.ttf"),
    Ubuntu_bold: require("./assets/fonts/Ubuntu_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="TelaDeCadastro1"
              component={TelaDeCadastro1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaDeLogin"
              component={TelaDeLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaPrincipal"
              component={TelaPrincipal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MeuPerfil"
              component={MeuPerfil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Devedores"
              component={Devedores}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame44"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame45"
              component={FrameScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Emprestar"
              component={Emprestar}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
