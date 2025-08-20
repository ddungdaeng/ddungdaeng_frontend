import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";

import Dashboard from "../screens/home/Dashboard";
import Detail from "../screens/home/Detail";
import Change from "../screens/home/Change";
import colors from "../styles/colors";
import Header from "../components/common/Header";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <TopTab.Navigator
        screenOptions={{
          tabBarStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarLabelStyle: { fontSize: 20, fontFamily: "Pretendard-Medium" },
          tabBarIndicatorStyle: { backgroundColor: colors.primary1, height: 3 },
        }}
      >
        <TopTab.Screen name="대시보드" component={Dashboard} />
        <TopTab.Screen name="상세" component={Detail} />
        <TopTab.Screen name="변화" component={Change} />
      </TopTab.Navigator>
    </View>
  );
}
