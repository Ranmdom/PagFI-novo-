import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const MenuBottomDevedoresDefault = ({ style }) => {
  return (
    <View style={[styles.menubottomDevedoresdefault, style]}>
      <View style={[styles.iconUsers, styles.iconUsersFlexBox]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector15.png")}
        />
      </View>
      <View style={[styles.devedoresWrapper, styles.iconUsersFlexBox]}>
        <Text style={styles.devedores}>Devedores</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconUsersFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  iconUsers: {
    height: "80%",
    width: "74.3%",
    top: "0%",
    right: "12.85%",
    bottom: "20%",
    left: "12.85%",
    padding: Padding.p_3xs,
  },
  devedores: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.ubuntuRegular,
    color: Color.preto,
    textAlign: "left",
  },
  devedoresWrapper: {
    height: "38%",
    width: "100.3%",
    top: "62%",
    right: "-0.15%",
    bottom: "0%",
    left: "-0.15%",
    overflow: "hidden",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10xs,
  },
  menubottomDevedoresdefault: {
    width: 54,
    height: 50,
  },
});

export default MenuBottomDevedoresDefault;
