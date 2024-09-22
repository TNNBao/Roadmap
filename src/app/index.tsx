import "../global.css";
import { View, Text } from "react-native";
import React, { useEffect } from "react";
import LoginScreen from "./(auth)/LoginScreen";
import { useFonts } from "expo-font";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import TabNavigation from "../components/navigation/TabNavigation";
const App = () => {
  const [fontsLoaded] = useFonts({
    outfit: require("../../assets/fonts/Outfit-Regular.ttf"),
    "outfit-bold": require("../../assets/fonts/Outfit-Bold.ttf"),
    "outfit-semibold": require("../../assets/fonts/Outfit-SemiBold.ttf"),
  });

  return (
    <View className="flex-1">
      <SignedIn>
        <TabNavigation />
      </SignedIn>
      <SignedOut>
        <LoginScreen />
        {/* <CourseDetailScreen /> */}
      </SignedOut>
    </View>
  );
};

export default App;
