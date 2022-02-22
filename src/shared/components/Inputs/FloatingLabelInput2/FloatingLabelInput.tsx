// import React, { useLayoutEffect, useState } from "react";
// import { Text, TextInput, TextInputProps, View } from "react-native";
// import Animated, {
//   interpolate,
//   interpolateColor,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from "react-native-reanimated";
// // import { scale } from "react-native-size-matters"; не нужно
// // import Colors from "shared/designSystem/colors/Colors"; не нужно
// // import useThemeSystem from "shared/designSystem/theme/useThemeSystem"; не нужно
// import { InputBorderView, InputTextColor, InputTitleColor, styles } from "shared/components/Inputs/FloatingLabelInput2/FloatingLabelInputStyles";
//
// interface IProps {
//   value: string;
//   onChange: (newValue: string) => void;
//   label: string;
//   isError?: boolean;
//   errorText?: string;
//   inputProps?: TextInputProps;
//   placeholder?: string;
//   protected?: boolean;
// }
//
// // const SCALED_START_POS = scale(-5); с метрикс
//
// const SCALED_FINISH_POS = scale(-35);
//
// const FloatingLabelInput: React.VFC<IProps> = ({
//   value,
//   onChange,
//   label,
//   isError,
//   errorText,
//   inputProps,
//   placeholder,
// }) => {
//   // const { themePalette } = useThemeSystem(); не нужно
//   const [isFocused, setIsFocused] = useState<boolean>(false);
//
//   const titleYValue = useSharedValue(0);
//
//   // ---------------- SIDE EFFECTS ------------------
//
//   useLayoutEffect(() => {
//     if (value.length > 0) {
//       titleYValue.value = 1;
//     }
//     if (placeholder && placeholder.length > 0) {
//       titleYValue.value = 1;
//     }
//   }, []);
//
//   // ---------------- ANIMATED STYLES ------------------
//
//   const titleYStyles = useAnimatedStyle(() => {
//     // let color: string | number = Colors.Secondary.S4; назначать статические цвета
//
//     if (isFocused) {
//       color = interpolateColor(titleYValue.value, [0, 1], [Colors.Secondary.S4, Colors.Primary.P1]);
//     }
//     if (isError) {
//       color = Colors.Additional.A2;
//     }
//
//     return {
//       transform: [
//         {
//           translateY: interpolate(titleYValue.value, [0, 1], [SCALED_START_POS, SCALED_FINISH_POS]),
//         },
//       ],
//       fontSize: interpolate(titleYValue.value, [0, 1], [16, 14]),
//       color,
//     };
//   }, [isFocused, isError]);
//
//   const borderAnimatedStyles = useAnimatedStyle(() => {
//     let color: string | number = Colors.Secondary.S4;
//
//     if (isFocused) {
//       color = interpolateColor(titleYValue.value, [0, 1], [Colors.Secondary.S4, Colors.Primary.P1]);
//     }
//     if (isError) {
//       color = Colors.Additional.A2;
//     }
//
//     return {
//       borderColor: color,
//     };
//   }, [isFocused, isError]);
//
//   // ---------------- HANDLERS ------------------
//
//   const floatTitle = () => {
//     titleYValue.value = withTiming(1);
//   };
//
//   const defloatTitle = () => {
//     if (value.length > 0) return;
//     if (placeholder && placeholder.length > 0) return;
//     titleYValue.value = withTiming(0);
//   };
//
//   const onFocusInput = () => {
//     floatTitle();
//     setIsFocused(true);
//   };
//
//   const onBlurInput = () => {
//     defloatTitle();
//     setIsFocused(false);
//   };
//
//   // ---------------- RENDER METHODS ------------------
//
//   const renderInputTitle = () => {
//     return <Animated.Text style={[titleYStyles, styles.title, InputTitleColor(themePalette)]}>{label}</Animated.Text>;
//   };
//
//   const renderInput = () => {
//     return (
//       <TextInput
//         value={value}
//         onChangeText={onChange}
//         onFocus={onFocusInput}
//         onBlur={onBlurInput}
//         style={[styles.input, InputTextColor(, isFocused)]}
//         placeholder={placeholder}
//         {...inputProps}
//       />
//     );
//   };
//
//   const renderError = () => {
//     if (!isError) return null;
//
//     return <Text style={styles.error}>{errorText}</Text>;
//   };
//
//   return (
//     <View style={styles.container}>
//       <InputBorderView theme={themePalette} isFocused={isFocused} style={borderAnimatedStyles}>
//         {renderInputTitle()}
//         {renderInput()}
//       </InputBorderView>
//       {renderError()}
//     </View>
//   );
// };
//
// export default FloatingLabelInput;
