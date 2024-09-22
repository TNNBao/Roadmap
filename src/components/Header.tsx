import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Ionicons from "@expo/vector-icons/Ionicons";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  return (
    isLoaded && (
      <View>
        <View style={[{ justifyContent: "space-between" }, styles.rowStyle]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              width: 100,
            }}
          >
            <Image
              source={{ uri: user?.imageUrl }}
              style={{ width: 50, height: 50, borderRadius: 99 }}
            />
            <View>
              <Text className="text-white">Welcome,</Text>
              <Text
                className="text-white"
                style={{ fontSize: 20, fontFamily: "outfit" }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {user?.fullName}
              </Text>
            </View>
          </View>
          <View style={styles.rowStyle}>
            <Image
              source={require("../../assets/images/coin.png")}
              style={{ width: 35, height: 35 }}
            />
            <Text className="text-white" style={styles.mainHearder}>
              3580
            </Text>
          </View>
        </View>
        <View
          className="bg-white"
          style={{
            paddingLeft: 20,
            paddingRight: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 99,
            marginTop: 25,
          }}
        >
          <TextInput
            placeholder="Search Courses"
            style={{ width: "100%", fontFamily: "outfit", fontSize: 18 }}
          />
          <Ionicons name="search-circle" size={50} color={"#6857E8"} />
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  mainHearder: {
    fontSize: 20,
    fontFamily: "outfit",
  },
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});

export default Header;
