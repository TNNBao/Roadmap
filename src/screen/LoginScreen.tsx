import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const {
        createdSessionId,
        signIn,
        signUp,
        setActive = () => {},
      } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
        router.push("/HomeScreen");
      } else {
        // ...
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View className="flex-1 items-center">
      <Image
        source={require("./../../assets/images/home.png")}
        className="object-contain mt-10"
      />
      <View className="h-full w-full mt-[-80] p-6 bg-primary">
        <Text
          className="text-center text-4xl mt-4 text-white"
          style={{ fontFamily: "outfit-bold" }}
        >
          CODEBOX
        </Text>
        <Text
          className="text-center text-xl text-light-primary mt-10"
          style={{ fontFamily: "outfit" }}
        >
          Your Ultimate Programming Learning Box
        </Text>
        <TouchableOpacity onPress={onPress}>
          <View className="flex-row justify-center items-center gap-6 p-4 mt-10 rounded-full bg-white">
            <Image
              source={require("./../../assets/images/google-logo.png")}
              className="w-10 h-10"
            />
            <Text
              className="text-lg text-primary"
              style={{ fontFamily: "outfit-bold" }}
            >
              Sign in with Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
