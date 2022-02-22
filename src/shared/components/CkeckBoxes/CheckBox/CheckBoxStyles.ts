import generateStyledComponent from "shared/3rdParties/styledComponentsLib";
import {Pressable, Text, View} from "react-native";
import metrics from "shared/utils/metrics";

const {scale} = metrics;

export const PressableWrapper = generateStyledComponent({
  extendsNode: Pressable,
  displayName: "PressableWrapper",
  options: (props: {uncheckedBorderColor: string; checkedBackgroundColor: string; checked: boolean}) => ({
    width: scale(16),
    height: scale(16),

    borderRadius: 4,
    borderColor: !props.checked ? props.uncheckedBorderColor : "transparent",
    borderWidth: !props.checked ? 1 : 0,

    backgroundColor: props.checked ? props.checkedBackgroundColor : "transparent",

    justifyContent: "center",
    alignItems: "center",
  }),
});

export const CheckBoxContainer = generateStyledComponent({
  extendsNode: View,
  displayName: "CheckBocContainer",
  options: () => ({
    height: scale(24),

    marginTop: 30,

    flexDirection: "row",
    alignItems: "center",
  }),
});

export const CheckBoxLabel = generateStyledComponent({
  extendsNode: Text,
  displayName: "CheckBocLabel",
  options: {
    marginLeft: scale(10),
  },
});
