import { View, Text } from "react-native";
import React from "react";
import CourseList from "../../../components/CourseList";
import Header from "@/src/components/Header";

const HomeScreen = () => {
  return (
    <View className="bg-gray-300">
      <View className="p-4 pt-16 w-full h-80 bg-primary">
        <Header />
      </View>
      <View className="p-4">
        <View className="mt-[-80px]">
          <CourseList level={"basic"} />
        </View>
        <CourseList level={"advance"} />
      </View>
    </View>
  );
};

export default HomeScreen;
