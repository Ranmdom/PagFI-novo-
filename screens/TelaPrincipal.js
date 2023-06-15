import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const TelaPrincipal = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.telaPrincipal}>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("MeuPerfil")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
      </Pressable>
      <View style={[styles.telaPrincipalChild, styles.telaPosition]} />
      <View style={[styles.telaPrincipalItem, styles.telaLayout]} />
      <View style={[styles.telaPrincipalInner, styles.instanceChildBorder]} />
      <Text style={styles.devedoresRecentes}>Devedores recentes:</Text>
      <Text style={[styles.r0000, styles.r0000Typo]}>R$: 00,00</Text>
      <Text style={[styles.nomeESobrenome, styles.nomeTypo]}>
        Nome e Sobrenome do devedor
      </Text>
      <Text style={[styles.verTodos, styles.marcadoTypo]}>ver todos</Text>
      <Text style={[styles.marcadoComoDevedor, styles.marcadoTypo]}>
        Marcado como devedor de confiança
      </Text>
      <View style={styles.frameView}>
        <View style={[styles.instanceChild, styles.instanceChildBorder]} />
      </View>
      <View style={styles.menu}>
        <View style={styles.menubottomEmprestardefault}>
          <View style={[styles.iconDollarAlt, styles.iconPosition2]}>
            <View style={styles.iconDollarAlt1}>
              <Image
                style={styles.vectorIcon}
                contentFit="cover"
                source={require("../assets/vector6.png")}
              />
            </View>
          </View>
          <View style={styles.emprestarWrapper}>
            <Text style={styles.marcadoTypo}>Emprestar</Text>
          </View>
        </View>
        <View
          style={[
            styles.menubottomDevedoresdefault,
            styles.menubottonInciodefaultPosition,
          ]}
        >
          <View style={[styles.iconUsers, styles.iconPosition1]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector7.png")}
            />
          </View>
          <View style={[styles.devedoresWrapper, styles.wrapperPosition]}>
            <Text style={styles.marcadoTypo}>Devedores</Text>
          </View>
        </View>
        <View
          style={[
            styles.menubottonInciodefault,
            styles.menubottonInciodefaultPosition,
          ]}
        >
          <View style={[styles.iconHome, styles.iconPosition1]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector8.png")}
            />
          </View>
          <View style={[styles.incioWrapper, styles.wrapperPosition]}>
            <Text style={styles.incio}>Início</Text>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.iconChevronDown, styles.iconPosition]}
        onPress={() => navigation.navigate("Devedores")}
      >
        <Image
          style={styles.vectorIcon3}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View style={[styles.telaPrincipalChild1, styles.telaChildPosition2]} />
      <Text style={[styles.r00001, styles.r0000Typo]}>R$: 00,00</Text>
      <Text style={[styles.nomeESobrenome1, styles.nomeTypo]}>
        Nome e Sobrenome do devedor
      </Text>
      <Text style={[styles.marcadoComoDevedor1, styles.marcadoTypo]}>
        Marcado como devedor de confiança
      </Text>
      <Pressable
        style={[styles.iconChevronDown1, styles.iconPosition]}
        onPress={() => navigation.navigate("Devedores")}
      >
        <Image
          style={styles.vectorIcon3}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <View style={[styles.telaPrincipalChild2, styles.telaChildPosition1]} />
      <View style={[styles.telaPrincipalChild3, styles.telaChildPosition1]} />
      <Text style={[styles.r00002, styles.r0000Typo]}>R$: 00,00</Text>
      <Text style={[styles.nomeESobrenome2, styles.nomeTypo]}>
        Nome e Sobrenome do devedor
      </Text>
      <Text style={[styles.marcadoComoDevedor2, styles.marcadoTypo]}>
        Marcado como devedor de confiança
      </Text>
      <Pressable
        style={[styles.iconChevronDown2, styles.iconPosition]}
        onPress={() => navigation.navigate("Devedores")}
      >
        <Image
          style={styles.vectorIcon3}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
      <View style={[styles.telaPrincipalChild4, styles.telaChildPosition]} />
      <View style={[styles.telaPrincipalChild5, styles.telaChildPosition]} />
      <Text style={[styles.r00003, styles.r0000Typo]}>R$: 00,00</Text>
      <Text style={[styles.nomeESobrenome3, styles.nomeTypo]}>
        Nome e Sobrenome do devedor
      </Text>
      <Text style={[styles.marcadoComoDevedor3, styles.marcadoTypo]}>
        Marcado como devedor de confiança
      </Text>
      <Pressable
        style={[styles.iconChevronDown3, styles.iconPosition]}
        onPress={() => navigation.navigate("Devedores")}
      >
        <Image
          style={styles.vectorIcon3}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  telaPosition: {
    height: 119,
    top: 124,
    left: 20,
    position: "absolute",
  },
  telaLayout: {
    width: 10,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_9xs,
    backgroundColor: Color.laranja02,
  },
  instanceChildBorder: {
    width: 360,
    borderColor: "#b6b6b6",
    borderStyle: "solid",
  },
  r0000Typo: {
    fontFamily: FontFamily.h7,
    fontSize: FontSize.size_5xl,
    left: 38,
    textAlign: "left",
    color: Color.preto,
    position: "absolute",
  },
  nomeTypo: {
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    left: 38,
    textAlign: "left",
    color: Color.preto,
    fontSize: FontSize.h6_size,
    position: "absolute",
  },
  marcadoTypo: {
    color: Color.cinzaPagFI,
    fontSize: FontSize.h7_size,
    fontFamily: FontFamily.h7,
    textAlign: "left",
  },
  iconPosition2: {
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
  iconPosition1: {
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
    flexDirection: "row",
    bottom: "0%",
    paddingHorizontal: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 267,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  rectangleViewPosition: {
    top: 255,
    height: 119,
    position: "absolute",
  },
  telaChildPosition2: {
    left: 19,
    width: 10,
    backgroundColor: Color.laranja02,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_9xs,
  },
  telaChildPosition1: {
    top: 386,
    height: 119,
    left: 20,
    position: "absolute",
  },
  telaChildPosition: {
    top: 517,
    height: 119,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 18,
    top: 15,
    width: 36,
    height: 34,
    position: "absolute",
  },
  telaPrincipalChild: {
    width: 319,
    backgroundColor: Color.cInzaPagFi2,
    borderRadius: Border.br_9xs,
  },
  telaPrincipalItem: {
    height: 119,
    top: 124,
    left: 20,
    position: "absolute",
  },
  telaPrincipalInner: {
    top: 739,
    left: 0,
    height: 61,
    position: "absolute",
    borderWidth: 1,
    backgroundColor: Color.branco,
    borderColor: "#b6b6b6",
  },
  devedoresRecentes: {
    top: 91,
    fontWeight: "700",
    fontFamily: FontFamily.h2,
    textAlign: "left",
    color: Color.preto,
    fontSize: FontSize.h6_size,
    left: 20,
    position: "absolute",
  },
  r0000: {
    top: 172,
  },
  nomeESobrenome: {
    top: 145,
  },
  verTodos: {
    top: 95,
    left: 292,
    position: "absolute",
  },
  marcadoComoDevedor: {
    top: 206,
    left: 38,
    color: Color.cinzaPagFI,
    position: "absolute",
  },
  instanceChild: {
    borderTopWidth: 1,
    height: 1,
  },
  frameView: {
    top: 68,
    left: 1,
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
    position: "absolute",
  },
  vectorIcon: {
    width: 21,
    height: 35,
  },
  iconDollarAlt1: {
    borderRadius: Border.br_16xl,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    backgroundColor: Color.laranja02,
  },
  iconDollarAlt: {
    height: "72.37%",
    bottom: "27.63%",
    flexDirection: "row",
    top: "0%",
    right: "0%",
    position: "absolute",
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
    width: "15.66%",
    right: "43.07%",
    left: "41.27%",
    bottom: "0%",
    top: "0%",
    height: "100%",
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
    left: "0%",
    right: "0%",
    width: "100%",
  },
  incio: {
    fontSize: FontSize.h7_size,
    fontFamily: FontFamily.h7,
    textAlign: "left",
    color: Color.preto,
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
    width: 15,
    height: 9,
  },
  iconChevronDown: {
    top: 198,
  },
  rectangleView: {
    width: 319,
    backgroundColor: Color.cInzaPagFi2,
    borderRadius: Border.br_9xs,
    left: 20,
  },
  telaPrincipalChild1: {
    top: 255,
    height: 119,
    position: "absolute",
  },
  r00001: {
    top: 303,
  },
  nomeESobrenome1: {
    top: 276,
  },
  marcadoComoDevedor1: {
    top: 337,
    left: 38,
    color: Color.cinzaPagFI,
    position: "absolute",
  },
  iconChevronDown1: {
    top: 329,
  },
  telaPrincipalChild2: {
    width: 319,
    backgroundColor: Color.cInzaPagFi2,
    borderRadius: Border.br_9xs,
  },
  telaPrincipalChild3: {
    width: 10,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_9xs,
    backgroundColor: Color.laranja02,
  },
  r00002: {
    top: 434,
  },
  nomeESobrenome2: {
    top: 407,
  },
  marcadoComoDevedor2: {
    top: 468,
    left: 38,
    color: Color.cinzaPagFI,
    position: "absolute",
  },
  iconChevronDown2: {
    top: 460,
  },
  telaPrincipalChild4: {
    width: 319,
    backgroundColor: Color.cInzaPagFi2,
    borderRadius: Border.br_9xs,
    left: 20,
  },
  telaPrincipalChild5: {
    left: 19,
    width: 10,
    backgroundColor: Color.laranja02,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_9xs,
  },
  r00003: {
    top: 565,
  },
  nomeESobrenome3: {
    top: 538,
  },
  marcadoComoDevedor3: {
    top: 599,
    left: 38,
    color: Color.cinzaPagFI,
    position: "absolute",
  },
  iconChevronDown3: {
    top: 591,
  },
  telaPrincipal: {
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

export default TelaPrincipal;
