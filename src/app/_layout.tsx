import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import LoginScreen from "./(auth)/LoginScreen";

const RootLayout = () => {
  const publishableKey =
    "pk_test_dG9sZXJhbnQtbGVtbWluZy00OS5jbGVyay5hY2NvdW50cy5kZXYk";

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <RootLayoutNav />
    </ClerkProvider>
  );
};

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(stack)" />
    </Stack>
  );
}

export default RootLayout;
