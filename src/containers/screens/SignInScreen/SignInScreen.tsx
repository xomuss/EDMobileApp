import React from "react";
import {MainWrapperView, TitleScreenText} from "containers/screens/SignInScreen/SignInScreenStyles";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {BeforeAuthNavigatorParams} from "navigation/navigators/BeforeAuthNavigator/BeforeAuthNavigatorParams";

type Props = NativeStackScreenProps<BeforeAuthNavigatorParams, "SignInScreen">;

const SignInScreen: React.VFC<Props> = () => {
  return (
    <MainWrapperView>
      <TitleScreenText>Sign In Screen</TitleScreenText>
    </MainWrapperView>
  );
};

export default SignInScreen;
