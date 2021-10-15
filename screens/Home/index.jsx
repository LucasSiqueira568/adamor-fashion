import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

import { COLORS } from "../../src/container/theme";
import styles from "./style";

import Card from "../utils/Card";
import Category from "../utils/Category";
import products from "../../data/products";

export default function Home({ navigation }) {
  const CardProduct = ({ product }) => {
    return (
      <TouchableOpacity
        style={{
          margin: 15,
        }}
        onPress={() => navigation.navigate("Details", product)}
      >
        <Image
          style={{
            width: 120,
            height: 100,
          }}
          source={product.img}
          resizeMode="cover"
        />
        <View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            R$ {product.price}
          </Text>
          <Text style={{ color: "white", fontSize: 14 }}>{product.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      {/* Header da aplicação */}
      <Text style={styles.title}>Fashion</Text>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua pesquisa..."
          placeholderTextColor={COLORS.grey}
        />
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
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            marginLeft: 15,
            marginBottom: 20,
            paddingBottom: 50,
            justifyContent: "center",
          }}
          numColumns={2}
          data={products}
          renderItem={({ item }) => {
            return <CardProduct product={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
}
