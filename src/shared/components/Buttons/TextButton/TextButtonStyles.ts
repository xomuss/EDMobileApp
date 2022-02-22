import generateStyledComponent from "shared/3rdParties/styledComponentsLib";
import {Pressable, Text} from "react-native";
import metrics from "shared/utils/metrics";
import {EButtonState} from "shared/components/Buttons/_models";
import {getTitleButtonColors} from "shared/components/Buttons/helpers";

const scale = metrics.scale;

export const PressableButton = generateStyledComponent({
  extendsNode: Pressable,
  displayName: "PressableButton",
  options: (props: {isFullSize: boolean; buttonState: EButtonState}) => {
    return {
      width: props.isFullSize ? "100%" : scale(240),
      height: scale(48),
      borderRadius: scale(16),
      paddingHorizontal: scale(24),
      paddingVertical: scale(13),
    };
  },
});

export const ButtonTitle = generateStyledComponent({
  extendsNode: Text,
  displayName: "ButtonTitle",
  options: (props: {buttonState: EButtonState}) => {
    return {
      color: getTitleButtonColors(props.buttonState),
      textAlign: "center",
      fontWeight: 400,
      fontSize: 12,
    };
  },
});
