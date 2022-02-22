// import {StyleSheet, TextStyle} from "react-native";
// import Animated from "react-native-reanimated";
// import Colors from "shared/designSystem/colors/Colors";
// import {getFont} from "shared/designSystem/fonts/fontHelpers/fontBuilder";
// import {EFontType} from "shared/designSystem/fonts/_models";
// import {ITheme} from "shared/designSystem/_models";
// import generateStyledComponent from "shared/3rdParties/styledComponentsLib";
// import Metrics from "shared/utils/metrics";
//
// const {scale} = Metrics;
//
// export const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: scale(70),
//   },
//   input: {
//     ...getFont(16, EFontType.RegularContent),
//   },
//   title: {
//     alignSelf: "flex-start",
//     position: "absolute",
//     left: scale(16),
//     top: scale(19),
//     paddingHorizontal: scale(8),
//   },
//   error: {
//     ...getFont(12, EFontType.MediumContent),
//     color: Colors.Additional.A2,
//     paddingLeft: scale(24),
//     marginTop: scale(1),
//   },
// });
//
// export const InputBorderView = generateStyledComponent({
//   extendsNode: Animated.View,
//   options: ({theme: {Colors: _Colors}, isFocused}: {theme: ITheme; isFocused: boolean}) => ({
//     height: scale(46),
//     borderWidth: 2,
//     paddingVertical: scale(12),
//     paddingLeft: scale(24),
//     borderRadius: scale(16),
//     borderColor: isFocused ? _Colors.Primary.P1 : _Colors.Secondary.S4,
//     backgroundColor: _Colors.Secondary.S1,
//   }),
//   displayName: "InputBorderView",
// });
//
// export const InputTextColor = (isFocused: boolean) =>
//   ({
//     color: isFocused ? _Colors.Primary.P4 : _Colors.Secondary.S4,
//   } as TextStyle);
//
// export const InputTitleColor = ({Colors: _Colors}: ITheme) =>
//   ({
//     backgroundColor: _Colors.Secondary.S1,
//   } as TextStyle);
