import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList } from "../types";
import {
  HEADER_TITLE_HOME,
  SCREEN_HOME,
} from "../utils/constants";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name={SCREEN_HOME}
          component={HomeScreen}
          options={{ title: HEADER_TITLE_HOME, headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
