import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Padding } from "../GlobalStyles";

const Menu = ({ style }) => {
  return <View style={[styles.menu, style]} />;
};

const styles = StyleSheet.create({
  emprestarTypo: {
    textAlign: "left",
    fontFamily: FontFamily.ubuntuRegular,
    fontSize: FontSize.size_2xs,
  },
  menubottonInciodefaultPosition: {
    top: "34.21%",
    height: "65.79%",
    bottom: "0%",
    position: "absolute",
  },
  iconPosition: {
    padding: Padding.p_3xs,
    bottom: "20%",
    height: "80%",
    top: "0%",
    position: "absolute",
  },
  wrapperPosition: {
    top: "62%",
    height: "38%",
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: 0,
    flexDirection: "row",
    bottom: "0%",
    position: "absolute",
  },
  menu: {
    width: 331,
    height: 76,
  },
});

export default Menu;
