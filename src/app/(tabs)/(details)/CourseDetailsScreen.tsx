import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const CourseDetailsScreen = () => {
  return (
    <View className="p-5">
      <TouchableOpacity>
        <Ionicons name="arrow-back-circle" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CourseDetailsScreen;
