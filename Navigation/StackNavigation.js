import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Walkthrough/Welcome";
import Walkthrough from "../screens/Walkthrough/Walkthrough";
import AuthMain from "../screens/Authentication/AuthMain";
import { Onboading } from "../screens";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const screenOptions = {
    headerShadowVisible: false,
    headerShown: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        initialRouteName="Welcome"
        options={screenOptions}
      />
      <Stack.Screen
        name="Walkthrough"
        component={Walkthrough}
        options={screenOptions}
      />
      <Stack.Screen name="Auth" component={AuthMain} options={screenOptions} />
      <Stack.Screen
        name="onboading"
        component={Onboading}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
