import React, {useEffect} from "react";
import {
  PressableContainer,
  SwitcherCircleView,
  SwitcherContainerView,
} from "shared/components/Switchers/Switcher/SwitcherStyles";
import {interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import metrics from "shared/utils/metrics";
import {useTheme} from "@react-navigation/native";
import {ITheme} from "shared/designSystem/_models";

const {scale} = metrics;

interface IProps {
  handleOnPress?: () => void;
  activeTrackColor?: string;
  inActiveTrackColor?: string;
  activeThumbColor?: string;
  inActiveThumbColor?: string;
  isDisable?: boolean;
  value: boolean;
}

const SCALED_START_POSITION = scale(0);

const SCALED_FINISH_POSITION = scale(42);

const Switcher: React.VFC<IProps> = ({
  handleOnPress,
  activeTrackColor,
  inActiveTrackColor,
  inActiveThumbColor,
  activeThumbColor,
  value,
  isDisable,
}) => {
  const theme = useTheme() as ITheme;

  const switchAnimatedState = useSharedValue(0);

  // ---------------- SIDE EFFECTS ------------------
  useEffect(() => {
    if (value) {
      switchAnimatedState.value = 1;
    } else {
      switchAnimatedState.value = 0;
    }
  }, []);

  // ---------------- ANIMATED STYLES ------------------
  const switcherCircleStyles = useAnimatedStyle(() => {
    let backgroundColor;

    if (isDisable) {
      backgroundColor = interpolateColor(
        switchAnimatedState.value,
        [0, 1],
        [theme.Colors.System.Gray.G1, theme.Colors.System.Purple.P1],
      );
    } else {
      backgroundColor = interpolateColor(
        switchAnimatedState.value,
        [0, 1],
        [inActiveThumbColor || theme.Colors.System.Gray.G0, activeThumbColor || theme.Colors.System.Purple.P0],
      );
    }

    const transform = [
      {
        translateX: interpolate(switchAnimatedState.value, [0, 1], [SCALED_START_POSITION, SCALED_FINISH_POSITION]),
      },
    ];

    return {
      transform,
      backgroundColor,
    };
  });

  const switcherBackgroundColorStyles = useAnimatedStyle(() => {
    let backgroundColor;

    if (isDisable) {
      backgroundColor = interpolateColor(
        switchAnimatedState.value,
        [0, 1],
        [theme.Colors.System.Gray.G2, theme.Colors.System.Purple.P2],
      );
    } else {
      backgroundColor = interpolateColor(
        switchAnimatedState.value,
        [0, 1],
        [inActiveTrackColor || theme.Colors.System.Gray.G1, activeTrackColor || theme.Colors.System.Purple.P1],
      );
    }

    return {
      backgroundColor,
    };
  });

  // ---------------- HANDLERS ------------------
  const onSwitch = React.useCallback(() => {
    switchAnimatedState.value === 0
      ? (switchAnimatedState.value = withTiming(1))
      : (switchAnimatedState.value = withTiming(0));

    if (typeof handleOnPress === "function") {
      handleOnPress();
    }
  }, [switchAnimatedState, value]);

  return (
    <PressableContainer onPress={onSwitch}>
      <SwitcherContainerView style={switcherBackgroundColorStyles}>
        <SwitcherCircleView style={switcherCircleStyles} />
      </SwitcherContainerView>
    </PressableContainer>
  );
};

export default Switcher;
