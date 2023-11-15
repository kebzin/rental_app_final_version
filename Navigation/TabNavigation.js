import React from "react";
import { icons, COLORS } from "../constants/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const TabNavigation = () => {
  const TabIcon = ({ icon, focused, Onpress }) => {
    return (
      <TouchableWithoutFeedback onPress={Onpress}>
        <Image
          resizeMode="cover"
          source={icon}
          style={{
            width: 30,
            height: 30,
            tintColor: focused === true ? COLORS.primary : COLORS.grey,
          }}
        />
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            TabIcon({
              icon: icons.cube,
              focused: focused,
              // Onpress: () => Navigation.navigate("Home"),
            }),
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "white",
          headerTitleAllowFontScaling: true,

          // headerLeft: () => HeaderLeft({ icon: icons.logo }),
          // headerRight: () => HeaderRight({ icon: icons.bell }),
        }}
        component={""}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
