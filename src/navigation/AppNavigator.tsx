import BeforeAuthNavigator from "navigation/navigators/BeforeAuthNavigator";
import React from "react";
import AfterAuthNavigator from "navigation/navigators/AfterAuthNavigator/AfterAuthNavigator";

const AppNavigator: React.VFC = () => {
  const isSignedIn: boolean = false;

  return isSignedIn ? <AfterAuthNavigator /> : <BeforeAuthNavigator />;
};

export default AppNavigator;
