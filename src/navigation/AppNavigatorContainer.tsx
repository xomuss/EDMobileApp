import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import AppNavigator from "navigation/AppNavigator";
import {navigationRef} from "navigation/navigationObject";
import TopLevelContainers from "containers/TopLevelContainers";
import useThemeSystem from "shared/designSystem/theme/useThemeSystem";

const AppNavigatorContainer: React.VFC = () => {
  const {themePalette} = useThemeSystem();

  return (
    <NavigationContainer ref={navigationRef} theme={themePalette}>
      <TopLevelContainers />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default AppNavigatorContainer;
