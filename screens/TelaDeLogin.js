import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Input as RNKTextInput } from "@ui-kitten/components";
import { Image } from "expo-image";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const TelaDeLogin = () => {
  const [frameTextInput, setFrameTextInput] = useState();
  const [senhaTextInput, setSenhaTextInput] = useState();

  return (
    <View style={[styles.telaDeLogin, styles.telaLayout]}>
      <Pressable style={[styles.bottonEntrar, styles.bottonSpaceBlock]}>
        <Text style={[styles.entrar, styles.pagfiTypo]}>Entrar</Text>
      </Pressable>
      <Pressable style={[styles.bottonCadastreSe, styles.bottonSpaceBlock]}>
        <Text style={[styles.entrar, styles.pagfiTypo]}>Cadastre-se</Text>
      </Pressable>
      <RNKTextInput
        style={[styles.telaDeLoginChild, styles.senhaSpaceBlock]}
        placeholder="Nome ou telefone:"
        value={frameTextInput}
        onChangeText={setFrameTextInput}
        placeholderTextColor="#b6b6b6"
        textStyle={styles.frameTextInputText}
      />
      <RNKTextInput
        style={[styles.senha, styles.senhaSpaceBlock]}
        placeholder="Senha:"
        value={senhaTextInput}
        onChangeText={setSenhaTextInput}
        placeholderTextColor="#b6b6b6"
        textStyle={styles.senhaTextInputText}
      />
      <View style={[styles.iconUser, styles.vectorSpaceBlock]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <View style={[styles.vector, styles.vectorSpaceBlock]}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <View style={[styles.line, styles.lineSpaceBlock]}>
        <View style={[styles.lineNomeCompleto, styles.telaDeLoginItemBorder]} />
      </View>
      <View style={[styles.line1, styles.lineSpaceBlock]}>
        <View style={[styles.lineNomeCompleto, styles.telaDeLoginItemBorder]} />
      </View>
      <View style={[styles.telaDeLoginItem, styles.telaDeLoginItemBorder]} />
      <Image
        style={styles.iconEyecinza}
        contentFit="cover"
        source={require("../assets/-icon-eyecinza.png")}
      />
      <View style={[styles.pagfiWrapper, styles.vectorSpaceBlock]}>
        <Text style={[styles.pagfi, styles.pagfiTypo]}>
          <Text style={styles.pag}>Pag</Text>
          <Text style={styles.fi}>Fi</Text>
        </Text>
      </View>
      <View style={[styles.pagfiWrapper, styles.vectorSpaceBlock]}>
        <Text style={[styles.pagfi, styles.pagfiTypo]}>
          <Text style={styles.pag}>Pag</Text>
          <Text style={styles.fi}>Fi</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameTextInputText: {
    color: "#b6b6b6",
  },
  senhaTextInputText: {
    color: "#b6b6b6",
  },
  telaLayout: {
    borderWidth: 1,
    backgroundColor: Color.branco,
  },
  bottonSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_31xl,
    flexDirection: "row",
    backgroundColor: Color.laranja02,
    borderRadius: Border.br_13xl,
    position: "absolute",
  },
  pagfiTypo: {
    textAlign: "left",
    fontFamily: FontFamily.h2,
    fontWeight: "700",
  },
  senhaSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: 0,
    left: 83,
    flexDirection: "row",
    position: "absolute",
  },
  vectorSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  lineSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
    left: 83,
    position: "absolute",
  },
  telaDeLoginItemBorder: {
    borderColor: "#b6b6b6",
    borderStyle: "solid",
  },
  entrar: {
    fontSize: FontSize.botton2_size,
    color: Color.branco,
  },
  bottonEntrar: {
    top: 484,
    left: 110,
  },
  bottonCadastreSe: {
    top: 538,
    left: 93,
  },
  telaDeLoginChild: {
    top: 354,
  },
  senha: {
    top: 417,
  },
  vectorIcon: {
    height: 17,
    width: 15,
  },
  iconUser: {
    top: 350,
    left: 48,
    padding: Padding.p_3xs,
  },
  vectorIcon1: {
    height: 18,
    width: 15,
  },
  vector: {
    top: 412,
    left: 48,
    padding: Padding.p_3xs,
  },
  lineNomeCompleto: {
    borderTopWidth: 1,
    width: 231,
    height: 1,
  },
  line: {
    top: 383,
  },
  line1: {
    top: 446,
  },
  telaDeLoginItem: {
    top: 749,
    left: 1,
    width: 359,
    height: 61,
    position: "absolute",
    borderWidth: 1,
    backgroundColor: Color.branco,
    borderColor: "#b6b6b6",
  },
  iconEyecinza: {
    top: 429,
    left: 298,
    height: 11,
    width: 15,
    position: "absolute",
  },
  pag: {
    color: Color.orangered,
  },
  fi: {
    color: Color.laranja02,
  },
  pagfi: {
    fontSize: FontSize.h2_size,
  },
  pagfiWrapper: {
    top: 206,
    left: 91,
  },
  telaDeLogin: {
    borderColor: "#000",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: Color.branco,
  },
});

export default TelaDeLogin;
