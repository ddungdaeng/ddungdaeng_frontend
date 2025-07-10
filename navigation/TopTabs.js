import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dashboard from "../screens/topTabs/Dashboard";
import Detail from "../screens/topTabs/Detail";
import Change from "../screens/topTabs/Change";
import colors from "../colors";

const TopTab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          elevation: 0, // Android 그림자 제거
          shadowOpacity: 0, // iOS 그림자 제거
        },
        tabBarLabelStyle: { fontSize: 20 },
        tabBarIndicatorStyle: { backgroundColor: colors.primary1, height: 3 },
      }}
    >
      <TopTab.Screen name="대시보드" component={Dashboard} />
      <TopTab.Screen name="상세" component={Detail} />
      <TopTab.Screen name="변화" component={Change} />
    </TopTab.Navigator>
  );
};

export default TopTabs;
