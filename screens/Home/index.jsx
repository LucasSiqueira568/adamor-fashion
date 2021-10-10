import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./style";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fashion</Text>
      <View style={styles.header}>
        <TextInput style={styles.input} placeholder="Digite sua pesquisa..." />
      </View>
    </View>
  );
}
