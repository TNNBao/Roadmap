import { View, Text } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  value: string;
};

const OptionItem = ({ icon, value }: Props) => {
  return (
    <View className="flex flex-row items-center gap-2 mt-1">
      <Ionicons name={icon} size={18} color="black" />
      <Text style={{ fontFamily: "outfit" }}>{value}</Text>
    </View>
  );
};

export default OptionItem;
