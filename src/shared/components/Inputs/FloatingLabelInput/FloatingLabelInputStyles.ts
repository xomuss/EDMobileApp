import {StyleSheet, TextInput, TextStyle} from "react-native";
import Animated from "react-native-reanimated";
import generateStyledComponent from "shared/3rdParties/styledComponentsLib";
import Metrics from "shared/utils/metrics";
import {ITheme} from "shared/designSystem/_models";
import Text = Animated.Text;

const {scale} = Metrics;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: scale(70),
  },
  input: {},
  title: {
    alignSelf: "flex-start",
    position: "absolute",
    left: scale(16),
    top: scale(19),
    paddingHorizontal: scale(8),
  },
});

export const InputBorderView = generateStyledComponent({
  extendsNode: Animated.View,
  options: () => ({
    height: scale(46),
    width: scale(320),
    borderBottomWidth: 2,
    paddingVertical: scale(12),
    paddingLeft: scale(24),
  }),
  displayName: "InputBorderView",
});

export const InputTextColor = (isFocused: boolean, theme: ITheme) =>
  ({
    color: isFocused ? theme.Colors.Text.T5 : theme.Colors.General.G3,
  } as TextStyle);

export const InputTextError = generateStyledComponent({
  extendsNode: Text,
  displayName: "InputError",
  options: (props: {theme: ITheme}) => ({
    color: props.theme.Colors.System.Red.R0,
    paddingLeft: scale(24),
    marginTop: scale(1),
  }),
});

export const InputTextInput = generateStyledComponent({
  extendsNode: TextInput,
  displayName: "InputTextInput",
  options: {
    // ...getFont(EFontDesign.ExoH16Regular),
  },
});
