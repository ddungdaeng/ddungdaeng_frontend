//최상위 네비게이션
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../styles/colors";
import Drawers from "./Drawers";
import Stack from "./Stacks";
import Onboarding from "../screens/Onboarding";

const Nav = createNativeStackNavigator(); //스택

export default function Root() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <Nav.Navigator
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        {/* 온보딩 화면 */}
        {/* <Nav.Screen name="Onboarding" component={Onboarding} /> */}

        {/* 메인 앱 네비게이션 */}
        <Nav.Screen name="Main" component={Drawers} />

        {/* 디테일 */}
        <Nav.Screen name="Stack" component={Stack} />
      </Nav.Navigator>
    </SafeAreaView>
  );
}
