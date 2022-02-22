import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {BeforeAuthNavigatorParams} from "navigation/navigators/BeforeAuthNavigator/BeforeAuthNavigatorParams";
import OnboardingScreen from "containers/screens/OnboardingScreen";
import LaunchScreen from "containers/screens/LaunchScreen";
import SignInScreen from "containers/screens/SignInScreen";
import SignUpScreen from "containers/screens/SignUpScreen";
import CreatePasswordScreen from "containers/screens/CreatePasswordScreen";
import ForgetPasswordScreen from "containers/screens/ForgetPasswordScreen";

const Stack = createNativeStackNavigator<BeforeAuthNavigatorParams>();

const BeforeAuthNavigator: React.VFC = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      </Stack.Group>
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerBackTitle: "",
          headerShadowVisible: false,
          headerStyle: {backgroundColor: "#fff"},
          headerTintColor: "violet",
        }}
      />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="CreatePasswordScreen" component={CreatePasswordScreen} />
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
    </Stack.Navigator>
  );
};

export default BeforeAuthNavigator;
