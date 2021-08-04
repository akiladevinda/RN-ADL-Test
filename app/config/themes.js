import ThemeManager from "../helpers/themeManager";

export const colors = new ThemeManager({
  light: {
    primaryTextColor: "#0a0f2c",
    secondaryTextColor: "#ffffff",
    placeholderTextColor: "#979797",

    lineBreakerColor: "#f5f6f9",

    inputFieldBackgroundColor: "#f5f6f9",

    buttonActiveColor: "#47c2fb",
    buttonInActiveColor: "#c6c6c6",

    primaryBackgroundColor: "#f5f6f9",
    secondaryBackgroundColor: "#0a0f2c",
    cardBackgroundColor: "#ffffff",
    cardBackgroundColorTransparent: "#ffffff85",

    footerBackgroundColor: "#0a0f2c",

    bottomNavigationBackgroundColor: "#ffffff",
    bottomNavigationTextActiveColor: "#0a0f2c",
    bottomNavigationTextInactiveColor: "#979797",

    errorColor: "#de3c4b",
    successColor: "#35c122",
    infoColor: "#47c2fb",
    warningColor: "#f2c94c",
    amberColor: "#FFBF00",

    progressBarFilledColor: "#47c2fb",
    progressBarUnfilledColor: "#f5f6f9",
    statusBarColor: "#ffffff",

    tabSelectedBackgorundColor: "#0a0f2c"

    // white: '#fff',
    // error: '#ff9a00', // tangerine
    // borderColor: '#e2e2e2', // veryLightPink
    // wapp_disabled: '#d2d5db', // #lightBlueGrey90
    // black: '#222222', // blackIsh
    // greyishBrown: '#4c4c4c', // greyishBrown
    // grey: 'rgba(34,34,34,0.2)',
    // blackTwo: '#353535', // light black
    // orange: '#ff9a00',
    // wapp_green: 'rgb(0,216,87)',
    // darkGray: 'rgb(76, 76, 76)', // dark gray
    // dark: 'rgb(34, 34, 34)', // dark
    // lightGray: 'rgb(211, 211, 211)' // light gray
  },

  dark: {
    primaryTextColor: "#0a0f2c",
    secondaryTextColor: "#ffffff",
    placeholderTextColor: "#979797",

    buttonActiveColor: "#47c2fb",
    buttonInActiveColor: "#c6c6c6",

    primaryBackgroundColor: "#f5f6f9",
    cardBackgroundColor: "#694fad",

    footerBackgroundColor: "#0a0f2c",

    bottomNavigationBackgroundColor: "#ffffff",
    bottomNavigationTextActiveColor: "#0a0f2c",
    bottomNavigationTextInactiveColor: "#979797"
  }
});
