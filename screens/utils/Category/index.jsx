import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons/";

import { COLORS } from "../../../src/container/theme";

export default function Category(props) {
  return (
    <TouchableOpacity style={styles.category}>
      <View style={styles.icon}>
        <FontAwesome5 name="tshirt" size={20} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  category: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
    marginLeft: 15,
    marginTop: 15,
  },
  icon: {
      justifyContent: 'center',
      alignItems: 'center',
  }
 
});
