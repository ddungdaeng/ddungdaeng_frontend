import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import TopTabs from "./TopTabs";

const Nav = createNativeStackNavigator();

const Root = () => {
  // 추가: screenOptions={{ headerShown: false }}
  return (
    <Nav.Navigator>
      <Nav.Screen name="Tabs" component={Tabs} />
      <Nav.Screen name="TopTabs" component={TopTabs} />
    </Nav.Navigator>
  );
};

export default Root;
