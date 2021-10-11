import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../../../src/container/theme";

export default function CardProduct(props) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.image}
        source={props.url}
        resizeMode="cover"
      />
      <View>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>R$ 119,90</Text>
        <Text style={{color: 'white', fontSize: 14}}>Nike Air Max 90</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '45%',
    height: 220,
    // backgroundColor: COLORS.disabled,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 15,
    marginBottom: 15
  },
  image: {
    width: 120,
    height: 100,
  },
});
