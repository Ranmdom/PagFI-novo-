import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const TelaDeCadastro1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.telaDeCadastro1, styles.telaLayout]}>
      <View style={[styles.line, styles.lineSpaceBlock]}>
        <View
          style={[styles.lineNomeCompleto, styles.lineNomeCompletoBorder]}
        />
      </View>
      <View style={[styles.line1, styles.lineSpaceBlock]}>
        <View
          style={[styles.lineNomeCompleto, styles.lineNomeCompletoBorder]}
        />
      </View>
      <View style={[styles.nome, styles.cpfSpaceBlock]}>
        <Text style={styles.nomeCompleto}>Nome completo:</Text>
      </View>
      <View style={[styles.eMail, styles.cpfSpaceBlock]}>
        <Text style={styles.nomeCompleto}>E-mail:</Text>
      </View>
      <View style={[styles.iconEditAlt, styles.iconSpaceBlock]}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.iconEmail, styles.iconPosition]}>
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
      <View
        style={[styles.telaDeCadastro1Child, styles.lineNomeCompletoBorder]}
      />
      <View style={[styles.line2, styles.lineSpaceBlock]}>
        <View
          style={[styles.lineNomeCompleto, styles.lineNomeCompletoBorder]}
        />
      </View>
      <View style={[styles.line3, styles.lineSpaceBlock]}>
        <View
          style={[styles.lineNomeCompleto, styles.lineNomeCompletoBorder]}
        />
      </View>
      <View style={[styles.telefoneWrapper, styles.cpfSpaceBlock]}>
        <Text style={styles.nomeCompleto}>Telefone:</Text>
      </View>
      <View style={[styles.cpf, styles.cpfSpaceBlock]}>
        <Text style={styles.nomeCompleto}>CPF:</Text>
      </View>
      <View style={[styles.iconCreditCard, styles.iconSpaceBlock]}>
        <Image
          style={styles.vectorIcon2}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </View>
      <View style={[styles.iconCall, styles.iconPosition]}>
        <Image
          style={styles.vectorIcon3}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <View style={[styles.line4, styles.lineSpaceBlock]}>
        <View
          style={[styles.lineNomeCompleto, styles.lineNomeCompletoBorder]}
        />
      </View>
      <View style={[styles.senha, styles.cpfSpaceBlock]}>
        <Text style={styles.nomeCompleto}>Senha:</Text>
      </View>
      <Image
        style={styles.iconEyecinza}
        contentFit="cover"
        source={require("../assets/-icon-eyecinza.png")}
      />
      <View style={[styles.vector, styles.iconSpaceBlock]}>
        <Image
          style={styles.vectorIcon4}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <Pressable
        style={styles.bottonCadastrarCliente}
        onPress={() => navigation.navigate("TelaPrincipal")}
      >
        <Text style={[styles.cadastrarCliente, styles.pagfiTypo]}>
          Concluir
        </Text>
      </Pressable>
      <View style={[styles.pagfiWrapper, styles.iconSpaceBlock]}>
        <Text style={[styles.pagfi, styles.pagfiTypo]}>
          <Text style={styles.pag}>Pag</Text>
          <Text style={styles.fi}>Fi</Text>
        </Text>
      </View>
      <View style={[styles.pagfiWrapper, styles.iconSpaceBlock]}>
        <Text style={[styles.pagfi, styles.pagfiTypo]}>
          <Text style={styles.pag}>Pag</Text>
          <Text style={styles.fi}>Fi</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  telaLayout: {
    borderWidth: 1,
    backgroundColor: Color.branco,
  },
  lineSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
    position: "absolute",
  },
  lineNomeCompletoBorder: {
    borderColor: "#b6b6b6",
    borderStyle: "solid",
  },
  cpfSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    paddingHorizontal: 0,
    position: "absolute",
  },
  iconSpaceBlock: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  iconPosition: {
    left: 27,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  pagfiTypo: {
    fontFamily: FontFamily.h2,
    fontWeight: "700",
    textAlign: "left",
  },
  lineNomeCompleto: {
    borderTopWidth: 1,
    width: 231,
    height: 1,
  },
  line: {
    top: 447,
    left: 66,
  },
  line1: {
    top: 384,
    left: 65,
  },
  nomeCompleto: {
    fontSize: FontSize.h7_size,
    fontFamily: FontFamily.h7,
    color: Color.cinzaPagFI,
    textAlign: "left",
  },
  nome: {
    top: 355,
    left: 65,
  },
  eMail: {
    top: 418,
    left: 66,
  },
  vectorIcon: {
    height: 18,
    width: 19,
  },
  iconEditAlt: {
    top: 350,
    left: 26,
    flexDirection: "row",
  },
  vectorIcon1: {
    height: 15,
    width: 19,
  },
  iconEmail: {
    top: 415,
  },
  telaDeCadastro1Child: {
    top: 749,
    left: 0,
    width: 359,
    height: 61,
    position: "absolute",
    borderWidth: 1,
    backgroundColor: Color.branco,
    borderColor: "#b6b6b6",
  },
  line2: {
    top: 573,
    left: 66,
  },
  line3: {
    top: 510,
    left: 66,
  },
  telefoneWrapper: {
    top: 481,
    left: 66,
  },
  cpf: {
    top: 544,
    left: 66,
  },
  vectorIcon2: {
    height: 12,
    width: 18,
  },
  iconCreditCard: {
    top: 543,
    left: 28,
  },
  vectorIcon3: {
    width: 18,
    height: 18,
  },
  iconCall: {
    top: 474,
  },
  line4: {
    top: 636,
    left: 66,
  },
  senha: {
    top: 607,
    left: 66,
  },
  iconEyecinza: {
    top: 619,
    left: 281,
    height: 11,
    width: 15,
    position: "absolute",
  },
  vectorIcon4: {
    width: 15,
    height: 18,
  },
  vector: {
    top: 600,
    left: 31,
    flexDirection: "row",
  },
  cadastrarCliente: {
    fontSize: FontSize.botton2_size,
    color: Color.branco,
  },
  bottonCadastrarCliente: {
    top: 674,
    left: 104,
    borderRadius: Border.br_13xl,
    backgroundColor: Color.laranja02,
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
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
    flexDirection: "row",
  },
  telaDeCadastro1: {
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

export default TelaDeCadastro1;
