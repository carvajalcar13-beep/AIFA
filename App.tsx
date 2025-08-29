import * as React from "react";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import Login from "./src/screen/Auth/Login";
import { COLORS } from "./src/COLOR";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"; 
import Registro from "./src/screen/Auth/Registro";

export default function App() {
  const theme = {
    ...DefaultTheme,
    myOwnProperty: true,
    colors: {
      ...DefaultTheme.colors,
      myOwnColor: "#BADA55",
      primary: COLORS.PRIMARY,
    },
  };
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>  
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registro" component={Registro} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
