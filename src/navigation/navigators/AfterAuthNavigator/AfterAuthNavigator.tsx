import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "containers/screens/HomeScreen/HomeScreen";
import {AfterAuthNavigatorParams} from "navigation/navigators/AfterAuthNavigator/AfterAuthNavigatorParams";

const Stack = createNativeStackNavigator<AfterAuthNavigatorParams>();

const AfterAuthNavigator: React.VFC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AfterAuthNavigator;
