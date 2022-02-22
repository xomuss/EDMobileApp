import {BeforeAuthNavigatorParams} from "navigation/navigators/BeforeAuthNavigator/BeforeAuthNavigatorParams";
import type {NativeStackScreenProps} from "@react-navigation/native-stack";
import React, {useState} from "react";
import {MainWrapperView} from "containers/screens/LaunchScreen/LaunchScreenStyles";
import {Button, Text} from "react-native";
import {useTheme} from "@react-navigation/native";
import {ITheme} from "shared/designSystem/_models";
import FloatingLabelInput from "shared/components/Inputs/FloatingLabelInput";
import {useDispatch} from "react-redux";
import rootReducer from "models/state/reducers/rootReducer";
import Switcher from "shared/components/Switchers/Switcher";
import CheckBox from "shared/components/CkeckBoxes/CheckBox";

type Props = NativeStackScreenProps<BeforeAuthNavigatorParams, "LaunchScreen">;

const LaunchScreen: React.VFC<Props> = () => {
  const theme = useTheme() as ITheme;
  const [checked, setChecked] = useState(true);

  const dispatch = useDispatch();

  const handleOnPress = () => {
    dispatch(
      rootReducer.actions.showAlert({
        message: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
        alertType: "success",
      }),
    );
  };

  const onCheckBoxChange = (newValue: boolean) => {
    setChecked(newValue);
  };

  return (
    <MainWrapperView>
      <Button title={"open-modal"} onPress={handleOnPress} />
      <Text style={{color: theme.Colors.System.Green.G0}}>Test text and button</Text>
      <FloatingLabelInput
        value={""}
        onChange={() => {
          console.info("test");
        }}
        label={"label"}
      />
      <Switcher value={false} />
      <CheckBox label={"I agree to the Terms & Conditions of use."} value={checked} onChange={onCheckBoxChange} />
    </MainWrapperView>
  );
};

export default LaunchScreen;
