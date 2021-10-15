import React from "react";
import { View, Text } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES } from "../container/theme";

// import dos componenentes que seram exibidos pela tabnavigation
import Home from "../../screens/Home";
import Favorites from "../../screens/Favorites";
import Profiler from "../../screens/Profiler";
import Cart from "../../screens/Cart";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: COLORS.primary,
          position: "absolute",
          height: 50,
          paddingBottom: 10,
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: COLORS.white,
        tabInactiveTintColor: COLORS.grey,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profiler"
        component={Profiler}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
