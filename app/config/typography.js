import { StyleSheet } from "react-native";
import { Colors, FontSize } from "./index";
import { colors } from "./themes";

export const FONT_FAMILY_TYPES = {
  SFProText_Light: 'SFProText-Light',
  SFProText_Medium: 'SFProText-Medium',
  SFProText_Regular: 'SFProText-Regular',
  SFProDisplay_Bold: 'SFProDisplay-Bold',
  SFProDisplay_Medium: 'SFProDisplay-Medium',
  Quicksand_Bold: 'Quicksand-Bold',
  Quicksand_Light: 'Quicksand-Light'
};

const Typography = StyleSheet.create({
  // autoCompletePlaceholder: {
  //   fontFamily: typeSpaceFamily,
  //   fontSize: FontSize.bodyExtraSmall
  // },
  // bodyBold: {
  //   fontFamily: typeSpaceFamily,
  //   fontSize: FontSize.bodySmall,
  //   fontWeight: "bold"
  // },
  // bodySmall: {
  //   fontFamily: typeSpaceFamily,
  //   fontSize: FontSize.bodySmall,
  //   fontWeight: "normal"
  // },
  // bodyExtraSmall: {
  //   fontFamily: typeSpaceFamily,
  //   fontSize: FontSize.bodyExtraSmall,
  //   fontWeight: "normal"
  // },
  // bodyLarge: {
  //   fontFamily: typeSpaceFamily,
  //   fontSize: FontSize.body,
  //   fontWeight: "normal"
  // },
  // dashboardLarge: {
  //   fontFamily: typeSpaceFamily,
  //   fontSize: FontSize.h2,
  //   color: colors.primaryTextColor,
  //   fontWeight: "bold"
  // },
  // toolbarTitle: {
  //   fontFamily: typeSpaceFamilyBold,
  //   fontSize: FontSize.bodySmall,
  //   fontWeight: "normal",
  //   color: colors.primaryTextColor
  // },
  // statusTextSmall: {
  //   fontFamily: typeSpaceFamily,
  //   fontSize: FontSize.bodyExtraSmall
  // }
});

export { Typography };
