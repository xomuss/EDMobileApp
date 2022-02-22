import generateStyledComponent from "shared/3rdParties/styledComponentsLib";
import {StyleSheet, View} from "react-native";

export const MainErrorWrapperView = generateStyledComponent({
  extendsNode: View,
  options: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
  },
  displayName: "MainErrorWrapperView",
});

export const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
  },
});
