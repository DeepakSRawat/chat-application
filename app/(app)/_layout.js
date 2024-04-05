import { View, Text } from "react-native";
import React from "react";
import { Stack, Slot } from "expo-router";
import HomeHeader from "../../components/HomeHeader";
import "../../global.css";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          header: () => <HomeHeader />,
        }}
      />
    </Stack>
  );
}
