import generateStyledComponent from "shared/3rdParties/styledComponentsLib";
import metrics from "shared/utils/metrics";
import {getFont} from "shared/designSystem/fonts/fontHelpers/fontBuilder";
import {Pressable, Text, View} from "react-native";
import {EFontDesign} from "shared/designSystem/fonts/_models";
import {ITheme} from "shared/designSystem/_models";

const {scale} = metrics;

export const PressableWrapper = generateStyledComponent({
  extendsNode: Pressable,
  displayName: "PressableWrapper",
  options: (props: {theme: ITheme}) => ({
    flexDirection: "row",
    alignItems: "center",

    width: "100%",
    height: scale(130),
    paddingRight: scale(21),
    paddingLeft: scale(19),

    backgroundColor: "#1A1C5E" || props.theme.Colors.General.G1, // dark theme
  }),
});

export const ViewContainer = generateStyledComponent({
  extendsNode: View,
  displayName: "ViewContainer",
  options: {
    width: scale(150),

    marginLeft: scale(21),
    marginRight: scale(22),
  },
});

export const TextTitle = generateStyledComponent({
  extendsNode: Text,
  displayName: "TextTitle",
  options: (props: {theme: ITheme}) => ({
    ...getFont(EFontDesign.ExoH18Medium),
    color: props.theme.Colors.General.G0,
  }),
});

export const TextDescription = generateStyledComponent({
  extendsNode: Text,
  displayName: "TextDescription",
  options: (props: {theme: ITheme}) => ({
    ...getFont(EFontDesign.ExoH18Medium),
    color: props.theme.Colors.General.G0,
  }),
});

export const WarningViewContainer = generateStyledComponent({
  extendsNode: View,
  displayName: "WarningViewContainer",

  options: {
    flexDirection: "row",
    alignItems: "center",

    height: scale(34),
    marginRight: scale(10),
    padding: scale(8.5),

    borderRadius: scale(27),

    backgroundColor: "rgba(255, 91, 91, 0.2)",
  },
});

export const WarningText = generateStyledComponent({
  extendsNode: Text,
  displayName: "WarningText",

  options: (props: {theme: ITheme}) => ({
    marginLeft: scale(7),
    color: props.theme.Colors.System.Red.R0,
  }),
});

export const SecureViewContainer = generateStyledComponent({
  extendsNode: View,
  displayName: "SecureViewContainer",

  options: {
    flexDirection: "row",
    alignItems: "center",

    height: scale(34),
    padding: scale(8.5),

    borderRadius: scale(27),

    backgroundColor: "rgba(67, 216, 171, 0.2)",
  },
});

export const SecureText = generateStyledComponent({
  extendsNode: Text,
  displayName: "SecureText",

  options: (props: {theme: ITheme}) => ({
    marginLeft: scale(7),
    color: props.theme.Colors.System.Green.G0,
  }),
});
