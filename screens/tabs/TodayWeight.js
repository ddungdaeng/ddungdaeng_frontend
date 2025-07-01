import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function TodayWeight({ navigation: { navigate } }) {
  return (
    <TouchableOpacity
      onPress={() => navigate("TopTabs", { screen: "Dashboard" })}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>TodayWeight</Text>
    </TouchableOpacity>
  );
}
