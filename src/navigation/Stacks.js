import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HealthReportDetail from "../screens/HealthReportDetail";

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <NativeStack.Screen
      name="HealthReportDetail"
      component={HealthReportDetail}
    />
  </NativeStack.Navigator>
);

export default Stack;
