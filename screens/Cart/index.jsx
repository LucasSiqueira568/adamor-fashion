import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import styles from "./style";

import { COLORS } from "../../src/container/theme";
import { Container } from "../../src/context";
import products from '../../data/products'

export default function Cart({ navigation, route }) {
  const { hello } = useContext(Container);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: 10 }}
        >
          <SimpleLineIcons
            style={{ marginLeft: 15 }}
            name="arrow-left"
            size={20}
            color={COLORS.white}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Carrinho</Text>
      </View>
    
      <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("Details")}>
        <View style={styles.card}>
          <View style={styles.containerImage}>
            <Image
              style={styles.image}
              source={require('../../src/assets/tenis-banner-2.png')}
            />
          </View>
          <View style={styles.description}>
            <Text style={{ fontSize: 16 }}>Nike Air Max 90</Text>
            <Text style={{ fontSize: 13, color: COLORS.grey }}>Tamanho 39</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>R$ 119,90</Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>
  );
}
