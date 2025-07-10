import React from "react";
import { View, Text } from "react-native";
import Charator from "../../assets/charactor.svg";

export default function Dashboard() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Charator width={200} height={200} />
    </View>
  );
}
