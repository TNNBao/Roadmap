import { Tabs } from "expo-router";
import TabBar from "../../components/navigation/TabBar";
import { ClerkProvider } from "@clerk/clerk-expo";
import TabBarIcon from "@/src/components/navigation/TabBarIcon";

export default () => {
  const publishableKey =
    "pk_test_dG9sZXJhbnQtbGVtbWluZy00OS5jbGVyay5hY2NvdW50cy5kZXYk";

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="HomeScreen"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                focused={focused}
                label={"home"}
                name={"home"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="LeaderBoard"
          options={{
            title: "LeaderBoard",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                focused={focused}
                label={"LeaderBoard"}
                name={"home"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="MyCourse"
          options={{
            title: "MyCourse",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="ProfileScreen"
          options={{
            title: "Profile",
            headerShown: false,
          }}
        />
      </Tabs>
    </ClerkProvider>
  );
};
