import ThemeManager from "../helpers/themeManager";

export const colors = new ThemeManager({
  light: {
    progressBarFilledColor: "#47c2fb",
    progressBarUnfilledColor: "#f5f6f9",
    statusBarColor: "#ffffff",

    tabSelectedBackgorundColor: "#0a0f2c",

    white: '#fff',
    error: '#ff9a00', // tangerine
    borderColor: '#e2e2e2', // veryLightPink
    wapp_disabled: '#d2d5db', // #lightBlueGrey90
    black: '#222222', // blackIsh
    greyishBrown: '#4c4c4c', // greyishBrown
    grey: 'rgba(34,34,34,0.2)',
    blackTwo: '#353535', // light black
    orange: '#ff9a00',
    darkGray: 'rgb(76, 76, 76)', // dark gray
    dark: 'rgb(34, 34, 34)', // dark
    lightGray: 'rgb(211, 211, 211)' // light gray
  },
});
