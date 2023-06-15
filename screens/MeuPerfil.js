import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const MeuPerfil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.meuPerfil}>
      <Image
        style={styles.meuPerfilChild}
        contentFit="cover"
        source={require("../assets/ellipse-11.png")}
      />
      <View style={[styles.meuPerfilItem, styles.meuPerfilItemBorder]} />
      <View style={[styles.meuPerfilInner, styles.meuInnerSpaceBlock]}>
        <View style={[styles.instanceChild, styles.meuPerfilItemBorder]} />
      </View>
      <View style={styles.menu}>
        <View style={styles.menubottomEmprestardefault}>
          <View style={[styles.iconDollarAlt, styles.iconPosition1]}>
            <View style={styles.iconDollarAlt1}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector6.png")}
              />
            </View>
          </View>
          <View style={styles.emprestarWrapper}>
            <Text style={styles.emprestar}>Emprestar</Text>
          </View>
        </View>
        <View
          style={[
            styles.menubottomDevedoresdefault,
            styles.menubottonInciodefaultPosition,
          ]}
        >
          <View style={[styles.iconUsers, styles.iconSpaceBlock]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
          </View>
          <View style={[styles.devedoresWrapper, styles.wrapperPosition]}>
            <Text style={styles.emprestar}>Devedores</Text>
          </View>
        </View>
        <Pressable
          style={[
            styles.menubottonInciodefault,
            styles.menubottonInciodefaultPosition,
          ]}
          onPress={() => navigation.navigate("TelaPrincipal")}
        >
          <View style={[styles.iconHome, styles.iconSpaceBlock]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector10.png")}
            />
          </View>
          <View style={[styles.incioWrapper, styles.wrapperPosition]}>
            <Text style={styles.emprestar}>Início</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.iconEyeOff}>
        <Image
          style={styles.vectorIcon3}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </View>
      <Text style={[styles.useradmin, styles.useradminClr]}>@user.admin</Text>
      <Text style={[styles.sair, styles.sairTypo]}>Sair</Text>
      <View style={[styles.frameView, styles.meuInnerSpaceBlock]}>
        <View style={[styles.instanceChild, styles.meuPerfilItemBorder]} />
      </View>
      <View style={[styles.meuPerfilInner1, styles.meuInnerSpaceBlock]}>
        <View style={[styles.instanceChild, styles.meuPerfilItemBorder]} />
      </View>
      <Pressable
        style={[styles.iconChevronLeft, styles.iconSpaceBlock]}
        onPress={() => navigation.navigate("TelaPrincipal")}
      >
        <Image
          style={styles.vectorIcon4}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
      </Pressable>
      <Text style={[styles.meuPerfil1, styles.useradminClr]}>Meu Perfil</Text>
      <View style={[styles.iconUser, styles.iconSpaceBlock]}>
        <Image
          style={styles.vectorIcon5}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  meuPerfilItemBorder: {
    width: 360,
    borderColor: "#b6b6b6",
    borderStyle: "solid",
  },
  meuInnerSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
    position: "absolute",
  },
  iconPosition1: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  menubottonInciodefaultPosition: {
    top: "34.21%",
    height: "65.79%",
    bottom: "0%",
    position: "absolute",
  },
  iconSpaceBlock: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  wrapperPosition: {
    top: "62%",
    height: "38%",
    paddingVertical: Padding.p_10xs,
    flexDirection: "row",
    bottom: "0%",
    paddingHorizontal: 0,
    position: "absolute",
  },
  useradminClr: {
    color: Color.preto,
    position: "absolute",
  },
  sairTypo: {
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
  },
  meuPerfilChild: {
    top: 73,
    left: 114,
    width: 133,
    height: 125,
    position: "absolute",
  },
  meuPerfilItem: {
    top: 739,
    height: 61,
    left: 0,
    position: "absolute",
    borderWidth: 1,
    backgroundColor: Color.branco,
    width: 360,
    borderColor: "#b6b6b6",
  },
  instanceChild: {
    borderTopWidth: 1,
    height: 1,
  },
  meuPerfilInner: {
    top: 50,
    left: 1,
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
    bottom: "27.63%",
    flexDirection: "row",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  emprestar: {
    fontSize: FontSize.h7_size,
    fontFamily: FontFamily.h7,
    color: Color.cinzaPagFI,
    textAlign: "left",
  },
  emprestarWrapper: {
    height: "25%",
    top: "75%",
    paddingVertical: Padding.p_10xs,
    flexDirection: "row",
    left: "0%",
    right: "0%",
    bottom: "0%",
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
  vectorIcon1: {
    width: 20,
    height: 20,
  },
  iconUsers: {
    width: "74.07%",
    right: "12.96%",
    left: "12.96%",
    bottom: "20%",
    height: "80%",
    padding: Padding.p_3xs,
    top: "0%",
    flexDirection: "row",
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
    bottom: "20%",
    height: "80%",
    padding: Padding.p_3xs,
    top: "0%",
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
  vectorIcon3: {
    width: 18,
    height: 15,
  },
  iconEyeOff: {
    top: 560,
    left: 302,
    padding: Padding.p_10xs,
    position: "absolute",
  },
  useradmin: {
    top: 216,
    left: 125,
    fontSize: FontSize.h6_size,
    textAlign: "center",
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
  },
  sair: {
    top: 285,
    left: 10,
    fontSize: 14,
    color: Color.vermelhoEtiquetaPagFi,
    textAlign: "left",
    position: "absolute",
  },
  frameView: {
    top: 270,
    left: 0,
  },
  meuPerfilInner1: {
    top: 312,
    left: 0,
  },
  vectorIcon4: {
    width: 13,
    height: 16,
  },
  iconChevronLeft: {
    top: 9,
    left: 42,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    flexDirection: "row",
  },
  meuPerfil1: {
    top: 12,
    left: 135,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.h2,
    textAlign: "left",
  },
  vectorIcon5: {
    width: 15,
    height: 17,
  },
  iconUser: {
    top: 8,
    left: 100,
    flexDirection: "row",
  },
  meuPerfil: {
    borderColor: "#000",
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: Color.branco,
  },
});

export default MeuPerfil;
