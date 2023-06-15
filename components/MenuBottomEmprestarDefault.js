import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const MenuBottomEmprestarDefault = ({ style }) => {
  return (
    <View style={[styles.menubottomEmprestardefault, style]}>
      <View style={[styles.iconDollarAlt, styles.iconDollarAltPosition]}>
        <View style={styles.iconDollarAlt1}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector14.png")}
          />
        </View>
      </View>
      <View style={[styles.emprestarWrapper, styles.iconDollarAltPosition]}>
        <Text style={styles.emprestar}>Emprestar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconDollarAltPosition: {
    position: "absolute",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 21,
    height: 35,
  },
  iconDollarAlt1: {
    borderRadius: Border.br_16xl,
    backgroundColor: Color.laranja02,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  iconDollarAlt: {
    height: "72.37%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "27.63%",
    left: "0%",
    flexDirection: "row",
  },
  emprestar: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.ubuntuRegular,
    color: Color.cinzaPagFI,
    textAlign: "left",
  },
  emprestarWrapper: {
    height: "25%",
    width: "100.3%",
    top: "75%",
    right: "-0.15%",
    bottom: "0%",
    left: "-0.15%",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10xs,
    flexDirection: "row",
  },
  menubottomEmprestardefault: {
    width: 52,
    height: 76,
  },
});

export default MenuBottomEmprestarDefault;
