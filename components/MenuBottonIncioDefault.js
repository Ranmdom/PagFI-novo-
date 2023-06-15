import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const MenuBottonIncioDefault = ({ style }) => {
  return (
    <View style={[styles.menubottonInciodefault, style]}>
      <View style={styles.iconHome}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
      </View>
      <View style={styles.incioWrapper}>
        <Text style={styles.incio}>Início</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    width: 20,
    height: 20,
  },
  iconHome: {
    height: "80%",
    width: "100.3%",
    top: "0%",
    right: "-0.15%",
    bottom: "20%",
    left: "-0.15%",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  incio: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.ubuntuRegular,
    color: Color.cinzaPagFI,
    textAlign: "left",
  },
  incioWrapper: {
    height: "38%",
    width: "67.7%",
    top: "62%",
    right: "17.4%",
    bottom: "0%",
    left: "14.9%",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10xs,
    position: "absolute",
  },
  menubottonInciodefault: {
    width: 40,
    height: 50,
  },
});

export default MenuBottonIncioDefault;
