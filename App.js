import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

import Home from "./screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
