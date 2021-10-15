import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../screens/Home";
import Details from "../../screens/Details";
import TabNavigator from "../../src/TabNavigation/tabNavigation";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigation" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="TabNavigation" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
