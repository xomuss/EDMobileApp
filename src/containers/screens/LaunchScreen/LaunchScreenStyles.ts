import {View, Text, Button} from "react-native";
import generateStyledComponent from "shared/3rdParties/styledComponentsLib";
import {scale} from "react-native-utils-scale";

export const MainWrapperView = generateStyledComponent({
  extendsNode: View,
  options: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  displayName: "MainWrapperView",
});

export const TitleScreenText = generateStyledComponent({
  extendsNode: Text,
  displayName: "TitleScreenText",
  options: {
    paddingTop: scale(20),
  },
});

export const StyledButton = generateStyledComponent({
  extendsNode: Button,
  displayName: "StyledButton",
});
