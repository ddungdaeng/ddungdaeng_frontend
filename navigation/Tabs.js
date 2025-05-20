import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import TodayWeight from "../screens/tabs/TodayWeight";
import TodayFood from "../screens/tabs/TodayFood";
import TodayWalk from "../screens/tabs/TodayWalk";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TodayWeight"
        component={TodayWeight}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="film" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="TodayFood"
        component={TodayFood}
        options={{
          tabBarBadge: 4,
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="tv" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="TodayWalk"
        component={TodayWalk}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name="search" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
