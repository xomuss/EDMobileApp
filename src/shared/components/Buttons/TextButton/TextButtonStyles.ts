import generateStyledComponent from "shared/3rdParties/styledComponentsLib";
import {Pressable, Text} from "react-native";
import metrics from "shared/utils/metrics";
import {EButtonState} from "shared/components/Buttons/_models";
import {getTitleButtonColors} from "shared/components/Buttons/helpers";
import {ITheme} from "shared/designSystem/_models";

const scale = metrics.scale;

export const PressableButton = generateStyledComponent({
  extendsNode: Pressable,
  displayName: "PressableButton",

  options: (props: {isFullSize: boolean; buttonState: EButtonState}) => {
    return {
      flexDirection: "row",
      alignItems: "center",

      width: props.isFullSize ? "100%" : scale(124),
      height: scale(24),
    };
  },
});

export const ButtonTitle = generateStyledComponent({
  extendsNode: Text,
  displayName: "ButtonTitle",

  options: (props: {buttonState: EButtonState; color: ITheme}) => {
    return {
      color: props.color.Colors.General.G0 || getTitleButtonColors(props.buttonState),
      fontWeight: 400,
      fontSize: 12,
    };
  },
});
