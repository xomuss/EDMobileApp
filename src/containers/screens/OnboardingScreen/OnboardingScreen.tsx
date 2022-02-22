import React from "react";
import {
  MainWrapperView,
  StyledButton,
  TitleScreenText,
} from "containers/screens/OnboardingScreen/OnboardingScreenStyles";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {BeforeAuthNavigatorParams} from "navigation/navigators/BeforeAuthNavigator/BeforeAuthNavigatorParams";

type Props = NativeStackScreenProps<BeforeAuthNavigatorParams, "OnboardingScreen">;

const OnboardingScreen: React.VFC<Props> = () => {
  const handleOnPress = () => {
    console.info("it is working");
  };

  return (
    <MainWrapperView>
      <TitleScreenText>OnboardingScreen</TitleScreenText>
      <StyledButton title="to LaunchScreen" onPress={handleOnPress} />
    </MainWrapperView>
  );
};

export default OnboardingScreen;
