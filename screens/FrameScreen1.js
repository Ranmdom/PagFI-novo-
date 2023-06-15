import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const FrameScreen1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.emprestarWrapper}>
        <View style={[styles.emprestar, styles.emprestarLayout]}>
          <View style={[styles.emprestarChild, styles.emprestarLayout]} />
          <View style={styles.emprestarInner}>
            <View style={styles.instanceChild} />
          </View>
          <Text
            style={[styles.cadastrandoDevedor, styles.devedorFlexBox]}
          >{`Cadastrando
Devedor`}</Text>
          <View style={[styles.emprestarItem, styles.emprestarChildLayout]} />
          <View style={[styles.rectangleView, styles.emprestarChildLayout]} />
          <View style={[styles.emprestarChild1, styles.emprestarChildLayout]} />
          <View style={[styles.emprestarChild2, styles.emprestarChildLayout]} />
          <View style={[styles.emprestarChild3, styles.emprestarChildLayout]} />
          <Text style={[styles.useradmin, styles.useradminTypo]}>
            @user.admin
          </Text>
          <Text style={[styles.nomeESobrenome, styles.cpfTypo]}>
            Nome e Sobrenome:
          </Text>
          <Text style={[styles.telefone, styles.cpfTypo]}>Telefone:</Text>
          <Text style={[styles.cpf, styles.cpfTypo]}>CPF:</Text>
          <Text style={[styles.valor, styles.cpfTypo]}>Valor:</Text>
          <Text style={[styles.dataDePagamento, styles.ddmmaaaaTypo]}>
            Data de Pagamento:
          </Text>
          <Text style={[styles.devedorDeConfiana, styles.useradminTypo]}>
            Devedor de confiança?
          </Text>
          <Text style={[styles.r0000, styles.r0000Typo]}>R$: 00,00</Text>
          <Text style={[styles.ddmmaaaa, styles.ddmmaaaaTypo]}>DD/MM/AAAA</Text>
          <View style={[styles.frameView, styles.emprestarInnerSpaceBlock]}>
            <View style={[styles.instanceItem, styles.instanceLayout]} />
          </View>
          <View
            style={[styles.emprestarInner1, styles.emprestarInnerSpaceBlock]}
          >
            <View style={[styles.instanceItem, styles.instanceLayout]} />
          </View>
          <View
            style={[styles.emprestarInner2, styles.emprestarInnerSpaceBlock]}
          >
            <View style={[styles.instanceItem, styles.instanceLayout]} />
          </View>
          <View
            style={[styles.emprestarInner3, styles.emprestarInnerSpaceBlock]}
          >
            <View style={[styles.instanceItem, styles.instanceLayout]} />
          </View>
          <View
            style={[styles.emprestarInner4, styles.emprestarInnerSpaceBlock]}
          >
            <View style={[styles.instanceChild2, styles.instanceLayout]} />
          </View>
          <View style={[styles.iconChevronDown, styles.iconSpaceBlock]}>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector19.png")}
            />
          </View>
          <View style={[styles.rectangleParent, styles.instanceChild3Layout]}>
            <View
              style={[styles.instanceChild3, styles.instanceChild3Layout]}
            />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector20.png")}
            />
          </View>
          <View
            style={[styles.bottonEmprestar, styles.iconDollarAlt1SpaceBlock]}
          >
            <Text style={[styles.emprestar1, styles.concluirTypo]}>
              Emprestar
            </Text>
          </View>
          <View style={[styles.iconChevronLeft, styles.iconSpaceBlock]}>
            <Image
              style={styles.vectorIcon2}
              contentFit="cover"
              source={require("../assets/vector12.png")}
            />
          </View>
          <View style={[styles.iconUserAdd, styles.iconSpaceBlock]}>
            <Image
              style={styles.vectorIcon3}
              contentFit="cover"
              source={require("../assets/vector21.png")}
            />
          </View>
          <View style={[styles.menu, styles.menuPosition]}>
            <View style={styles.menubottomEmprestardefault}>
              <View style={[styles.iconDollarAlt, styles.iconPosition1]}>
                <View
                  style={[
                    styles.iconDollarAlt1,
                    styles.iconDollarAlt1SpaceBlock,
                  ]}
                >
                  <Image
                    style={styles.vectorIcon4}
                    contentFit="cover"
                    source={require("../assets/vector6.png")}
                  />
                </View>
              </View>
              <View style={styles.emprestarContainer}>
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
                  style={styles.vectorIcon3}
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
                  style={styles.vectorIcon3}
                  contentFit="cover"
                  source={require("../assets/vector10.png")}
                />
              </View>
              <View style={[styles.incioWrapper, styles.wrapperPosition]}>
                <Text style={[styles.devedores, styles.devedoresTypo]}>
                  Início
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.frameChild, styles.menuPosition]} />
      <Text style={[styles.devedorCadastradoCom, styles.r0000Typo]}>{`@devedor
Cadastrado com sucesso!`}</Text>
      <View style={[styles.iconUserCheck, styles.iconSpaceBlock]}>
        <Image
          style={styles.vectorIcon7}
          contentFit="cover"
          source={require("../assets/vector22.png")}
        />
      </View>
      <Pressable style={[styles.bottonConcluir, styles.bottonLayout]}>
        <Text style={[styles.concluir, styles.concluirTypo]}>Concluir</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  emprestarLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.branco,
    width: 360,
    left: 0,
    position: "absolute",
  },
  devedorFlexBox: {
    textAlign: "center",
    color: Color.preto,
  },
  emprestarChildLayout: {
    height: 78,
    width: 331,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_9xs,
    left: 15,
    position: "absolute",
  },
  useradminTypo: {
    fontSize: FontSize.h6_size,
    textAlign: "left",
    fontFamily: FontFamily.h2,
    fontWeight: "700",
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
  ddmmaaaaTypo: {
    left: 31,
    textAlign: "left",
    fontSize: FontSize.h6_size,
    fontFamily: FontFamily.h2,
    fontWeight: "700",
    position: "absolute",
  },
  r0000Typo: {
    fontFamily: FontFamily.ubuntuMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  emprestarInnerSpaceBlock: {
    padding: Padding.p_9xs,
    position: "absolute",
  },
  instanceLayout: {
    width: 302,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  iconSpaceBlock: {
    padding: Padding.p_3xs,
    position: "absolute",
  },
  instanceChild3Layout: {
    height: 30,
    position: "absolute",
  },
  iconDollarAlt1SpaceBlock: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  concluirTypo: {
    color: Color.branco,
    textAlign: "left",
    fontFamily: FontFamily.h2,
    fontWeight: "700",
  },
  menuPosition: {
    width: 332,
    left: 14,
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
  bottonLayout: {
    borderRadius: Border.br_13xl,
    overflow: "hidden",
    position: "absolute",
  },
  emprestarChild: {
    top: 739,
    height: 61,
    borderColor: "#b6b6b6",
  },
  instanceChild: {
    height: 1,
    borderTopWidth: 1,
    borderColor: "#b6b6b6",
    borderStyle: "solid",
    width: 360,
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
    fontFamily: FontFamily.h2,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    position: "absolute",
  },
  emprestarItem: {
    top: 127,
  },
  rectangleView: {
    top: 219,
  },
  emprestarChild1: {
    top: 311,
  },
  emprestarChild2: {
    top: 403,
  },
  emprestarChild3: {
    top: 495,
  },
  useradmin: {
    top: 92,
    textAlign: "left",
    left: 15,
    color: Color.preto,
  },
  nomeESobrenome: {
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
  dataDePagamento: {
    top: 502,
    color: Color.cinzaPagFI,
  },
  devedorDeConfiana: {
    top: 589,
    left: 57,
    color: Color.cinzaPagFI,
    textAlign: "left",
  },
  r0000: {
    top: 427,
    left: 222,
    color: Color.cinzaPagFI,
    textAlign: "left",
  },
  ddmmaaaa: {
    top: 528,
    color: Color.cInzaPagFi2,
  },
  instanceItem: {
    borderColor: "#b6b6b6",
  },
  frameView: {
    top: 275,
    left: 26,
    padding: Padding.p_9xs,
  },
  emprestarInner1: {
    top: 367,
    left: 26,
    padding: Padding.p_9xs,
  },
  emprestarInner2: {
    top: 459,
    left: 26,
    padding: Padding.p_9xs,
  },
  emprestarInner3: {
    top: 552,
    left: 28,
  },
  instanceChild2: {
    borderColor: "#000",
  },
  emprestarInner4: {
    top: 183,
    left: 26,
    padding: Padding.p_9xs,
  },
  vectorIcon: {
    width: 15,
    height: 9,
  },
  iconChevronDown: {
    top: 527,
    left: 298,
  },
  instanceChild3: {
    backgroundColor: "#d9d9d9",
    width: 31,
    borderRadius: Border.br_9xs,
    left: 0,
    height: 30,
    top: 0,
  },
  vectorIcon1: {
    height: "66.67%",
    width: "78.58%",
    top: "16.67%",
    right: "12.24%",
    bottom: "16.67%",
    left: "9.18%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleParent: {
    top: 585,
    width: 33,
    left: 15,
  },
  emprestar1: {
    fontSize: FontSize.botton2_size,
  },
  bottonEmprestar: {
    top: 638,
    left: 211,
    backgroundColor: Color.cinzaPagFI,
    paddingHorizontal: Padding.p_16xl,
    borderRadius: Border.br_13xl,
    overflow: "hidden",
    position: "absolute",
  },
  vectorIcon2: {
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
    flexDirection: "row",
  },
  vectorIcon3: {
    width: 20,
    height: 20,
  },
  iconUserAdd: {
    top: 16,
    left: 77,
    flexDirection: "row",
  },
  vectorIcon4: {
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
  emprestarContainer: {
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
    height: 76,
  },
  emprestar: {
    overflow: "hidden",
    borderColor: "#000",
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    height: 800,
  },
  emprestarWrapper: {
    opacity: 0.5,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
    height: 800,
  },
  frameChild: {
    top: 256,
    height: 246,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.branco,
    width: 332,
    left: 14,
  },
  devedorCadastradoCom: {
    top: 369,
    left: 36,
    width: 288,
    height: 84,
    textAlign: "center",
    color: Color.preto,
  },
  vectorIcon7: {
    width: 75,
    height: 75,
  },
  iconUserCheck: {
    top: 265,
    left: 138,
    flexDirection: "row",
  },
  concluir: {
    fontSize: 16,
  },
  bottonConcluir: {
    top: 443,
    left: 98,
    backgroundColor: Color.preto,
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: 12,
    flexDirection: "row",
  },
  groupParent: {
    flex: 1,
    height: 800,
    width: "100%",
  },
});

export default FrameScreen1;
