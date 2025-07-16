import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Drawers from "./Drawers";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../colors";

const Nav = createNativeStackNavigator();

const Root = () => {
  return (
    <>
      <StatusBar style="dark" />
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white}}>
      <Nav.Navigator screenOptions={{ headerShown: false }}>
        <Nav.Screen name="Drawers" component={Drawers} />
      </Nav.Navigator>
    </SafeAreaView>
    </>
  );
};

export default Root;
