import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Stack } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "@/src/app/(stack)/(tabs)/HomeScreen";
import MyCourse from "@/src/app/(stack)/(tabs)/MyCourse";
import LeaderBoard from "@/src/app/(stack)/(tabs)/LeaderBoard";
import ProfileScreen from "@/src/app/(stack)/(tabs)/ProfileScreen";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="my-course" component={MyCourse} />
        <Tab.Screen name="leaderboard" component={LeaderBoard} />
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
