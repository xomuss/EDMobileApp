import {View, Text, Button} from "react-native";
import generateStyledComponent from "shared/3rdParties/styledComponentsLib";

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
});

export const StyledButton = generateStyledComponent({
  extendsNode: Button,
  displayName: "StyledButton",
});
