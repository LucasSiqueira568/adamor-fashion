import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, SIZES } from "../../../src/container/theme";

export default function Card(props) {

  return (
    <View
      style={{
        width: 360,
        height: 200,
        margin: 15,
        backgroundColor: props.color,
        borderRadius: 15,
      }}
    >
      <Text style={styles.title}>{props.title}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: COLORS.black }}>{props.button}</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={props.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.h2,
    color: COLORS.white,
    fontWeight: "bold",
    margin: 15,
    // fontFamily: 'Inter_900Black',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 160,
    height: 130,
    position: "absolute",
    top: 40,
    right: 10,
  },
});
