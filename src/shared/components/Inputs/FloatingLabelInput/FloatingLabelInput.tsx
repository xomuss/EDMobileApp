import React, {useLayoutEffect, useState} from "react";
import {TextInputProps, View} from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  InputBorderView,
  InputTextColor,
  InputTextError,
  InputTextInput,
  styles,
} from "shared/components/Inputs/FloatingLabelInput/FloatingLabelInputStyles";
import metrics from "shared/utils/metrics";
import {useTheme} from "@react-navigation/native";
import {ITheme} from "shared/designSystem/_models";

const {scale} = metrics;

interface IProps {
  value: string;
  onChange: (newValue: string) => void;
  label: string;
  isError?: boolean;
  errorText?: string;
  inputProps?: TextInputProps;
  placeholder?: string;
  protected?: boolean;
}

const SCALED_START_POS = scale(-5);

const SCALED_FINISH_POS = scale(-35);

const FloatingLabelInput: React.VFC<IProps> = ({
  value,
  onChange,
  label,
  isError,
  errorText,
  inputProps,
  placeholder,
}) => {
  // const { themePalette } = useThemeSystem(); не нужно
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const theme = useTheme() as ITheme;

  const titleYValue = useSharedValue(0);

  // ---------------- SIDE EFFECTS ------------------

  useLayoutEffect(() => {
    if (value.length > 0) {
      titleYValue.value = 1;
    }
    if (placeholder && placeholder.length > 0) {
      titleYValue.value = 1;
    }
  }, []);

  // ---------------- ANIMATED STYLES ------------------

  const titleYStyles = useAnimatedStyle(() => {
    let color: string | number = theme.Colors.General.G5;

    if (isFocused) {
      color = interpolateColor(titleYValue.value, [0, 1], [theme.Colors.General.G5, theme.Colors.Text.T3]);
    }
    if (isError) {
      color = theme.Colors.Text.T1;
    }

    return {
      transform: [
        {
          translateY: interpolate(titleYValue.value, [0, 1], [SCALED_START_POS, SCALED_FINISH_POS]),
        },
      ],
      fontSize: interpolate(titleYValue.value, [0, 1], [16, 14]), //font-family: Nunito Sans;
      color,
    };
  }, [isFocused, isError]);

  const borderAnimatedStyles = useAnimatedStyle(() => {
    let color: string | number = theme.Colors.General.G2;

    if (isFocused) {
      color = interpolateColor(titleYValue.value, [0, 1], [theme.Colors.General.G2, theme.Colors.General.G5]);
    }
    if (isError) {
      color = theme.Colors.System.Red.R0;
    }

    return {
      borderColor: color,
    };
  }, [isFocused, isError]);

  // ---------------- HANDLERS ------------------

  const floatTitle = () => {
    titleYValue.value = withTiming(1);
  };

  const defloatTitle = () => {
    if (value.length > 0) return;
    if (placeholder && placeholder.length > 0) return;
    titleYValue.value = withTiming(0);
  };

  const onFocusInput = () => {
    floatTitle();
    setIsFocused(true);
  };

  const onBlurInput = () => {
    defloatTitle();
    setIsFocused(false);
  };

  // ---------------- RENDER METHODS ------------------

  const renderInputTitle = () => {
    return <Animated.Text style={[titleYStyles, styles.title]}>{label}</Animated.Text>;
  };

  const renderInput = () => {
    return (
      <InputTextInput
        value={value}
        onChangeText={onChange}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        style={[styles.input, InputTextColor(isFocused, theme)]}
        placeholder={placeholder}
        {...inputProps}
      />
    );
  };

  const renderError = () => {
    if (!isError) return null;

    return <InputTextError theme={theme}>{errorText}</InputTextError>; //font-family: Nunito Sans;
  };

  return (
    <View style={styles.container}>
      <InputBorderView isFocused={isFocused} style={borderAnimatedStyles}>
        {renderInputTitle()}
        {renderInput()}
      </InputBorderView>
      {renderError()}
    </View>
  );
};

export default FloatingLabelInput;
