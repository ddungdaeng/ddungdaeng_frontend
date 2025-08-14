import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HealthReportDetail from "../screens/drawers/HealthReportDetail";
import DogRegistration from "../screens/DogRegistration";

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator screenOptions={{ headerBackTitleVisible: false }}>
    <NativeStack.Screen
      name="HealthReportDetail"
      component={HealthReportDetail}
    />
    <NativeStack.Screen name="DogRegistration" component={DogRegistration} />
  </NativeStack.Navigator>
);

export default Stack;
