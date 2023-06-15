const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import TelaDeCadastro1 from "./screens/TelaDeCadastro1";
import TelaDeLogin from "./screens/TelaDeLogin";
import MeuPerfil from "./screens/MeuPerfil";
import FrameScreen from "./screens/FrameScreen";
import FrameScreen1 from "./screens/FrameScreen1";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Ubuntu_regular: require("./assets/fonts/Ubuntu_regular.ttf"),
    Ubuntu_medium: require("./assets/fonts/Ubuntu_medium.ttf"),
    Ubuntu_bold: require("./assets/fonts/Ubuntu_bold.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="TelaDeLogin"
              screenOptions={{ headerShown: false }}
            >
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
                name="MeuPerfil"
                component={MeuPerfil}
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
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
