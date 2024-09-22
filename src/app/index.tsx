import "../global.css";
import { View, Text } from "react-native";
import React, { useEffect } from "react";
import LoginScreen from "../screen/LoginScreen";
import { useFonts } from "expo-font";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "../components/navigation/TabNavigation";
import HomeScreen from "./(tabs)/HomeScreen";
import { router } from "expo-router";
import CourseDetailsScreen from "./(tabs)/(details)/CourseDetailsScreen";

const App = () => {
  const [fontsLoaded] = useFonts({
    outfit: require("../../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("../../assets/fonts/Outfit-Bold.ttf"),
    "outfit-semibold": require("../../assets/fonts/Outfit-SemiBold.ttf"),
  });

  const publishableKey =
    "pk_test_dG9sZXJhbnQtbGVtbWluZy00OS5jbGVyay5hY2NvdW50cy5kZXYk";

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <View className="flex-1">
        <SignedIn></SignedIn>
        <SignedOut>
          {/* <LoginScreen /> */}
          {/* <HomeScreen /> */}
          <CourseDetailsScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
};

export default App;
