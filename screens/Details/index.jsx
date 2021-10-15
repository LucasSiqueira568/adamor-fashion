import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons/";
import styles from "./style";
import { COLORS } from "../../src/container/theme";

export default function Details({ navigation, route }) {
  const [icon, setIcon] = useState(true);
  const product = route.params;

  const sizes = ["38", "39", "41", "42", "43", "44"];
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => navigation.goBack()}
        >
          <SimpleLineIcons
            style={{ marginLeft: 15 }}
            name="arrow-left"
            size={20}
            color={COLORS.white}
          />
          <Text style={{ color: COLORS.white, marginLeft: 3 }}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIcon(!icon)}
          style={{ marginRight: 15 }}
        >
          {icon ? (
            <Ionicons name="heart" size={35} color="white" />
          ) : (
            <Ionicons name="heart-half" size={35} color="white" />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image source={product.img} style={styles.image} />
      </View>

      <View
        style={{
          backgroundColor: COLORS.black,
          height: "100%",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: COLORS.white,
            marginLeft: 15,
            marginTop: 10,
          }}
        >
          {product.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "grey",
            marginLeft: 15,
            marginTop: 10,
          }}
        >
          {product.description}
        </Text>

        <ScrollView
          horizontal
          contentContainerStyle={{
            marginTop: 10,
          }}
        >
          {sizes.map((item) => {
            return (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.white,
                  width: 60,
                  height: 40,
                  borderRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 15,
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 19,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "20%",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 15,
            }}
          >
            R$ {product.price}
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: COLORS.white,
              width: 160,
              height: 60,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <Text
              style={{
                color: COLORS.black,
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Adicionar ao carrinho
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
