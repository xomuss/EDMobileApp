import generateStyledComponent from "shared/3rdParties/styledComponentsLib";
import Animated from "react-native-reanimated";
import metrics from "shared/utils/metrics";
import {Pressable} from "react-native";

const {scale} = metrics;

export const SwitcherContainerView = generateStyledComponent({
  extendsNode: Animated.View,
  displayName: "SwitcherContainerView",
  options: {
    width: scale(102),
    height: scale(42),
    borderRadius: scale(21),
    backgroundColor: "#A2ABFF",
  },
});

export const SwitcherCircleView = generateStyledComponent({
  extendsNode: Animated.View,
  displayName: "SwitcherCircleView",
  options: {
    width: scale(60),
    height: scale(60),
    borderRadius: scale(60),
    backgroundColor: "blue",
    position: "absolute",
    top: scale(-10),
  },
});

export const PressableContainer = generateStyledComponent({
  extendsNode: Pressable,
  displayName: "PressableContainer",
});
