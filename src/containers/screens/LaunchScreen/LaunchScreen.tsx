import {BeforeAuthNavigatorParams} from "navigation/navigators/BeforeAuthNavigator/BeforeAuthNavigatorParams";
import type {NativeStackScreenProps} from "@react-navigation/native-stack";
import React from "react";
import {MainWrapperView} from "containers/screens/LaunchScreen/LaunchScreenStyles";
import HorizontalPermissionInfoBlock from "shared/components/HorizontalPermissionInfoBlock";
import HorizontalPermissionButton from "shared/components/HorizontalPermissionButton";

type Props = NativeStackScreenProps<BeforeAuthNavigatorParams, "LaunchScreen">;

const LaunchScreen: React.VFC<Props> = () => {
  return (
    <MainWrapperView>
      <HorizontalPermissionInfoBlock secureValue={20} warningValue={5} />
      <HorizontalPermissionButton />
    </MainWrapperView>
  );
};

export default LaunchScreen;
