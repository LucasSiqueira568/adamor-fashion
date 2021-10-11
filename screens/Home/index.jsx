import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

import { COLORS } from "../../src/container/theme";
import styles from "./style";

import Card from "../utils/Card";
import Category from "../utils/Category";
import CardProduct from "../utils/CardProduct";

export default function Home() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });
  return (
    <ScrollView style={styles.container}>
      {/* Header da aplicação */}
      <Text style={styles.title}>Fashion</Text>
      <View style={styles.header}>
        <TextInput style={styles.input} placeholder="Digite sua pesquisa..." />
      </View>
      {/* Cards dos produtos em destaque */}
      <View
        style={{
          marginTop: 15,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card
            title="Os melhores produtos estão em super promoção"
            button="Confira"
            img={require("../../src/assets/tenis-banner.png")}
            color={COLORS.card}
          />
          <Card
            title="As marcas mais famosas você encontra aqui"
            button="Confira"
            img={require("../../src/assets/tenis-banner-2.png")}
            color={COLORS.black}
          />
          <Card
            title="As melhores marcas do momento"
            button="Confira"
            img={require("../../src/assets/tenis-banner-3.png")}
            color={COLORS.background}
          />
        </ScrollView>
      </View>

      {/* Cards das categorias  */}

      <View>
        <Text
          style={{
            fontSize: 18,
            color: COLORS.white,
            marginLeft: 15,
            marginTop: 15,
            fontWeight: "bold",
          }}
        >
          Categorias populares
        </Text>
        <ScrollView horizontal={true}>
          <Category />
          <Category />
          <Category />
          <Category />
        </ScrollView>
      </View>

      <Text
        style={{
          fontSize: 18,
          color: COLORS.white,
          marginLeft: 15,
          marginTop: 30,
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        Sapatos
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <CardProduct url={require("../../src/assets/tenis-banner.png")} />
        <CardProduct url={require("../../src/assets/tenis-banner-2.png")} />
        <CardProduct url={require("../../src/assets/tenis-banner-3.png")} />
        <CardProduct url={require("../../src/assets/tenis-banner-4.png")} />
        <CardProduct url={require("../../src/assets/tenis-banner-5.png")} />
        <CardProduct url={require("../../src/assets/tenis-banner-6.png")} />
      </View>

      <Text
        style={{
          fontSize: 18,
          color: COLORS.white,
          marginLeft: 15,
          marginTop: 30,
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        Camisas
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <CardProduct url={require("../../src/assets/camisa-1.png")} />
        <CardProduct url={require("../../src/assets/camisa-2.png")} />
        <CardProduct url={require("../../src/assets/camisa-3.png")} />
        <CardProduct url={require("../../src/assets/camisa-4.png")} />
        <CardProduct url={require("../../src/assets/camisa-5.png")} />
        <CardProduct url={require("../../src/assets/camisa-6.png")} />
      </View>
    </ScrollView>
  );
}
