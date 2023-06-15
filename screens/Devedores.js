import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Devedores = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.devedores}>
      <View style={styles.devedoresChild} />
      <View style={[styles.devedoresInner, styles.devedoresInnerSpaceBlock]}>
        <View style={[styles.instanceChild, styles.instanceLayout]} />
      </View>
      <View style={[styles.frameView, styles.devedoresInnerSpaceBlock]}>
        <View style={[styles.instanceChild, styles.instanceLayout]} />
      </View>
      <Text style={styles.devedores1}>Devedores</Text>
      <View style={styles.iconUsers}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
      </View>
      <Pressable
        style={styles.iconChevronLeft}
        onPress={() => navigation.navigate("TelaPrincipal")}
      >
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
      </Pressable>
      <View style={[styles.iconChevronDown, styles.iconChevronDownPosition]}>
        <Image
          style={styles.vectorIcon5}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </View>
      <View style={[styles.devedoresItem, styles.devedoresItemPosition]} />
      <View style={[styles.rectangleView, styles.devedoresChildLayout]} />
      <Text style={[styles.r0000, styles.textPosition]}>R$: 00,00</Text>
      <Text style={[styles.nomeESobrenome, styles.nomeTypo]}>
        Nome e Sobrenome do devedor
      </Text>
      <Text style={[styles.text, styles.textPosition]}>000.000.000-00</Text>
      <Text style={[styles.text1, styles.textPosition]}>(81) 99999-9999</Text>
      <Pressable
        style={[styles.iconDollarAlt2, styles.iconPosition]}
        onPress={() => navigation.navigate("Frame44")}
      >
        <Image
          style={styles.vectorIcon6}
          contentFit="cover"
          source={require("../assets/vector17.png")}
        />
      </Pressable>
      <View style={[styles.devedoresChild1, styles.devedoresChildPosition2]} />
      <View style={[styles.devedoresChild2, styles.devedoresChildPosition2]} />
      <Text style={[styles.r00001, styles.textPosition]}>R$: 00,00</Text>
      <Text style={[styles.nomeESobrenome1, styles.nomeTypo]}>
        Nome e Sobrenome do devedor
      </Text>
      <Text style={[styles.text2, styles.textPosition]}>000.000.000-00</Text>
      <Text style={[styles.text3, styles.textPosition]}>(81) 99999-9999</Text>
      <Pressable
        style={[styles.iconDollarAlt3, styles.iconPosition]}
        onPress={() => navigation.navigate("Frame44")}
      >
        <Image
          style={styles.vectorIcon6}
          contentFit="cover"
          source={require("../assets/vector17.png")}
        />
      </Pressable>
      <View style={[styles.devedoresChild3, styles.devedoresChildPosition1]} />
      <View style={[styles.devedoresChild4, styles.devedoresChildPosition1]} />
      <Text style={[styles.r00002, styles.textPosition]}>R$: 00,00</Text>
      <Text style={[styles.nomeESobrenome2, styles.nomeTypo]}>
        Nome e Sobrenome do devedor
      </Text>
      <Text style={[styles.text4, styles.textPosition]}>000.000.000-00</Text>
      <Text style={[styles.text5, styles.textPosition]}>(81) 99999-9999</Text>
      <Pressable
        style={[styles.iconDollarAlt4, styles.iconPosition]}
        onPress={() => navigation.navigate("Frame44")}
      >
        <Image
          style={styles.vectorIcon6}
          contentFit="cover"
          source={require("../assets/vector17.png")}
        />
      </Pressable>
      <View style={[styles.devedoresChild5, styles.devedoresChildPosition]} />
      <View style={[styles.devedoresChild6, styles.devedoresChildPosition]} />
      <Text style={[styles.r00003, styles.textPosition]}>R$: 00,00</Text>
      <Text style={[styles.nomeESobrenome3, styles.nomeTypo]}>
        Nome e Sobrenome do devedor
      </Text>
      <Text style={[styles.text6, styles.textPosition]}>000.000.000-00</Text>
      <Text style={[styles.text7, styles.textPosition]}>(81) 99999-9999</Text>
      <Pressable
        style={[styles.iconDollarAlt5, styles.iconPosition]}
        onPress={() => navigation.navigate("Frame44")}
      >
        <Image
          style={styles.vectorIcon6}
          contentFit="cover"
          source={require("../assets/vector17.png")}
        />
      </Pressable>
      <View style={[styles.devedoresInner1, styles.iconChevronDownPosition]}>
        <View style={[styles.instanceInner, styles.instanceLayout]} />
      </View>
      <View style={[styles.devedoresInner2, styles.devedoresInnerSpaceBlock]}>
        <View style={[styles.instanceChild, styles.instanceLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  devedoresInnerSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
    left: 1,
  },
  instanceLayout: {
    height: 1,
    borderTopWidth: 1,
    width: 360,
    borderStyle: "solid",
  },
  textClr: {
    color: Color.cinzaPagFI,
    fontSize: FontSize.h7_size,
  },
  menubottonInciodefaultPosition: {
    top: "34.21%",
    height: "65.79%",
    bottom: "0%",
    position: "absolute",
  },
  iconPosition1: {
    bottom: "20%",
    height: "80%",
    top: "0%",
    padding: Padding.p_3xs,
    position: "absolute",
  },
  wrapperPosition: {
    top: "62%",
    height: "38%",
    paddingVertical: Padding.p_10xs,
    bottom: "0%",
    flexDirection: "row",
    paddingHorizontal: 0,
    position: "absolute",
  },
  emprestarTypo: {
    fontFamily: FontFamily.h7,
    textAlign: "left",
  },
  iconChevronDownPosition: {
    top: 371,
    position: "absolute",
  },
  devedoresItemPosition: {
    height: 119,
    left: 20,
    top: 90,
    position: "absolute",
  },
  devedoresChildLayout: {
    width: 10,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_9xs,
    backgroundColor: Color.laranja02,
  },
  textPosition: {
    left: 38,
    fontFamily: FontFamily.h7,
    textAlign: "left",
    position: "absolute",
  },
  nomeTypo: {
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    fontSize: FontSize.h6_size,
    left: 38,
    textAlign: "left",
    color: Color.preto,
    position: "absolute",
  },
  iconPosition: {
    left: 269,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  devedoresChildPosition2: {
    top: 238,
    height: 119,
    left: 20,
    position: "absolute",
  },
  devedoresChildPosition1: {
    top: 387,
    height: 119,
    left: 20,
    position: "absolute",
  },
  devedoresChildPosition: {
    top: 534,
    height: 119,
    left: 20,
    position: "absolute",
  },
  devedoresChild: {
    top: 739,
    left: 0,
    height: 61,
    width: 360,
    borderColor: "#b6b6b6",
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.branco,
  },
  instanceChild: {
    borderColor: "#b6b6b6",
    height: 1,
    borderTopWidth: 1,
  },
  devedoresInner: {
    top: 73,
    position: "absolute",
  },
  frameView: {
    top: 222,
    position: "absolute",
  },
  devedores1: {
    top: 22,
    left: 125,
    fontWeight: "700",
    fontFamily: FontFamily.h2,
    textAlign: "left",
    color: Color.preto,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  vectorIcon: {
    width: 20,
    height: 20,
  },
  iconUsers: {
    top: 16,
    left: 85,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon1: {
    height: 16,
    width: 13,
  },
  iconChevronLeft: {
    top: 18,
    left: 43,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  vectorIcon5: {
    width: 15,
    height: 9,
  },
  iconChevronDown: {
    left: -363,
    padding: Padding.p_3xs,
  },
  devedoresItem: {
    width: 319,
    backgroundColor: Color.cInzaPagFi2,
    borderRadius: Border.br_9xs,
  },
  rectangleView: {
    height: 119,
    left: 20,
    top: 90,
    position: "absolute",
  },
  r0000: {
    top: 129,
    color: Color.preto,
    fontSize: FontSize.size_5xl,
    left: 38,
  },
  nomeESobrenome: {
    top: 102,
  },
  text: {
    top: 164,
    color: Color.cinzaPagFI,
    fontSize: FontSize.h7_size,
  },
  text1: {
    top: 180,
    color: Color.cinzaPagFI,
    fontSize: FontSize.h7_size,
  },
  vectorIcon6: {
    height: 23,
    width: 13,
  },
  iconDollarAlt2: {
    top: 157,
  },
  devedoresChild1: {
    width: 319,
    backgroundColor: Color.cInzaPagFi2,
    borderRadius: Border.br_9xs,
  },
  devedoresChild2: {
    width: 10,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_9xs,
    backgroundColor: Color.laranja02,
  },
  r00001: {
    top: 277,
    color: Color.preto,
    fontSize: FontSize.size_5xl,
    left: 38,
  },
  nomeESobrenome1: {
    top: 250,
  },
  text2: {
    top: 312,
    color: Color.cinzaPagFI,
    fontSize: FontSize.h7_size,
  },
  text3: {
    top: 328,
    color: Color.cinzaPagFI,
    fontSize: FontSize.h7_size,
  },
  iconDollarAlt3: {
    top: 305,
  },
  devedoresChild3: {
    width: 319,
    backgroundColor: Color.cInzaPagFi2,
    borderRadius: Border.br_9xs,
  },
  devedoresChild4: {
    width: 10,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_9xs,
    backgroundColor: Color.laranja02,
  },
  r00002: {
    top: 426,
    color: Color.preto,
    fontSize: FontSize.size_5xl,
    left: 38,
  },
  nomeESobrenome2: {
    top: 399,
  },
  text4: {
    top: 461,
    color: Color.cinzaPagFI,
    fontSize: FontSize.h7_size,
  },
  text5: {
    top: 477,
    color: Color.cinzaPagFI,
    fontSize: FontSize.h7_size,
  },
  iconDollarAlt4: {
    top: 454,
  },
  devedoresChild5: {
    width: 319,
    backgroundColor: Color.cInzaPagFi2,
    borderRadius: Border.br_9xs,
  },
  devedoresChild6: {
    width: 10,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_9xs,
    backgroundColor: Color.laranja02,
  },
  r00003: {
    top: 573,
    color: Color.preto,
    fontSize: FontSize.size_5xl,
    left: 38,
  },
  nomeESobrenome3: {
    top: 546,
  },
  text6: {
    top: 608,
    color: Color.cinzaPagFI,
    fontSize: FontSize.h7_size,
  },
  text7: {
    top: 624,
    color: Color.cinzaPagFI,
    fontSize: FontSize.h7_size,
  },
  iconDollarAlt5: {
    top: 601,
  },
  instanceInner: {
    borderColor: "#e0e0e0",
  },
  devedoresInner1: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
    left: 1,
  },
  devedoresInner2: {
    top: 517,
    position: "absolute",
  },
  devedores: {
    borderColor: "#000",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.branco,
  },
});

export default Devedores;
