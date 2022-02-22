import {StyleSheet, Text, View} from "react-native";
import metrics from "shared/utils/metrics";
import generateStyledComponent from "shared/3rdParties/styledComponentsLib";
import {getFont} from "shared/designSystem/fonts/fontHelpers/fontBuilder";
import {EFontDesign} from "shared/designSystem/fonts/_models";
import {ITheme} from "shared/designSystem/_models";

const {scale} = metrics;

export const MainAlertWrapper = generateStyledComponent({
  extendsNode: View,
  displayName: "MainAlertWrapper",
  options: (props: {backgroundColor: string}) => {
    return {
      backgroundColor: props.backgroundColor,
      flex: 1,
      flexDirection: "row",
      minHeight: scale(101),
      width: "100%",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      paddingTop: metrics.hasPhoneNotch ? scale(40) : scale(20),
      paddingHorizontal: scale(22),
      paddingBottom: scale(16),
      alignItems: "center",
      borderBottomLeftRadius: scale(20),
      borderBottomRightRadius: scale(20),
    };
  },
});

export const AlertTextWrapper = generateStyledComponent({
  extendsNode: View,
  displayName: "AlertTextWrapper",
  options: {
    paddingLeft: scale(12),
  },
});

export const AlertTextTitle = generateStyledComponent({
  extendsNode: Text,
  displayName: "AlertTextTitle",
  options: (props: {theme: ITheme}) => ({
    ...getFont(EFontDesign.ExoH16SemiBold),
    color: props.theme.Colors.General.G0,
    marginBottom: scale(3),
  }),
});

export const AlertTextDescription = generateStyledComponent({
  extendsNode: Text,
  displayName: "AlertTextDescription",
  options: (props: {theme: ITheme}) => ({
    color: props.theme.Colors.General.G0,
    // ...getFont() font-family: Nunito Sans;
  }),
});

export const styles = StyleSheet.create({
  svg: {marginBottom: scale(39)},
});
