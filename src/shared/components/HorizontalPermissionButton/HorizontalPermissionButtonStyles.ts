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

    width: scale(320),
    height: scale(100),
    paddingRight: scale(20),
    paddingLeft: scale(16),

    borderRadius: scale(20),

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
