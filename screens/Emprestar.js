import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Emprestar = () => {
  const [rectangleTextInput, setRectangleTextInput] = useState();
  const [rectangleTextInput1, setRectangleTextInput1] = useState();
  const [rectangleTextInput2, setRectangleTextInput2] = useState();
  const [rectangleTextInput3, setRectangleTextInput3] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.emprestar}>
      <View style={styles.emprestarChild} />
      <View style={styles.emprestarInner}>
        <View style={styles.instanceChild} />
      </View>
      <Text
        style={[styles.cadastrandoDevedor, styles.emprestar1Typo]}
      >{`Cadastrando
Devedor`}</Text>
      <RNKTextInput
        style={[styles.emprestarItem, styles.emprestarChildLayout]}
        placeholder="Place your text"
        value={rectangleTextInput}
        onChangeText={setRectangleTextInput}
      />
      <RNKTextInput
        style={[styles.rectangleRnktextinput, styles.emprestarChildLayout]}
        placeholder="Place your text"
        value={rectangleTextInput1}
        onChangeText={setRectangleTextInput1}
      />
      <RNKTextInput
        style={[styles.emprestarChild1, styles.emprestarChildLayout]}
        placeholder="Place your text"
        value={rectangleTextInput2}
        onChangeText={setRectangleTextInput2}
      />
      <RNKTextInput
        style={[styles.emprestarChild2, styles.emprestarChildLayout]}
        placeholder="Place your text"
        value={rectangleTextInput3}
        onChangeText={setRectangleTextInput3}
      />
      <Text style={styles.useradmin}>@user.admin</Text>
      <Text style={[styles.nomeCompleto, styles.cpfTypo]}>Nome completo:</Text>
      <Text style={[styles.telefone, styles.cpfTypo]}>Telefone:</Text>
      <Text style={[styles.cpf, styles.cpfTypo]}>CPF:</Text>
      <Text style={[styles.valor, styles.cpfTypo]}>Valor:</Text>
      <Text style={[styles.r0000, styles.r0000Typo]}>R$: 00,00</Text>
      <View style={[styles.frameView, styles.emprestarInnerPosition]}>
        <View style={[styles.instanceItem, styles.instanceLayout]} />
      </View>
      <View style={[styles.emprestarInner1, styles.emprestarInnerPosition]}>
        <View style={[styles.instanceItem, styles.instanceLayout]} />
      </View>
      <View style={[styles.emprestarInner2, styles.emprestarInnerPosition]}>
        <View style={[styles.instanceItem, styles.instanceLayout]} />
      </View>
      <View style={[styles.emprestarInner3, styles.emprestarInnerPosition]}>
        <View style={[styles.instanceChild1, styles.instanceLayout]} />
      </View>
      <View style={[styles.bottonEmprestar, styles.iconDollarAlt1SpaceBlock]}>
        <Text style={[styles.emprestar1, styles.emprestar1Typo]}>
          Emprestar
        </Text>
      </View>
      <Pressable
        style={[styles.iconChevronLeft, styles.iconSpaceBlock]}
        onPress={() => navigation.navigate("TelaPrincipal")}
      >
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
      </Pressable>
      <View style={[styles.iconUserAdd, styles.iconSpaceBlock]}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector21.png")}
        />
      </View>
      <View style={styles.menu}>
        <View style={styles.menubottomEmprestardefault}>
          <View style={[styles.iconDollarAlt, styles.iconPosition1]}>
            <View
              style={[styles.iconDollarAlt1, styles.iconDollarAlt1SpaceBlock]}
            >
              <Image
                style={styles.vectorIcon2}
                contentFit="cover"
                source={require("../assets/vector6.png")}
              />
            </View>
          </View>
          <View style={styles.emprestarWrapper}>
            <Text style={[styles.emprestar2, styles.devedoresTypo]}>
              Emprestar
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.menubottomDevedoresdefault,
            styles.menubottonInciodefaultPosition,
          ]}
        >
          <View style={[styles.iconUsers, styles.iconPosition]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
          </View>
          <View style={[styles.devedoresWrapper, styles.wrapperPosition]}>
            <Text style={[styles.devedores, styles.devedoresTypo]}>
              Devedores
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.menubottonInciodefault,
            styles.menubottonInciodefaultPosition,
          ]}
        >
          <View style={[styles.iconHome, styles.iconPosition]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
          </View>
          <View style={[styles.incioWrapper, styles.wrapperPosition]}>
            <Text style={[styles.devedores, styles.devedoresTypo]}>Início</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emprestar1Typo: {
    fontFamily: FontFamily.h2,
    fontWeight: "700",
  },
  emprestarChildLayout: {
    width: 331,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_9xs,
    left: 15,
    position: "absolute",
  },
  cpfTypo: {
    left: 27,
    textAlign: "left",
    fontSize: FontSize.h6_size,
    fontFamily: FontFamily.h2,
    fontWeight: "700",
    position: "absolute",
  },
  r0000Typo: {
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  emprestarInnerPosition: {
    padding: Padding.p_9xs,
    left: 26,
    position: "absolute",
  },
  instanceLayout: {
    width: 302,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  iconDollarAlt1SpaceBlock: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  iconSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  iconPosition1: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  devedoresTypo: {
    fontFamily: FontFamily.h7,
    fontSize: FontSize.h7_size,
    textAlign: "left",
  },
  menubottonInciodefaultPosition: {
    top: "34.21%",
    height: "65.79%",
    bottom: "0%",
    position: "absolute",
  },
  iconPosition: {
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
  emprestarChild: {
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
    height: 1,
    borderTopWidth: 1,
    width: 360,
    borderColor: "#b6b6b6",
    borderStyle: "solid",
  },
  emprestarInner: {
    top: 73,
    left: 1,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
    position: "absolute",
  },
  cadastrandoDevedor: {
    top: 8,
    left: 117,
    textAlign: "center",
    color: Color.preto,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  emprestarItem: {
    top: 127,
  },
  rectangleRnktextinput: {
    top: 219,
  },
  emprestarChild1: {
    top: 311,
  },
  emprestarChild2: {
    top: 403,
  },
  useradmin: {
    top: 92,
    textAlign: "left",
    fontSize: FontSize.h6_size,
    left: 15,
    color: Color.preto,
    fontFamily: FontFamily.h2,
    fontWeight: "700",
    position: "absolute",
  },
  nomeCompleto: {
    top: 134,
    color: Color.preto,
  },
  telefone: {
    top: 226,
    color: Color.cinzaPagFI,
  },
  cpf: {
    top: 318,
    color: Color.cinzaPagFI,
  },
  valor: {
    top: 410,
    color: Color.cinzaPagFI,
  },
  r0000: {
    top: 427,
    left: 222,
    fontWeight: "500",
    fontFamily: FontFamily.ubuntuMedium,
    color: Color.cinzaPagFI,
    textAlign: "left",
  },
  instanceItem: {
    borderColor: "#b6b6b6",
    width: 302,
  },
  frameView: {
    top: 275,
  },
  emprestarInner1: {
    top: 367,
  },
  emprestarInner2: {
    top: 459,
  },
  instanceChild1: {
    width: 302,
    borderColor: "#000",
  },
  emprestarInner3: {
    top: 183,
  },
  emprestar1: {
    fontSize: FontSize.botton2_size,
    color: Color.branco,
    textAlign: "left",
  },
  bottonEmprestar: {
    top: 495,
    left: 211,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.cinzaPagFI,
    paddingHorizontal: Padding.p_16xl,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    width: 13,
    height: 16,
  },
  iconChevronLeft: {
    top: 18,
    left: 43,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  vectorIcon1: {
    width: 20,
    height: 20,
  },
  iconUserAdd: {
    top: 16,
    left: 77,
  },
  vectorIcon2: {
    width: 21,
    height: 35,
  },
  iconDollarAlt1: {
    borderRadius: Border.br_16xl,
    backgroundColor: Color.laranja02,
    paddingHorizontal: Padding.p_mini,
  },
  iconDollarAlt: {
    height: "72.37%",
    bottom: "27.63%",
    top: "0%",
    right: "0%",
    flexDirection: "row",
    position: "absolute",
  },
  emprestar2: {
    color: Color.preto,
  },
  emprestarWrapper: {
    height: "25%",
    top: "75%",
    paddingVertical: Padding.p_10xs,
    left: "0%",
    right: "0%",
    bottom: "0%",
    flexDirection: "row",
    paddingHorizontal: 0,
    position: "absolute",
    width: "100%",
  },
  menubottomEmprestardefault: {
    height: "100%",
    width: "15.66%",
    right: "43.07%",
    left: "41.27%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  iconUsers: {
    width: "74.07%",
    right: "12.96%",
    left: "12.96%",
    flexDirection: "row",
    height: "80%",
  },
  devedores: {
    color: Color.cinzaPagFI,
  },
  devedoresWrapper: {
    left: "0%",
    right: "0%",
    width: "100%",
    overflow: "hidden",
  },
  menubottomDevedoresdefault: {
    width: "16.27%",
    right: "6.93%",
    left: "76.81%",
  },
  iconHome: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  incioWrapper: {
    width: "67.5%",
    right: "17.5%",
    left: "15%",
  },
  menubottonInciodefault: {
    width: "12.05%",
    right: "78.61%",
    left: "9.34%",
  },
  menu: {
    top: 714,
    left: 14,
    width: 332,
    height: 76,
    position: "absolute",
  },
  emprestar: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.branco,
    borderColor: "#000",
  },
});

export default Emprestar;
