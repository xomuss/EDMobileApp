import generateStyledComponent from "shared/3rdParties/styledComponentsLib";
import Animated from "react-native-reanimated";
import metrics from "shared/utils/metrics";
import {Pressable} from "react-native";

const {scale} = metrics;

export const SwitcherContainerView = generateStyledComponent({
  extendsNode: Animated.View,
  displayName: "SwitcherContainerView",
  options: {
    width: scale(34),
    height: scale(14),
    borderRadius: scale(14),
    backgroundColor: "#A2ABFF",
  },
});

export const SwitcherCircleView = generateStyledComponent({
  extendsNode: Animated.View,
  displayName: "SwitcherCircleView",
  options: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(20),
    backgroundColor: "blue",
    position: "absolute",
    top: scale(-3),
  },
});

export const PressableContainer = generateStyledComponent({
  extendsNode: Pressable,
  displayName: "PressableContainer",
});
