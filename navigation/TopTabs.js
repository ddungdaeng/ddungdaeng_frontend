import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dashboard from "../screens/topTabs/Dashboard";
import Detail from "../screens/topTabs/Detail";
import Change from "../screens/topTabs/Change";

const TobTab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <TobTab.Navigator>
      <TobTab.Screen name="대시보드" component={Dashboard} />
      <TobTab.Screen name="상세" component={Detail} />
      <TobTab.Screen name="변화" component={Change} />
    </TobTab.Navigator>
  );
};

export default TopTabs;
