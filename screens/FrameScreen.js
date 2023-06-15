import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Padding, FontFamily, Border, FontSize } from "../GlobalStyles";

const FrameScreen = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.devedoresWrapper}>
        <View style={[styles.devedores, styles.devedoresPosition]}>
          <View style={[styles.devedoresChild, styles.childBorder]} />
          <View
            style={[styles.devedoresInner, styles.devedoresInnerSpaceBlock]}
          >
            <View style={[styles.instanceChild, styles.childBorder]} />
          </View>
          <View style={[styles.frameView, styles.devedoresInnerSpaceBlock]}>
            <View style={[styles.instanceChild, styles.childBorder]} />
          </View>
          <Text style={[styles.devedores1, styles.noTypo]}>Devedores</Text>
          <View style={styles.iconUsers}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector13.png")}
            />
          </View>
          <View style={styles.iconChevronLeft}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector12.png")}
            />
          </View>
          <View style={styles.menu}>
            <View style={styles.menubottomEmprestardefault}>
              <View style={styles.iconDollarAlt}>
                <View style={styles.iconDollarAlt1}>
                  <Image
                    style={styles.vectorIcon2}
                    contentFit="cover"
                    source={require("../assets/vector14.png")}
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
              <View style={[styles.iconUsers1, styles.iconPosition1]}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector18.png")}
                />
              </View>
              <View
                style={[styles.devedoresContainer, styles.incioWrapperPosition]}
              >
                <Text style={[styles.devedores2, styles.r0000Typo]}>
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
              <View style={[styles.iconHome, styles.iconPosition1]}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector16.png")}
                />
              </View>
              <View style={[styles.incioWrapper, styles.incioWrapperPosition]}>
                <Text style={styles.marcadoTypo}>Início</Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.iconChevronDown, styles.iconChevronDownPosition]}
          >
            <Image
              style={styles.vectorIcon5}
              contentFit="cover"
              source={require("../assets/vector9.png")}
            />
          </View>
          <View style={[styles.devedoresItem, styles.frameChildLayout]} />
          <View style={[styles.rectangleView, styles.devedoresChildLayout]} />
          <Text style={[styles.r0000, styles.r0000Typo]}>R$: 00,00</Text>
          <Text style={[styles.nomeESobrenome, styles.nomeTypo]}>
            Nome e Sobrenome do devedor
          </Text>
          <Text style={[styles.marcadoComoDevedor, styles.marcadoTypo]}>
            Marcado como devedor de confiança
          </Text>
          <View style={[styles.iconDollarAlt2, styles.iconPosition]}>
            <Image
              style={styles.vectorIcon6}
              contentFit="cover"
              source={require("../assets/vector17.png")}
            />
          </View>
          <View
            style={[styles.devedoresInner1, styles.iconChevronDownPosition]}
          >
            <View style={[styles.instanceChild, styles.childBorder]} />
          </View>
          <View
            style={[styles.devedoresChild1, styles.devedoresChildPosition2]}
          />
          <View
            style={[styles.devedoresChild2, styles.devedoresChildPosition2]}
          />
          <Text style={[styles.r00001, styles.r0000Typo]}>R$: 00,00</Text>
          <Text style={[styles.nomeESobrenome1, styles.nomeTypo]}>
            Nome e Sobrenome do devedor
          </Text>
          <Text style={[styles.marcadoComoDevedor1, styles.marcadoTypo]}>
            Marcado como devedor de confiança
          </Text>
          <View style={[styles.iconDollarAlt3, styles.iconPosition]}>
            <Image
              style={styles.vectorIcon6}
              contentFit="cover"
              source={require("../assets/vector17.png")}
            />
          </View>
          <View
            style={[styles.devedoresInner2, styles.devedoresInnerSpaceBlock]}
          >
            <View style={[styles.instanceChild, styles.childBorder]} />
          </View>
          <View
            style={[styles.devedoresChild3, styles.devedoresChildPosition1]}
          />
          <View
            style={[styles.devedoresChild4, styles.devedoresChildPosition1]}
          />
          <Text style={[styles.r00002, styles.r0000Typo]}>R$: 00,00</Text>
          <Text style={[styles.nomeESobrenome2, styles.nomeTypo]}>
            Nome e Sobrenome do devedor
          </Text>
          <Text style={[styles.marcadoComoDevedor2, styles.marcadoTypo]}>
            Marcado como devedor de confiança
          </Text>
          <View style={[styles.iconDollarAlt4, styles.iconPosition]}>
            <Image
              style={styles.vectorIcon6}
              contentFit="cover"
              source={require("../assets/vector17.png")}
            />
          </View>
          <View
            style={[styles.devedoresInner3, styles.devedoresInnerSpaceBlock]}
          >
            <View style={[styles.instanceChild, styles.childBorder]} />
          </View>
          <View
            style={[styles.devedoresChild5, styles.devedoresChildPosition]}
          />
          <View
            style={[styles.devedoresChild6, styles.devedoresChildPosition]}
          />
          <Text style={[styles.r00003, styles.r0000Typo]}>R$: 00,00</Text>
          <Text style={[styles.nomeESobrenome3, styles.nomeTypo]}>
            Nome e Sobrenome do devedor
          </Text>
          <Text style={[styles.marcadoComoDevedor3, styles.marcadoTypo]}>
            Marcado como devedor de confiança
          </Text>
          <View style={[styles.iconDollarAlt5, styles.iconPosition]}>
            <Image
              style={styles.vectorIcon6}
              contentFit="cover"
              source={require("../assets/vector17.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.frameChild, styles.frameChildLayout]} />
      <View style={[styles.bottonNo, styles.bottonSpaceBlock]}>
        <Text style={[styles.no, styles.noTypo]}>Não</Text>
      </View>
      <View style={[styles.bottonSim, styles.bottonSpaceBlock]}>
        <Text style={[styles.no, styles.noTypo]}>Sim</Text>
      </View>
      <Text style={[styles.devedorRealizouO, styles.nomeTypo]}>
        Devedor realizou o pagamento?
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  devedoresPosition: {
    borderWidth: 1,
    backgroundColor: Color.branco,
    left: 0,
    position: "absolute",
  },
  childBorder: {
    borderColor: "#b6b6b6",
    borderStyle: "solid",
    width: 360,
  },
  devedoresInnerSpaceBlock: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
    left: 1,
  },
  noTypo: {
    textAlign: "left",
    fontFamily: FontFamily.h2,
    fontWeight: "700",
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
  incioWrapperPosition: {
    top: "62%",
    height: "38%",
    paddingVertical: Padding.p_10xs,
    bottom: "0%",
    flexDirection: "row",
    paddingHorizontal: 0,
    position: "absolute",
  },
  r0000Typo: {
    fontFamily: FontFamily.h7,
    textAlign: "left",
    color: Color.preto,
  },
  iconChevronDownPosition: {
    top: 371,
    position: "absolute",
  },
  frameChildLayout: {
    height: 119,
    position: "absolute",
  },
  devedoresChildLayout: {
    width: 10,
    borderBottomLeftRadius: Border.br_8xs,
    borderTopLeftRadius: Border.br_9xs,
    backgroundColor: Color.laranja02,
  },
  nomeTypo: {
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    fontSize: FontSize.h6_size,
    textAlign: "left",
    color: Color.preto,
    position: "absolute",
  },
  marcadoTypo: {
    color: Color.cinzaPagFI,
    fontFamily: FontFamily.h7,
    fontSize: FontSize.h7_size,
    textAlign: "left",
  },
  iconPosition: {
    left: 269,
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  devedoresChildPosition2: {
    top: 239,
    height: 119,
    left: 20,
    position: "absolute",
  },
  devedoresChildPosition1: {
    top: 385,
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
  bottonSpaceBlock: {
    paddingHorizontal: Padding.p_16xl,
    backgroundColor: Color.preto,
    borderRadius: Border.br_13xl,
    top: 381,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    overflow: "hidden",
    position: "absolute",
  },
  devedoresChild: {
    top: 739,
    height: 61,
    borderWidth: 1,
    backgroundColor: Color.branco,
    left: 0,
    position: "absolute",
    borderColor: "#b6b6b6",
  },
  instanceChild: {
    borderTopWidth: 1,
    height: 1,
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
    color: Color.preto,
    textAlign: "left",
    fontFamily: FontFamily.h2,
    fontWeight: "700",
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
  vectorIcon2: {
    width: 21,
    height: 35,
  },
  iconDollarAlt1: {
    borderRadius: Border.br_16xl,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.laranja02,
    flexDirection: "row",
  },
  iconDollarAlt: {
    height: "72.37%",
    right: "0%",
    bottom: "27.63%",
    left: "0%",
    top: "0%",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
  },
  emprestarWrapper: {
    height: "25%",
    top: "75%",
    paddingVertical: Padding.p_10xs,
    left: "-0.15%",
    right: "-0.15%",
    width: "100.3%",
    bottom: "0%",
    flexDirection: "row",
    paddingHorizontal: 0,
    position: "absolute",
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
  iconUsers1: {
    width: "74.3%",
    right: "12.85%",
    left: "12.85%",
    flexDirection: "row",
  },
  devedores2: {
    fontSize: FontSize.h7_size,
    fontFamily: FontFamily.h7,
  },
  devedoresContainer: {
    left: "-0.15%",
    right: "-0.15%",
    width: "100.3%",
    overflow: "hidden",
  },
  menubottomDevedoresdefault: {
    width: "16.27%",
    right: "6.93%",
    left: "76.81%",
  },
  iconHome: {
    left: "-0.15%",
    right: "-0.15%",
    width: "100.3%",
  },
  incioWrapper: {
    width: "67.7%",
    right: "17.4%",
    left: "14.9%",
  },
  menubottonInciodefault: {
    width: "12.05%",
    right: "78.61%",
    left: "9.34%",
  },
  menu: {
    top: 714,
    left: 14,
    width: 331,
    height: 76,
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
    height: 119,
    left: 20,
    top: 90,
  },
  rectangleView: {
    height: 119,
    position: "absolute",
    left: 20,
    top: 90,
  },
  r0000: {
    top: 138,
    left: 38,
    fontFamily: FontFamily.h7,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  nomeESobrenome: {
    top: 111,
    left: 38,
  },
  marcadoComoDevedor: {
    top: 172,
    left: 38,
    position: "absolute",
  },
  vectorIcon6: {
    height: 23,
    width: 13,
  },
  iconDollarAlt2: {
    top: 157,
  },
  devedoresInner1: {
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: 0,
    left: 1,
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
    top: 287,
    left: 38,
    fontFamily: FontFamily.h7,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  nomeESobrenome1: {
    top: 260,
    left: 38,
  },
  marcadoComoDevedor1: {
    top: 321,
    left: 38,
    position: "absolute",
  },
  iconDollarAlt3: {
    top: 306,
  },
  devedoresInner2: {
    top: 517,
    position: "absolute",
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
    top: 433,
    left: 38,
    fontFamily: FontFamily.h7,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  nomeESobrenome2: {
    top: 406,
    left: 38,
  },
  marcadoComoDevedor2: {
    top: 467,
    left: 38,
    position: "absolute",
  },
  iconDollarAlt4: {
    top: 452,
  },
  devedoresInner3: {
    top: 666,
    position: "absolute",
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
    top: 582,
    left: 38,
    fontFamily: FontFamily.h7,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  nomeESobrenome3: {
    top: 555,
    left: 38,
  },
  marcadoComoDevedor3: {
    top: 616,
    left: 38,
    position: "absolute",
  },
  iconDollarAlt5: {
    top: 601,
  },
  devedores: {
    borderColor: "#000",
    overflow: "hidden",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: Color.branco,
    width: 360,
    top: 0,
    height: 800,
  },
  devedoresWrapper: {
    opacity: 0.5,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  frameChild: {
    top: 316,
    left: 13,
    width: 332,
    borderRadius: Border.br_9xs,
    height: 119,
    backgroundColor: Color.branco,
  },
  no: {
    fontSize: FontSize.botton2_size,
    color: Color.branco,
    textAlign: "left",
    fontFamily: FontFamily.h2,
    fontWeight: "700",
  },
  bottonNo: {
    left: 192,
  },
  bottonSim: {
    left: 72,
  },
  devedorRealizouO: {
    top: 341,
    left: 48,
  },
  groupParent: {
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default FrameScreen;
