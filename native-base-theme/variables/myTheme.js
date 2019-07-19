import color from "color";

import { Platform, Dimensions, PixelRatio } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const platformStyle = "material";
const isIphoneX =
  platform === "ios" && deviceHeight === 812 && deviceWidth === 375;

export default {
  platformStyle,
  platform: "ios",
  androidRipple: true,
  androidRippleColor: "rgba(256, 256, 256, 0.3)",
  androidRippleColorDark: "rgba(0, 0, 0, 0.15)",
  btnUppercaseAndroidText: true,
  badgeBg: "rgba(195,40,40,1)",
  badgeColor: "#fff",
  badgePadding: 3,
  btnFontFamily: "System",
  btnDisabledBg: "rgba(225,225,225,1)",
  buttonPadding: 6,
  btnPrimaryBg: "rgba(8,49,105,1)",
  btnPrimaryColor: "#fff",
  btnInfoBg: "#3F57D3",
  btnInfoColor: "#fff",
  btnSuccessBg: "#5cb85c",
  btnSuccessColor: "#fff",
  btnDangerBg: "rgba(195,40,40,1)",
  btnDangerColor: "#fff",
  btnWarningBg: "#f0ad4e",
  btnWarningColor: "#fff",
  btnTextSize: 16.5,
  btnTextSizeLarge: 22.5,
  btnTextSizeSmall: 12,
  borderRadiusLarge: 57,
  iconSizeLarge: 45,
  iconSizeSmall: 18,
  cardDefaultBg: "#fff",
  cardBorderColor: "#ccc",
  cardBorderRadius: 8,
  cardItemPadding: platform === "ios" ? 10 : 15,
  CheckboxRadius: 100,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 0,
  CheckboxIconSize: 18,
  CheckboxFontSize: 0,
  DefaultFontSize: 17,
  checkboxBgColor: "rgba(8,49,105,1)",
  checkboxSize: 20,
  checkboxTickColor: "#fff",
  brandPrimary: "rgba(8,49,105,1)",
  brandInfo: "#3F57D3",
  brandSuccess: "#5cb85c",
  brandDanger: "#d9534f",
  brandWarning: "#f0ad4e",
  brandDark: "#000",
  brandLight: "#f4f4f4",
  fontFamily: "System",
  fontSizeBase: 15,
  fontSizeH1: 27,
  fontSizeH2: 24,
  fontSizeH3: 21,
  footerHeight: 55,
  footerDefaultBg: "#3F51B5",
  footerPaddingBottom: 0,
  tabBarTextColor: "#fff",
  tabBarTextSize: 14,
  activeTab: "#fff",
  sTabBarActiveTextColor: "rgba(8,49,105,1)",
  tabBarActiveTextColor: "#fff",
  tabActiveBgColor: "#3F51B5",
  toolbarBtnColor: "#fff",
  toolbarDefaultBg: "rgba(8,49,105,1)",
  toolbarHeight: 64,
  toolbarSearchIconSize: 20,
  toolbarInputColor: "#fff",
  searchBarHeight: 30,
  searchBarInputHeight: 30,
  toolbarBtnTextColor: "#fff",
  toolbarDefaultBorder: "rgba(8,49,105,1)",
  iosStatusbar: "light-content",
  statusBarColor: "#32408F",
  darkenHeader: "#F0F0F0",
  iconFamily: "Ionicons",
  iconFontSize: 30,
  iconHeaderSize: 29,
  inputFontSize: 17,
  inputBorderColor: "rgba(103,103,103,1)",
  inputSuccessBorderColor: "#2b8339",
  inputErrorBorderColor: "rgba(195,40,40,1)",
  inputHeightBase: 50,
  inputColor: "#000",
  inputColorPlaceholder: "rgba(103,103,103,1)",
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 20,
  listBg: "#FFF",
  listBorderColor: "#c9c9c9",
  listDividerBg: "#f4f4f4",
  listBtnUnderlayColor: "#DDD",
  listItemPadding: 10,
  listNoteColor: "rgba(103,103,103,1)",
  listNoteSize: 13,
  defaultProgressColor: "#E4202D",
  inverseProgressColor: "#1A191B",
  radioBtnSize: 25,
  radioSelectedColorAndroid: "#5067FF",
  radioBtnLineHeight: 29,
  segmentBackgroundColor: "rgba(8,49,105,1)",
  segmentActiveBackgroundColor: "#fff",
  segmentTextColor: "#fff",
  segmentActiveTextColor: "rgba(8,49,105,1)",
  segmentBorderColor: "#fff",
  segmentBorderColorMain: "#3F51B5",
  defaultSpinnerColor: "#45D56E",
  inverseSpinnerColor: "#1A191B",
  tabDefaultBg: "#3F51B5",
  topTabBarTextColor: "#b3c7f9",
  topTabBarActiveTextColor: "#fff",
  topTabBarBorderColor: "#fff",
  topTabBarActiveBorderColor: "#fff",
  tabBgColor: "#F8F8F8",
  tabFontSize: 15,
  textColor: "rgba(103,103,103,1)",
  inverseTextColor: "#fff",
  noteFontSize: 14,
  defaultTextColor: "#000",
  titleFontfamily: "System",
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: "#FFF",
  titleFontColor: "#FFF",
  borderRadiusBase: 50,
  borderWidth: 1,
  contentPadding: 10,
  dropdownLinkColor: "#414142",
  inputLineHeight: 24,
  deviceWidth: 1920,
  deviceHeight: 976,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return platform === "ios" ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return "#575757";
  },
  get radioColor() {
    return this.brandPrimary;
  },
  get defaultTextColor() {
    return this.textColor;
  }
};
